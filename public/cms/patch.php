<?php
declare(strict_types=1);

/**
 * Updates a BUILT page in place so live edits keep the exact page structure.
 *
 * The English templates wrap editable content in invisible markers
 * (src/components/CmsMark.astro), e.g. <!--cms-t:about-->…<!--/cms-t:about-->.
 * This works on plain text — never an HTML parser, which would mangle the
 * page's inline scripts — and only touches what is between markers:
 *
 *   t   text value             → replaced (escaped)
 *   l/i/v list / item / value  → items rebuilt from the page's own first item
 *   s   optional block         → emptied when there's no value; when needed
 *                                but missing here, copied from another built
 *                                page of the same type
 *   img image                  → src swapped, srcset/sizes dropped
 */

/** All [innerStart, innerEnd] ranges of a marker kind+key, in order. */
function cms_ranges(string $html, string $kind, string $key): array {
    $open = '<!--cms-' . $kind . ':' . $key . '-->';
    $close = '<!--/cms-' . $kind . ':' . $key . '-->';
    $out = [];
    $pos = 0;
    while (($a = strpos($html, $open, $pos)) !== false) {
        $start = $a + strlen($open);
        $b = strpos($html, $close, $start);
        if ($b === false) break;
        $out[] = [$start, $b];
        $pos = $b + strlen($close);
    }
    return $out;
}

/** Replaces the inside of every marker kind+key with $fn(oldInner). */
function cms_map(string $html, string $kind, string $key, callable $fn): string {
    foreach (array_reverse(cms_ranges($html, $kind, $key)) as [$a, $b]) {
        $html = substr($html, 0, $a) . $fn(substr($html, $a, $b - $a)) . substr($html, $b);
    }
    return $html;
}

/** The inside of the first marker kind+key, or null. */
function cms_inner(string $html, string $kind, string $key): ?string {
    $r = cms_ranges($html, $kind, $key);
    return $r ? substr($html, $r[0][0], $r[0][1] - $r[0][0]) : null;
}

function cms_set_text(string $html, string $key, $value): string {
    return cms_map($html, 't', $key, fn() => h(is_array($value) ? implode(' · ', $value) : (string)$value));
}

/** Like cms_set_text for rich-text fields: the value may contain (allowlisted) HTML. */
function cms_set_html(string $html, string $key, string $value): string {
    return cms_map($html, 't', $key, fn() => cms_clean_html($value));
}

/** Empties optional blocks without a value; fills missing ones from $fallback() when there is a value. */
function cms_set_section(string $html, string $key, bool $present, callable $fallback): string {
    return cms_map($html, 's', $key, function (string $inner) use ($present, $fallback, $key) {
        if (!$present) return '';
        return trim($inner) !== '' ? $inner : (string)$fallback('s', $key);
    });
}

/**
 * One list item from a template: fills <!--cms-v:…--> values; $attrs may rewrite href/src.
 * Values named in $rich (e.g. "answer", or "_" for plain-list items) may contain HTML.
 */
function cms_fill_item(string $tpl, $item, ?callable $attrs = null, array $rich = []): string {
    $fmt = fn(string $key, string $val) => in_array($key, $rich, true) ? cms_clean_html($val) : h($val);
    if (is_array($item)) {
        foreach ($item as $sub => $val) {
            if (is_array($val)) continue;
            $tpl = cms_map($tpl, 'v', (string)$sub, fn() => $fmt((string)$sub, (string)$val));
        }
        // Optional parts inside an item (e.g. an education year): drop when this item has no value.
        if (preg_match_all('/<!--cms-s:([A-Za-z0-9_-]+)-->/', $tpl, $m)) {
            foreach (array_unique($m[1]) as $sk) {
                $has = isset($item[$sk]) && !is_array($item[$sk]) && trim((string)$item[$sk]) !== '';
                if (!$has) $tpl = cms_map($tpl, 's', $sk, fn() => '');
            }
        }
    } else {
        $tpl = cms_map($tpl, 'v', '_', fn() => $fmt('_', (string)$item));
    }
    return $attrs ? $attrs($tpl, $item) : $tpl;
}

/**
 * Rebuilds a list from the page's own first item (or, when the page has no
 * items, an item borrowed from another built page of the same type).
 */
function cms_set_list(string $html, string $key, array $items, callable $fallback, ?callable $attrs = null, array $rich = []): string {
    return cms_map($html, 'l', $key, function (string $inner) use ($key, $items, $fallback, $attrs, $rich) {
        $open = '<!--cms-i:' . $key . '-->';
        $close = '<!--/cms-i:' . $key . '-->';
        $tplInner = cms_inner($inner, 'i', $key);
        if ($tplInner === null) $tplInner = $fallback('i', $key);
        if ($tplInner === null) return $inner; // no pattern anywhere: leave as built
        $out = '';
        foreach (array_values($items) as $item) $out .= $open . cms_fill_item($tplInner, $item, $attrs, $rich) . $close;
        return $out;
    });
}

/** Points the image(s) inside an img marker at $url (drops the built srcset variants). */
function cms_set_image(string $html, string $key, string $url): string {
    return cms_map($html, 'img', $key, function (string $inner) use ($url) {
        $inner = preg_replace('/\s(srcset|sizes)="[^"]*"/', '', $inner) ?? $inner;
        return preg_replace('/(<img\b[^>]*?\ssrc=")[^"]*(")/', '${1}' . str_replace('$', '\$', h($url)) . '${2}', $inner) ?? $inner;
    });
}

/** Swaps the first href in an item template. */
function cms_set_href(string $tpl, string $href): string {
    return preg_replace('/\shref="[^"]*"/', ' href="' . str_replace('$', '\$', h($href)) . '"', $tpl, 1) ?? $tpl;
}

/** <title>, description and social tags. */
function cms_set_meta(string $html, string $title, string $description): string {
    $title = cms_plain($title);
    $description = cms_plain($description);
    if (mb_strlen($description) > 158) $description = rtrim(mb_substr($description, 0, 155)) . '…';
    $t = str_replace('$', '\$', h($title));
    $d = str_replace('$', '\$', h($description));
    $html = preg_replace('~<title>[^<]*</title>~', '<title>' . $t . '</title>', $html, 1) ?? $html;
    $html = preg_replace('~(<meta\s+(?:name|property)="(?:og:|twitter:)?title"\s+content=")[^"]*(")~', '${1}' . $t . '${2}', $html) ?? $html;
    return preg_replace('~(<meta\s+(?:name|property)="(?:og:|twitter:)?description"\s+content=")[^"]*(")~', '${1}' . $d . '${2}', $html) ?? $html;
}

/**
 * For a NEW item laid out on another item's page: replaces that item's name
 * and web address throughout, and drops the other-language links (those
 * pages appear with the next build).
 */
function cms_retarget(string $html, string $oldName, string $newName, string $oldPath, string $newPath): string {
    $html = str_replace([$oldPath . '/', $oldPath . '"', $oldPath . '<'], [$newPath . '/', $newPath . '"', $newPath . '<'], $html);
    if ($oldName !== '' && $oldName !== $newName) {
        $html = str_replace([h($oldName), $oldName, htmlspecialchars($oldName, ENT_NOQUOTES)], [h($newName), $newName, htmlspecialchars($newName, ENT_NOQUOTES)], $html);
    }
    return preg_replace('~<link\s+rel="alternate"\s+hreflang="[^"]*"[^>]*>~', '', $html) ?? $html;
}

/** The built static page for a path, or null. */
function cms_built_page(string $path): ?string {
    static $cache = [];
    if (!array_key_exists($path, $cache)) {
        $file = WEB_ROOT . rtrim($path, '/') . '/index.html';
        $cache[$path] = is_file($file) ? (string)file_get_contents($file) : null;
    }
    return $cache[$path];
}

/**
 * Finds a marker's content on other built pages of the same type, for items
 * whose own page doesn't have that block/list item. $pathFor(slug) gives a page path.
 */
function cms_fallback_finder(string $type, callable $pathFor, string $skipSlug = ''): callable {
    return function (string $kind, string $key) use ($type, $pathFor, $skipSlug) {
        foreach (array_keys(seed_by_slug($type)) as $slug) {
            if ($slug === $skipSlug) continue;
            $page = cms_built_page($pathFor((string)$slug));
            if ($page === null) continue;
            $inner = cms_inner($page, $kind, $key);
            if ($inner !== null && trim($inner) !== '') return $inner;
        }
        return null;
    };
}

/** Swaps the YouTube video id inside a block (the template's id → the new one). */
function cms_set_video(string $html, string $key, string $url): string {
    $id = cms_youtube_id($url);
    if (!$id) return $html;
    return cms_map($html, 's', $key, function (string $inner) use ($id) {
        if (!preg_match('~(?:youtu\.be/|youtube\.com/(?:watch\?v=|embed/|shorts/)|img\.youtube\.com/vi/)([\w-]{11})~', $inner, $m)) return $inner;
        return str_replace($m[1], $id, $inner);
    });
}

/** Picks the built page an item is laid out on: its own, else the closest similar item's. */
function cms_layout_source(string $type, string $slug, callable $pathFor, ?callable $score = null): ?array {
    $own = cms_built_page($pathFor($slug));
    if ($own !== null) return ['html' => $own, 'slug' => $slug, 'own' => true];
    $best = null;
    $bestScore = -1;
    foreach (seed_by_slug($type) as $s => $rec) {
        $sc = $score ? $score($rec) : 0;
        if ($sc > $bestScore && cms_built_page($pathFor((string)$s)) !== null) {
            $best = (string)$s;
            $bestScore = $sc;
        }
    }
    return $best === null ? null : ['html' => cms_built_page($pathFor($best)), 'slug' => $best, 'own' => false];
}
