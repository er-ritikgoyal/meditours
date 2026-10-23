<?php
declare(strict_types=1);

/**
 * Live pages that keep the built page's exact structure: each function loads
 * the built page (the item's own, or a similar item's for new items) and
 * updates the marked fields with the saved record. See patch.php.
 * Returns false when no built page is available (the caller falls back).
 */

function cms_output(string $html): void {
    header('Content-Type: text/html; charset=utf-8');
    header('Cache-Control: no-cache');
    echo $html;
}

/** Shared start: picks the layout page and, for new items, retargets it. */
function cms_prepare(string $type, array $rec, string $prefix, ?callable $score = null): ?array {
    $slug = (string)$rec['slug'];
    $pathFor = fn(string $s) => $prefix . $s;
    $src = cms_layout_source($type, $slug, $pathFor, $score);
    if (!$src) return null;
    $old = seed_by_slug($type)[$src['slug']] ?? [];
    $oldName = (string)($old['name'] ?? $old['title'] ?? '');
    $newName = (string)($rec['name'] ?? $rec['title'] ?? '');
    $html = $src['html'];
    if (!$src['own']) {
        $html = cms_retarget($html, $oldName, $newName, $prefix . $src['slug'], $prefix . $slug);
    } elseif ($oldName !== '' && $oldName !== $newName) {
        $html = str_replace([h($oldName), $oldName], [h($newName), $newName], $html);
    }
    // The name inside pre-filled WhatsApp messages (URL-encoded).
    if ($oldName !== '' && $oldName !== $newName) $html = str_replace(rawurlencode($oldName), rawurlencode($newName), $html);
    return [$html, cms_fallback_finder($type, $pathFor, $slug)];
}

/** True when the item has its own built page (an edit), false for new items laid out on another page. */
function cms_is_own_page(string $type, string $slug, string $prefix): bool {
    return cms_built_page($prefix . $slug) !== null;
}

// ── Hospital ────────────────────────────────────────────────

function render_hospital_live(array $hsp): bool {
    $score = fn(array $r) => (($r['citySlug'] ?? '') === ($hsp['citySlug'] ?? '') ? 1000 : 0)
        + (!empty($r['image']) ? 100 : 0) + (!empty($r['address']) ? 10 : 0) + count((array)($r['specialties'] ?? []));
    $prep = cms_prepare('hospitals', $hsp, '/hospitals/', $score);
    if (!$prep) return false;
    [$html, $fb] = $prep;

    $name = (string)($hsp['name'] ?? '');
    $city = (string)($hsp['city'] ?? '');
    $country = (string)($hsp['country'] ?? 'India');
    $accreditation = (string)($hsp['accreditation'] ?? '');
    $image = (string)($hsp['image'] ?? '');
    $video = (string)($hsp['videoUrl'] ?? '');

    // Header
    $html = cms_set_text($html, 'ph-title', $name);
    $html = cms_set_text($html, 'ph-crumb', $name);
    $html = cms_set_section($html, 'ph-badge', $accreditation !== '', $fb);
    $html = cms_set_text($html, 'ph-badge', $accreditation);
    $html = cms_set_section($html, 'ph-subtitle', true, $fb);
    $html = cms_set_text($html, 'ph-subtitle', $city . ', ' . $country);

    // Photo, about, video
    $html = cms_set_section($html, 'image', $image !== '', $fb);
    if ($image !== '') $html = cms_set_image($html, 'image', $image);
    $html = cms_set_html($html, 'about', (string)($hsp['about'] ?? ''));
    $html = cms_set_hospital_writeup($html, $hsp, $fb);
    $html = cms_set_section($html, 'videoUrl', $video !== '', $fb);
    if ($video !== '') $html = cms_set_video($html, 'videoUrl', $video);

    // Specialties
    $html = cms_set_list($html, 'specialties', (array)($hsp['specialties'] ?? []), $fb);

    // Doctors whose profile lists this hospital (same match as the built page)
    $cityToken = trim((string)(preg_split('/[,\/]/u', $city)[0] ?? ''));
    $doctors = [];
    foreach (all_entries('doctors') as $slug => $e) {
        $h = (string)($e['record']['hospital'] ?? '');
        if ($name !== '' && str_contains($h, $name) && ($cityToken === '' || str_contains($h, $cityToken))) {
            $doctors[] = ['slug' => (string)$slug, 'name' => (string)($e['record']['name'] ?? ''), 'specialty' => (string)($e['record']['specialty'] ?? '')];
        }
    }
    $html = cms_set_section($html, 'doctors', (bool)$doctors, $fb);
    $html = cms_set_list($html, 'doctors', array_map(fn($d) => ['name' => $d['name'], 'specialty' => $d['specialty'], '__slug' => $d['slug']], $doctors), $fb,
        fn(string $tpl, $d) => cms_set_href($tpl, '/doctors/' . $d['__slug']));

    // Quick facts
    $html = cms_set_text($html, 'accreditation', $accreditation);
    $html = cms_set_text($html, 'beds', (string)($hsp['beds'] ?? ''));
    $html = cms_set_text($html, 'city', $city);
    $html = cms_set_text($html, 'country', $country);
    foreach (['established' => (string)($hsp['established'] ?? ''), 'address' => (string)($hsp['address'] ?? ''), 'certs' => implode(' · ', (array)($hsp['certs'] ?? []))] as $k => $v) {
        $html = cms_set_section($html, $k, $v !== '', $fb);
        $html = cms_set_text($html, $k, $v);
    }

    // Same title/description as the page template
    $html = cms_set_meta($html, $name . ', ' . $city . ' | Hospital Profile | AlisPro MediTours',
        mb_substr($name . ' in ' . $city . ', ' . $country . ' — ' . $accreditation . '. ' . ($hsp['about'] ?? ''), 0, 155));

    cms_output($html);
    return true;
}

// ── Doctor ──────────────────────────────────────────────────

/** The hospital a doctor practises at (same matching as src/utils/doctorHospital.ts). */
function cms_doctor_hospital(array $d): ?array {
    $text = (string)($d['hospital'] ?? '');
    $best = null;
    $bestScore = -1;
    foreach (all_entries('hospitals') as $e) {
        $h = $e['record'];
        $name = (string)($h['name'] ?? '');
        if ($name === '' || !str_contains($text, $name)) continue;
        $cityToken = trim((string)(preg_split('/[,\/]/u', (string)($h['city'] ?? ''))[0] ?? ''));
        $score = ($cityToken !== '' && str_contains($text, $cityToken) ? 1000 : 0) + mb_strlen($name);
        if ($score > $bestScore) { $best = $h; $bestScore = $score; }
    }
    return $best;
}

function cms_live_initials(string $name): string {
    $name = preg_replace('/^(Dr\.?|Prof\.?)\s*/iu', '', $name) ?? $name;
    $out = '';
    foreach (array_slice(array_values(array_filter(preg_split('/\s+/u', trim($name)) ?: [])), 0, 2) as $w) $out .= mb_substr($w, 0, 1);
    return mb_strtoupper($out);
}

function render_doctor_live(array $d): bool {
    $score = fn(array $r) => (!empty($r['photo']) ? 100 : 0) + count((array)($r['awards'] ?? [])) + count((array)($r['memberships'] ?? []))
        + count((array)($r['education'] ?? [])) + (!empty($r['videoUrl']) ? 5 : 0);
    $prep = cms_prepare('doctors', $d, '/doctors/', $score);
    if (!$prep) return false;
    [$html, $fb] = $prep;
    $own = cms_is_own_page('doctors', $d['slug'], '/doctors/');

    $name = (string)($d['name'] ?? '');
    foreach (['name' => $name, 'specialty' => $d['specialty'] ?? '', 'title' => $d['title'] ?? '', 'hospital' => $d['hospital'] ?? '',
        'city' => $d['city'] ?? '', 'experienceYears' => (string)($d['experienceYears'] ?? ''),
        'rating' => number_format((float)($d['rating'] ?? 0), 1), 'reviews' => (string)($d['reviews'] ?? 0),
        'languages' => implode(', ', (array)($d['languages'] ?? []))] as $k => $v) {
        $html = cms_set_text($html, $k, (string)$v);
    }

    // Profile photo, or initials when there is none
    $photo = (string)($d['photo'] ?? '');
    $html = cms_set_section($html, 'photo', $photo !== '', $fb);
    $html = cms_set_section($html, 'avatar', $photo === '', $fb);
    if ($photo !== '') $html = cms_set_image($html, 'photo', $photo);
    if ($photo === '' && trim((string)cms_inner($html, 's', 'avatar')) === '') {
        // No built page shows initials yet (every doctor has a photo): build the same markup
        // the template uses, with the component's style attribute taken from the hero.
        $cid = preg_match('/class="doctor-hero__verified"[^>]*?(data-astro-cid-[a-z0-9]+)/', $html, $m) ? ' ' . $m[1] : '';
        $html = cms_map($html, 's', 'avatar', fn() => '<span class="doctor-hero__avatar"' . $cid . '><!--cms-t:initials--><!--/cms-t:initials--></span>');
    }
    $html = cms_set_text($html, 'initials', cms_live_initials($name));
    // Colour theme of the photo box and specialty badge
    $theme = in_array($d['theme'] ?? '', ['blue', 'teal', 'green'], true) ? $d['theme'] : 'blue';
    $html = preg_replace('/(doctor-hero__(?:media|specialty)--)(?:blue|teal|green)\b/', '${1}' . $theme, $html) ?? $html;

    // Clinic photo (top right): the doctor's own, else their hospital's photo, else the placeholder
    $corner = (string)($d['topRightPhoto'] ?? '');
    if ($corner === '') $corner = (string)(cms_doctor_hospital($d)['image'] ?? '');
    $html = cms_set_section($html, 'corner-photo', $corner !== '', $fb);
    $html = cms_set_section($html, 'corner-empty', $corner === '', $fb);
    if ($corner !== '') $html = cms_set_image($html, 'corner', $corner);
    $html = cms_set_text($html, 'hospital', (string)($d['hospital'] ?? ''));

    // About: banner (not editable — only the doctor's own), paragraphs, videos
    $html = cms_set_section($html, 'banner', $own && !empty($d['bannerPhoto']), $fb);
    $paras = array_values(array_filter(array_map('trim', preg_split('/\n\s*\n/u', (string)($d['about'] ?? '')) ?: []), fn($p) => $p !== ''));
    $html = cms_set_list($html, 'about', $paras, $fb, null, ['_']);
    $videos = array_values(array_filter(array_merge([(string)($d['videoUrl'] ?? '')], (array)($d['extraVideoUrls'] ?? [])), fn($u) => trim((string)$u) !== ''));
    $items = [];
    foreach ($videos as $i => $url) {
        $items[] = ['caption' => $i === 0 ? "Watch {$name}'s video introduction" : "More from {$name}", '__url' => $url];
    }
    $html = cms_set_list($html, 'videos', $items, $fb, function (string $tpl, $item) {
        $id = cms_youtube_id($item['__url']);
        $tpl = preg_replace('/data-video-url="[^"]*"/', 'data-video-url="' . str_replace('$', '\$', h($item['__url'])) . '"', $tpl) ?? $tpl;
        if ($id) $tpl = preg_replace('~img\.youtube\.com/vi/[\w-]{11}/~', 'img.youtube.com/vi/' . $id . '/', $tpl) ?? $tpl;
        return $tpl;
    });
    $html = cms_set_section($html, 'video-modal', (bool)$videos, $fb);

    // Tabs
    $html = cms_set_list($html, 'specializations', (array)($d['specializations'] ?? []), $fb);
    $html = cms_set_list($html, 'education', array_map(fn($e) => ['degree' => $e['degree'] ?? '', 'institution' => $e['institution'] ?? '', 'year' => $e['year'] ?? ''], (array)($d['education'] ?? [])), $fb);
    $html = cms_set_list($html, 'experience', array_map(fn($e) => ['role' => $e['role'] ?? '', 'place' => $e['place'] ?? '', 'period' => $e['period'] ?? ''], (array)($d['experience'] ?? [])), $fb);
    $awards = array_map(fn($a) => ['title' => $a['title'] ?? '', 'year' => $a['year'] ?? '', 'yearText' => !empty($a['year']) ? ' (' . $a['year'] . ')' : ''], (array)($d['awards'] ?? []));
    $html = cms_set_section($html, 'tab-awards', (bool)$awards, $fb);
    $html = cms_set_list($html, 'awards', $awards, $fb);
    $memberships = (array)($d['memberships'] ?? []);
    $html = cms_set_section($html, 'tab-memberships', (bool)$memberships, $fb);
    $html = cms_set_list($html, 'memberships', $memberships, $fb);

    // Patient reviews aren't editable: keep the doctor's own, none for new doctors
    $html = cms_set_section($html, 'testimonials', $own && !empty($d['testimonials']), $fb);

    $about = (string)($d['about'] ?? '');
    $html = cms_set_meta($html, $name . ' — ' . ($d['specialty'] ?? '') . ' in India | AlisPro MediTours',
        $name . ', ' . ($d['title'] ?? '') . ' at ' . ($d['hospital'] ?? '') . '. ' . ($d['experienceYears'] ?? '') . '+ years of experience. ' . mb_substr($about, 0, 110) . '...');

    cms_output($html);
    return true;
}

// ── Treatment ───────────────────────────────────────────────

function cms_money($n): string {
    return '$' . number_format((float)$n);
}

/** Same as procedureTeaser() in the treatment page template. */
function cms_procedure_teaser(string $text): string {
    $sentence = trim(explode('. ', $text)[0]);
    $withPeriod = str_ends_with($sentence, '.') ? $sentence : $sentence . '.';
    return mb_strlen($withPeriod) > 170 ? rtrim(mb_substr($withPeriod, 0, 167)) . '…' : $withPeriod;
}

/**
 * FAQPage structured data, with the same filter as FaqAccordion.astro: answers
 * stating a percentage, a count claim or a "board" are left out.
 */
function cms_faq_schema(array $faqs): ?string {
    $percent = '/[%٪]|\b(?:percent|per cent|pour cent|por ciento|por cento)\b|la sută|процент|phần trăm|শতাংশ|في المائة|بالمئة/iu';
    $count = '/\d\s*\+|\b\d{1,3}(?:[,.\x{00a0}\x{202f} ]\d{3})+\b/u';
    $board = '/\bboard\b|comité|conseil|junta|conselho|comisi|consiliu|консилиум|совет|комисси|hội đồng|বোর্ড|মেডিকেল বোর্ড|مجلس|لجنة/iu';
    $items = [];
    foreach ($faqs as $f) {
        $q = (string)($f['question'] ?? '');
        $a = cms_plain((string)($f['answer'] ?? ''));
        if ($q === '' || preg_match($percent, $a) || preg_match($count, $a) || preg_match($board, $a)) continue;
        $items[] = ['@type' => 'Question', 'name' => $q, 'acceptedAnswer' => ['@type' => 'Answer', 'text' => $a]];
    }
    if (!$items) return null;
    $json = json_encode(['@context' => 'https://schema.org', '@type' => 'FAQPage', 'mainEntity' => $items], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    return str_replace('</', '<\/', (string)$json);
}

function cms_set_faqs(string $html, array $faqs, string $subtitle, callable $fb): string {
    $items = [];
    foreach (array_values($faqs) as $i => $f) $items[] = ['question' => $f['question'] ?? '', 'answer' => $f['answer'] ?? '', '__i' => $i];
    $html = cms_set_list($html, 'faqs', $items, $fb, fn(string $tpl, $it) =>
        preg_replace('/transition-delay:\s*\d+ms/', 'transition-delay: ' . (($it['__i'] % 4) * 60) . 'ms', $tpl, 1) ?? $tpl, ['answer']);
    $html = cms_set_text($html, 'faq-subtitle', $subtitle);
    $schema = cms_faq_schema($faqs);
    return cms_map($html, 's', 'faq-schema', fn() => $schema === null ? '' : '<script type="application/ld+json">' . $schema . '</script>');
}

/** Hero photo of a treatment/sub-treatment, or the icon tile when there is none. */
function cms_set_hero(string $html, string $url, string $theme, callable $fb, string $tileClass): string {
    $html = cms_set_section($html, 'hero-photo', $url !== '', $fb);
    $html = cms_set_section($html, 'hero-tile', $url === '', $fb);
    if ($url !== '') $html = cms_set_image($html, 'hero', $url);
    $theme = in_array($theme, ['blue', 'teal', 'green'], true) ? $theme : 'blue';
    return preg_replace('/(' . preg_quote($tileClass, '/') . '--)(?:blue|teal|green)\b/', '${1}' . $theme, $html) ?? $html;
}

/** Points the first <img> of a list item at $url (drops the built srcset variants). */
function cms_item_image(string $tpl, string $url, ?string $alt = null): string {
    if ($url === '') return $tpl;
    $tpl = preg_replace('/\s(srcset|sizes)="[^"]*"/', '', $tpl) ?? $tpl;
    $tpl = preg_replace('/(<img\b[^>]*?\ssrc=")[^"]*(")/', '${1}' . str_replace('$', '\$', h($url)) . '${2}', $tpl, 1) ?? $tpl;
    if ($alt !== null) $tpl = preg_replace('/(<img\b[^>]*?\salt=")[^"]*(")/', '${1}' . str_replace('$', '\$', h($alt)) . '${2}', $tpl, 1) ?? $tpl;
    return $tpl;
}

function render_treatment_live(array $t): bool {
    $score = fn(array $r) => (!empty($r['imageKey']) ? 100 : 0) + count((array)($r['detailedProcedures'] ?? [])) + count((array)($r['faqs'] ?? []));
    $prep = cms_prepare('treatments', $t, '/treatments/', $score);
    if (!$prep) return false;
    [$html, $fb] = $prep;
    $own = cms_is_own_page('treatments', $t['slug'], '/treatments/');
    $name = (string)($t['name'] ?? '');
    $slug = (string)$t['slug'];
    $image = treatment_image($t);
    $flagship = (string)($t['flagshipProcedure'] ?? $name);

    $html = cms_set_text($html, 'ph-title', $name);
    $html = cms_set_text($html, 'ph-crumb', $name);
    $html = cms_set_text($html, 'ph-badge', 'Save up to ' . (int)($t['avgSavings'] ?? 0) . '%');
    $html = cms_set_text($html, 'ph-subtitle', (string)($t['shortDescription'] ?? ''));
    $html = cms_set_hero($html, $image, (string)($t['theme'] ?? 'blue'), $fb, 'treatment-detail__hero-fallback');

    $html = cms_set_text($html, 'startingPrice', cms_money($t['startingPrice'] ?? 0));
    $html = cms_set_text($html, 'avgSavings', (string)(int)($t['avgSavings'] ?? 0));
    $html = cms_set_text($html, 'hospitalsCount', (string)(int)($t['hospitalsCount'] ?? 0));
    $html = cms_set_html($html, 'overview', (string)($t['overview'] ?? ''));
    $html = cms_set_list($html, 'benefits', (array)($t['benefits'] ?? []), $fb);

    $procs = [];
    foreach ((array)($t['detailedProcedures'] ?? []) as $p) {
        $procs[] = ['name' => (string)($p['name'] ?? ''), 'teaser' => cms_procedure_teaser(cms_plain((string)($p['description'] ?? ''))),
            '__href' => '/treatments/' . $slug . '/' . slugify((string)($p['name'] ?? '')), '__img' => (string)($p['image'] ?? '') ?: $image];
    }
    $html = cms_set_list($html, 'procedures', $procs, $fb, fn(string $tpl, $p) => cms_item_image(cms_set_href($tpl, $p['__href']), $p['__img'], $p['name']));

    $html = cms_set_text($html, 'flagship', $flagship);
    $html = cms_set_text($html, 'flagship-lc', mb_strtolower($flagship));
    $html = cms_set_text($html, 'packagePrice', cms_money($t['packagePrice'] ?? 0));
    $html = cms_set_text($html, 'totalTripDays', (string)(int)($t['totalTripDays'] ?? 0));
    $stay = (array)($t['stayDuration']['patient'] ?? []);
    $html = cms_set_text($html, 'stay', ((int)($stay['totalDays'] ?? 0)) > 0
        ? $stay['totalDays'] . ' days total — ' . (int)($stay['icuDays'] ?? 0) . ' ICU + ' . (int)($stay['roomDays'] ?? 0) . ' room'
        : 'Outpatient / same-day procedure');
    // Not editable here: keep the treatment's own; new treatments have none.
    $html = cms_set_section($html, 'donor', $own && !empty($t['stayDuration']['donor']), $fb);
    $html = cms_set_section($html, 'cost-table', $own && !empty($t['costComparison']), $fb);
    $html = cms_set_list($html, 'inclusions', (array)($t['inclusions'] ?? []), $fb);
    $html = cms_set_list($html, 'exclusions', (array)($t['exclusions'] ?? []), $fb);
    $html = cms_set_text($html, 'name-lc', mb_strtolower($name));
    $html = cms_set_faqs($html, (array)($t['faqs'] ?? []), 'Common questions about ' . mb_strtolower($flagship) . ' and treatment in India.', $fb);

    $html = cms_set_meta($html, $name . ' Cost in India (' . date('Y') . ') | Alis Pro Med Tour', (string)($t['shortDescription'] ?? ''));
    cms_output($html);
    return true;
}

// ── Sub-treatment ───────────────────────────────────────────

function render_procedure_live(array $t, array $proc): bool {
    $tSlug = (string)$t['slug'];
    $pName = (string)($proc['name'] ?? '');
    $pSlug = slugify($pName);
    $prefix = '/treatments/' . $tSlug . '/';
    $seedT = seed_by_slug('treatments')[$tSlug] ?? null;

    // Layout: this sub-treatment's own page, else a sibling sub-treatment's, else any sub-treatment page.
    $html = cms_built_page($prefix . $pSlug);
    if ($html === null) {
        $candidates = [];
        foreach ((array)($seedT['detailedProcedures'] ?? []) as $p) $candidates[] = [$tSlug, (string)$p['name']];
        foreach (seed_by_slug('treatments') as $s => $other) {
            foreach ((array)($other['detailedProcedures'] ?? []) as $p) $candidates[] = [(string)$s, (string)$p['name']];
        }
        foreach ($candidates as [$cs, $cn]) {
            $page = cms_built_page('/treatments/' . $cs . '/' . slugify($cn));
            if ($page === null) continue;
            $html = cms_retarget($page, $cn, $pName, '/treatments/' . $cs . '/' . slugify($cn), $prefix . $pSlug);
            $html = str_replace(rawurlencode($cn), rawurlencode($pName), $html);
            if ($cs !== $tSlug) {
                // Laid out on another treatment's sub-page: point its links and name at this treatment.
                $html = str_replace(['/treatments/' . $cs . '"', '/treatments/' . $cs . '/'], ['/treatments/' . $tSlug . '"', '/treatments/' . $tSlug . '/'], $html);
                $seedT = seed_by_slug('treatments')[$cs] ?? $seedT;
            }
            break;
        }
        if ($html === null) return false;
    }
    // Treatment name (badge, breadcrumb, "Back to …"): follow a rename / the layout page's treatment.
    $oldTName = (string)($seedT['name'] ?? '');
    $tName = (string)($t['name'] ?? '');
    if ($oldTName !== '' && $oldTName !== $tName) $html = str_replace([h($oldTName), $oldTName], [h($tName), $tName], $html);

    $fb = cms_fallback_finder('treatments', fn($s) => '/treatments/' . $s, $tSlug);
    $html = cms_set_text($html, 'ph-title', $pName);
    $html = cms_set_text($html, 'ph-crumb', $pName);
    $html = cms_set_text($html, 'ph-badge', $tName);
    $html = cms_set_text($html, 'ph-subtitle', 'Part of our ' . $tName . ' program — save up to ' . (int)($t['avgSavings'] ?? 0) . '% compared to Western pricing.');
    $image = (string)($proc['image'] ?? '') ?: treatment_image($t);
    $html = cms_set_hero($html, $image, (string)($t['theme'] ?? 'blue'), $fb, 'procedure-detail__hero-fallback');
    $html = cms_set_text($html, 'name', $pName);
    $html = cms_set_html($html, 'description', (string)($proc['description'] ?? ''));
    $others = [];
    foreach ((array)($t['detailedProcedures'] ?? []) as $p) {
        if (($p['name'] ?? '') === $pName) continue;
        $others[] = ['name' => (string)$p['name'], '__href' => $prefix . slugify((string)$p['name'])];
    }
    $html = cms_set_list($html, 'others', $others, fn() => null, fn(string $tpl, $o) => cms_set_href($tpl, $o['__href']));
    $html = cms_set_text($html, 'name-lc', mb_strtolower($pName));

    $first = trim(explode('. ', cms_plain((string)($proc['description'] ?? '')))[0]);
    $first = str_ends_with($first, '.') ? $first : $first . '.';
    if (mb_strlen($first) > 155) $first = rtrim(mb_substr($first, 0, 152)) . '…';
    $html = cms_set_meta($html, $pName . ' in India (' . date('Y') . ') | Alis Pro Med Tour', $first);
    cms_output($html);
    return true;
}

// ── Blog ────────────────────────────────────────────────────

function cms_blog_date(string $iso): string {
    $ts = strtotime($iso . ' 00:00:00 UTC');
    return $ts ? gmdate('j F Y', $ts) : $iso;
}

function render_blog_post_live(array $p): bool {
    $prep = cms_prepare('blogs', $p, '/blog/');
    if (!$prep) return false;
    [$html, $fb] = $prep;
    $title = (string)($p['title'] ?? '');
    $html = cms_set_text($html, 'ph-title', $title);
    $html = cms_set_text($html, 'ph-crumb', $title);
    $html = cms_set_text($html, 'ph-badge', (string)($p['category'] ?? ''));
    $html = cms_set_text($html, 'ph-subtitle', cms_blog_date((string)($p['date'] ?? '')) . ' · ' . (int)($p['readMinutes'] ?? 0) . ' min read');
    if (!empty($p['image'])) $html = cms_set_image($html, 'cover', (string)$p['image']);

    // Paragraphs and "## " subheadings, each from its own pattern.
    $html = cms_map($html, 'l', 'body', function (string $inner) use ($p, $fb) {
        $tp = cms_inner($inner, 'i', 'body-p') ?? $fb('i', 'body-p');
        $th = cms_inner($inner, 'i', 'body-h') ?? $fb('i', 'body-h');
        $out = '';
        foreach ((array)($p['body'] ?? []) as $block) {
            $block = (string)$block;
            if (str_starts_with($block, '## ') && $th !== null) $out .= '<!--cms-i:body-h-->' . cms_fill_item($th, substr($block, 3)) . '<!--/cms-i:body-h-->';
            elseif ($tp !== null) $out .= '<!--cms-i:body-p-->' . cms_fill_item($tp, $block, null, ['_']) . '<!--/cms-i:body-p-->';
        }
        return $out;
    });
    $html = cms_set_meta($html, $title . ' | AlisPro MediTours', (string)($p['excerpt'] ?? ''));
    cms_output($html);
    return true;
}

function render_blog_index_live(): bool {
    $html = cms_built_page('/blog');
    if ($html === null) return false;
    $posts = [];
    foreach (all_entries('blogs') as $slug => $e) $posts[(string)$slug] = $e['record'];
    uasort($posts, fn($a, $b) => strcmp((string)($b['date'] ?? ''), (string)($a['date'] ?? '')));
    $items = [];
    foreach ($posts as $slug => $p) {
        $items[] = ['meta' => ($p['category'] ?? '') . ' · ' . cms_blog_date((string)($p['date'] ?? '')) . ' · ' . (int)($p['readMinutes'] ?? 0) . ' min read',
            'title' => (string)($p['title'] ?? ''), 'excerpt' => (string)($p['excerpt'] ?? ''), '__href' => '/blog/' . $slug, '__img' => (string)($p['image'] ?? '')];
    }
    $html = cms_set_list($html, 'posts', $items, fn() => null, fn(string $tpl, $it) => cms_item_image(cms_set_href($tpl, $it['__href']), $it['__img'], $it['title']));
    cms_output($html);
    return true;
}

/** Paragraphs of an editor text field (blank line between paragraphs). */
function cms_paras(?string $text): array {
    return array_values(array_filter(array_map('trim', preg_split('/\n\s*\n/u', (string)$text) ?: []), fn($p) => $p !== ''));
}

/**
 * The hospital write-up: history, specialities, technology and international
 * parts (each added, updated or removed), followed by the shared sections the
 * page already has; or the overview when there is no write-up.
 */
function cms_set_hospital_writeup(string $html, array $hsp, callable $fb): string {
    $parts = [];
    foreach (['history' => 'aboutHistory', 'specialities' => 'aboutSpecialities', 'technology' => 'aboutTechnology', 'international' => 'aboutInternational'] as $key => $field) {
        $parts[$key] = cms_paras($hsp[$field] ?? '');
    }
    $hasWriteUp = (bool)array_filter($parts);
    $cid = preg_match('/class="hospital-detail__section"[^>]*?(data-astro-cid-[a-z0-9]+)/', $html, $m) ? ' ' . $m[1] : '';

    if ($hasWriteUp) {
        // The page must show the write-up block (it may be showing the overview instead): borrow it from another hospital page.
        if (!str_contains((string)cms_inner($html, 's', 'about-long'), 'hospital-detail__long')) {
            $block = $fb('s', 'about-long');
            if ($block !== null && str_contains($block, 'hospital-detail__long')) $html = cms_map($html, 's', 'about-long', fn() => $block);
        }
        foreach ($parts as $key => $paras) {
            $html = cms_set_section($html, 'about-' . $key, (bool)$paras, $fb);
            $html = cms_set_list($html, 'about-' . $key, $paras, $fb, null, ['_']);
        }
        return $html;
    }

    // No write-up: the overview paragraph (or nothing).
    $overview = trim((string)($hsp['overview'] ?? ''));
    return cms_map($html, 's', 'about-long', fn() => $overview === '' ? ''
        : '<!--cms-s:overview--><p' . $cid . '><!--cms-t:overview-->' . cms_clean_html($overview) . '<!--/cms-t:overview--></p><!--/cms-s:overview-->');
}
