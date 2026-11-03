<?php
declare(strict_types=1);

/**
 * HTML for pages rendered live from the admin's saved content. Every value is
 * escaped with h(). Styles: /cms/cms.css. The site frame (navbar, footer,
 * enquiry form…) comes from the built /cms-shell/ page — see cms_page().
 */

const CMS_WHATSAPP = '919821701155';

function cms_paragraphs($text): string {
    $parts = is_array($text) ? $text : preg_split('/\n\s*\n/u', trim((string)$text));
    $html = '';
    foreach ($parts ?: [] as $p) {
        $p = trim((string)$p);
        if ($p === '') continue;
        $html .= str_starts_with($p, '## ')
            ? '<h2>' . h(substr($p, 3)) . '</h2>'
            : '<p>' . cms_clean_html($p) . '</p>';
    }
    return $html;
}

function cms_youtube_id(string $url): ?string {
    return preg_match('~(?:youtu\.be/|youtube\.com/(?:watch\?v=|embed/|shorts/))([\w-]{11})~', $url, $m) ? $m[1] : null;
}

function cms_videos(array $urls, string $title): string {
    $html = '';
    foreach ($urls as $url) {
        $id = cms_youtube_id((string)$url);
        if (!$id) continue;
        $html .= '<div class="cms-video"><iframe src="https://www.youtube-nocookie.com/embed/' . h($id) . '?rel=0" title="' . h($title) . '" loading="lazy" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>';
    }
    return $html;
}

function cms_list(array $items, string $class = 'cms-checklist'): string {
    if (!$items) return '';
    $html = '<ul class="' . $class . '">';
    foreach ($items as $item) $html .= '<li>' . h((string)$item) . '</li>';
    return $html . '</ul>';
}

function cms_chips(array $items): string {
    if (!$items) return '';
    $html = '<div class="cms-chips">';
    foreach ($items as $item) $html .= '<span>' . h((string)$item) . '</span>';
    return $html . '</div>';
}

function cms_initials(string $name): string {
    $name = preg_replace('/^(Dr\.?|Prof\.?)\s+/i', '', $name) ?? $name;
    $out = '';
    foreach (array_slice(preg_split('/\s+/u', trim($name)) ?: [], 0, 2) as $w) $out .= mb_substr($w, 0, 1);
    return mb_strtoupper($out);
}

function cms_cta(string $whatsappText, string $quoteLabel = 'Get Free Quote'): string {
    $wa = 'https://wa.me/' . CMS_WHATSAPP . '?text=' . rawurlencode($whatsappText);
    return '<div class="cms-actions">'
        . '<a class="cms-btn cms-btn--quote" href="#cms-enquiry" data-cms-quote>' . h($quoteLabel) . ' →</a>'
        . '<a class="cms-btn cms-btn--wa" href="' . h($wa) . '" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>'
        . '</div>';
}

function cms_header(string $title, string $subtitle, array $crumbs, string $badge = ''): string {
    $html = '<header class="cms-header"><div class="cms-header__inner"><nav class="cms-crumbs" aria-label="Breadcrumb"><a href="/">Home</a>';
    foreach ($crumbs as [$label, $href]) {
        $html .= '<span aria-hidden="true">›</span>' . ($href ? '<a href="' . h($href) . '">' . h($label) . '</a>' : '<span aria-current="page">' . h($label) . '</span>');
    }
    $html .= '</nav>';
    if ($badge !== '') $html .= '<span class="cms-badge">' . h($badge) . '</span>';
    $html .= '<h1>' . h($title) . '</h1>';
    if ($subtitle !== '') $html .= '<p>' . h($subtitle) . '</p>';
    return $html . '</div></header>';
}

function cms_section(string $title, string $inner): string {
    return $inner === '' ? '' : '<section class="cms-section"><h2>' . h($title) . '</h2>' . $inner . '</section>';
}

// ── Doctor ──────────────────────────────────────────────────

function render_doctor(array $d): void {
    $name = (string)($d['name'] ?? '');
    $photo = (string)($d['photo'] ?? '');
    $facts = [
        ['Qualification', $d['qualification'] ?? ''],
        ['Hospital', $d['hospital'] ?? ''],
        ['City', $d['city'] ?? ''],
        ['Experience', !empty($d['experienceYears']) ? $d['experienceYears'] . '+ years' : ''],
        ['Languages', implode(', ', (array)($d['languages'] ?? []))],
    ];
    ob_start(); ?>
    <div class="cms-profile">
      <div class="cms-profile__photo">
        <?php if ($photo !== ''): ?><img src="<?= h($photo) ?>" alt="<?= h($name) ?>" width="220" height="260"><?php else: ?><span class="cms-initials cms-theme-<?= h($d['theme'] ?? 'blue') ?>"><?= h(cms_initials($name)) ?></span><?php endif; ?>
      </div>
      <div class="cms-profile__body">
        <span class="cms-pill"><?= h((string)($d['specialty'] ?? '')) ?></span>
        <p class="cms-profile__title"><?= h((string)($d['title'] ?? '')) ?></p>
        <?php if (!empty($d['rating'])): ?><p class="cms-rating">★ <?= h((string)$d['rating']) ?><?= !empty($d['reviews']) ? ' <span>(' . (int)$d['reviews'] . ' reviews)</span>' : '' ?></p><?php endif; ?>
        <dl class="cms-facts">
          <?php foreach ($facts as [$label, $value]): if ((string)$value === '') continue; ?>
            <div><dt><?= h($label) ?></dt><dd><?= h((string)$value) ?></dd></div>
          <?php endforeach; ?>
        </dl>
        <?= cms_cta('Hello, I would like to book a video consultation with ' . $name . '.', 'Book an Appointment') ?>
      </div>
    </div>
    <?php
    echo cms_section('About ' . $name, cms_paragraphs($d['about'] ?? ''));
    echo cms_section('Videos', cms_videos(array_filter(array_merge([(string)($d['videoUrl'] ?? '')], (array)($d['extraVideoUrls'] ?? []))), $name));
    echo cms_section('Specializations', cms_chips((array)($d['specializations'] ?? [])));
    $edu = '';
    foreach ((array)($d['education'] ?? []) as $e) $edu .= '<li><strong>' . h($e['degree'] ?? '') . '</strong><span>' . h(trim(($e['institution'] ?? '') . (!empty($e['year']) ? ' · ' . $e['year'] : ''))) . '</span></li>';
    echo cms_section('Qualifications', $edu ? '<ul class="cms-timeline">' . $edu . '</ul>' : '');
    $exp = '';
    foreach ((array)($d['experience'] ?? []) as $e) $exp .= '<li><strong>' . h($e['role'] ?? '') . '</strong><span>' . h(trim(($e['place'] ?? '') . (!empty($e['period']) ? ' · ' . $e['period'] : ''))) . '</span></li>';
    echo cms_section('Experience', $exp ? '<ul class="cms-timeline">' . $exp . '</ul>' : '');
    $awards = array_map(fn($a) => trim(($a['title'] ?? '') . (!empty($a['year']) ? ' (' . $a['year'] . ')' : '')), (array)($d['awards'] ?? []));
    echo cms_section('Awards & Achievements', cms_list($awards));
    echo cms_section('Memberships', cms_list((array)($d['memberships'] ?? [])));
    $content = (string)ob_get_clean();

    cms_page(
        $name . ' — ' . ($d['specialty'] ?? '') . ' in India | AlisPro MediTours',
        $name . ', ' . ($d['title'] ?? '') . ' at ' . ($d['hospital'] ?? '') . '.',
        '/doctors/' . $d['slug'] . '/',
        cms_header($name, (string)($d['title'] ?? ''), [['Our Doctors', '/doctors/'], [$name, '']]),
        $content
    );
}

// ── Hospital ────────────────────────────────────────────────

function render_hospital(array $hsp): void {
    $name = (string)($hsp['name'] ?? '');
    $image = (string)($hsp['image'] ?? '');
    $facts = [
        ['Type', $hsp['accreditation'] ?? ''],
        ['Location', trim(($hsp['city'] ?? '') . ', ' . ($hsp['country'] ?? ''), ', ')],
        ['Address', $hsp['address'] ?? ''],
        ['Scale', $hsp['beds'] ?? ''],
        ['Established', !empty($hsp['established']) ? (string)$hsp['established'] : ''],
        ['Certifications', implode(' · ', (array)($hsp['certs'] ?? []))],
    ];
    // Doctors whose profile lists this hospital (same text match the static pages use).
    $doctorsHere = [];
    $cityToken = trim(preg_split('/[,\/]/', (string)($hsp['city'] ?? ''))[0] ?? '');
    foreach (all_entries('doctors') as $slug => $e) {
        $hosp = (string)($e['record']['hospital'] ?? '');
        if ($name !== '' && str_contains($hosp, $name) && ($cityToken === '' || str_contains($hosp, $cityToken))) $doctorsHere[$slug] = $e['record'];
    }
    ob_start(); ?>
    <?php if ($image !== ''): ?><img class="cms-hero-image" src="<?= h($image) ?>" alt="<?= h($name) ?>" width="1200" height="600"><?php endif; ?>
    <dl class="cms-facts cms-facts--card">
      <?php foreach ($facts as [$label, $value]): if (trim((string)$value) === '') continue; ?>
        <div><dt><?= h($label) ?></dt><dd><?= h((string)$value) ?></dd></div>
      <?php endforeach; ?>
    </dl>
    <?= cms_cta('Hello, I would like a quote for treatment at ' . $name . '.') ?>
    <?php
    echo cms_section('About ' . $name, cms_paragraphs($hsp['about'] ?? ''));
    echo cms_section('Video', cms_videos([(string)($hsp['videoUrl'] ?? '')], $name));
    echo cms_section('Specialties & Departments', cms_chips((array)($hsp['specialties'] ?? [])));
    if ($doctorsHere) {
        $cards = '<div class="cms-cards">';
        foreach ($doctorsHere as $slug => $doc) {
            $img = (string)($doc['photo'] ?? '');
            $cards .= '<a class="cms-card cms-card--row" href="/doctors/' . h((string)$slug) . '/">'
                . ($img !== '' ? '<img src="' . h($img) . '" alt="" width="56" height="56">' : '<span class="cms-initials cms-initials--sm">' . h(cms_initials((string)($doc['name'] ?? ''))) . '</span>')
                . '<span><strong>' . h((string)($doc['name'] ?? '')) . '</strong><small>' . h((string)($doc['specialty'] ?? '')) . '</small></span></a>';
        }
        echo cms_section('Doctors at ' . $name, $cards . '</div>');
    }
    $content = (string)ob_get_clean();

    cms_page(
        $name . ', ' . ($hsp['city'] ?? '') . ' | Hospital Profile | AlisPro MediTours',
        $name . ' in ' . ($hsp['city'] ?? '') . ', ' . ($hsp['country'] ?? 'India') . ' — ' . ($hsp['accreditation'] ?? '') . '.',
        '/hospitals/' . $hsp['slug'] . '/',
        cms_header($name, trim(($hsp['city'] ?? '') . ', ' . ($hsp['country'] ?? ''), ', '), [['Destinations', '/destinations/'], [$name, '']], (string)($hsp['accreditation'] ?? '')),
        $content
    );
}

// ── Treatment & sub-treatment ───────────────────────────────

function treatment_image(array $t): string {
    $key = (string)($t['imageKey'] ?? '');
    return $key !== '' ? (string)(seed('meta')['treatmentImages'][$key] ?? '') : '';
}

function money($n): string {
    return '$' . number_format((float)$n);
}

function render_treatment(array $t): void {
    $name = (string)($t['name'] ?? '');
    $image = treatment_image($t);
    ob_start(); ?>
    <?php if ($image !== ''): ?><img class="cms-hero-image" src="<?= h($image) ?>" alt="<?= h($name) ?>" width="1200" height="480"><?php endif; ?>
    <div class="cms-stats">
      <?php if (!empty($t['startingPrice'])): ?><div><strong><?= h(money($t['startingPrice'])) ?></strong><span>Starting Price</span></div><?php endif; ?>
      <?php if (!empty($t['avgSavings'])): ?><div><strong><?= (int)$t['avgSavings'] ?>%</strong><span>Avg. Savings</span></div><?php endif; ?>
      <?php if (!empty($t['hospitalsCount'])): ?><div><strong><?= (int)$t['hospitalsCount'] ?>+</strong><span>Partner Hospitals</span></div><?php endif; ?>
    </div>
    <?= cms_cta('Hello, I would like a quote for ' . $name . '.') ?>
    <?php
    echo cms_section('Overview', cms_paragraphs($t['overview'] ?? ''));
    echo cms_section('Why Choose India for ' . $name, cms_list((array)($t['benefits'] ?? [])));

    $procs = (array)($t['detailedProcedures'] ?? []);
    if ($procs) {
        $cards = '<div class="cms-cards">';
        foreach ($procs as $p) {
            $teaser = (string)(preg_split('/(?<=\.)\s/u', trim((string)($p['description'] ?? '')))[0] ?? '');
            if (mb_strlen($teaser) > 170) $teaser = mb_substr($teaser, 0, 167) . '…';
            $img = (string)($p['image'] ?? '') ?: treatment_image($t);
            $cards .= '<a class="cms-card cms-card--post" href="/treatments/' . h($t['slug']) . '/' . h(slugify((string)$p['name'])) . '/">'
                . ($img !== '' ? '<img src="' . h($img) . '" alt="" width="400" height="220" loading="lazy">' : '')
                . '<strong>' . h((string)$p['name']) . '</strong><small>' . h($teaser) . '</small><span class="cms-more">View more →</span></a>';
        }
        echo cms_section('Procedures We Offer', $cards . '</div>');
    } else {
        echo cms_section('Procedures We Offer', cms_chips((array)($t['allProcedures'] ?? $t['procedures'] ?? [])));
    }

    if (!empty($t['inclusions']) || !empty($t['exclusions']) || !empty($t['packagePrice'])) {
        $pkg = '';
        if (!empty($t['packagePrice'])) {
            $pkg .= '<p class="cms-lead">Package for <strong>' . h((string)($t['flagshipProcedure'] ?? $name)) . '</strong> starts from <strong>' . h(money($t['packagePrice'])) . '</strong>'
                . (!empty($t['totalTripDays']) ? ' — plan for about <strong>' . (int)$t['totalTripDays'] . ' days</strong> in India.' : '.') . '</p>';
        }
        $pkg .= '<div class="cms-two-col">'
            . (!empty($t['inclusions']) ? '<div><h3>Package inclusions</h3>' . cms_list((array)$t['inclusions']) . '</div>' : '')
            . (!empty($t['exclusions']) ? '<div><h3>Package exclusions</h3>' . cms_list((array)$t['exclusions'], 'cms-xlist') . '</div>' : '')
            . '</div><p class="cms-note">Every case is different — these are indicative starting points. Share your medical reports for a personalised, itemised quote.</p>';
        echo cms_section('Package Cost & Hospital Stay', $pkg);
    }

    $faqs = '';
    foreach ((array)($t['faqs'] ?? []) as $f) {
        if (empty($f['question'])) continue;
        $faqs .= '<details class="cms-faq"><summary>' . h($f['question']) . '</summary>' . cms_paragraphs($f['answer'] ?? '') . '</details>';
    }
    echo cms_section('Frequently Asked Questions', $faqs);
    $content = (string)ob_get_clean();

    cms_page(
        $name . ' Cost in India (' . date('Y') . ') | Alis Pro meditours',
        (string)($t['shortDescription'] ?? ''),
        '/treatments/' . $t['slug'] . '/',
        cms_header($name, (string)($t['shortDescription'] ?? ''), [['Treatments', '/treatments/'], [$name, '']], !empty($t['avgSavings']) ? 'Save up to ' . (int)$t['avgSavings'] . '%' : ''),
        $content
    );
}

function render_procedure(array $t, array $proc): void {
    $name = (string)$proc['name'];
    $tName = (string)($t['name'] ?? '');
    $others = '';
    foreach ((array)($t['detailedProcedures'] ?? []) as $p) {
        if (($p['name'] ?? '') === $name) continue;
        $others .= '<li><a href="/treatments/' . h($t['slug']) . '/' . h(slugify((string)$p['name'])) . '/">' . h((string)$p['name']) . '</a></li>';
    }
    $image = (string)($proc['image'] ?? '') ?: treatment_image($t);
    ob_start(); ?>
    <?php if ($image !== ''): ?><img class="cms-hero-image" src="<?= h($image) ?>" alt="<?= h($name) ?>" width="1200" height="480"><?php endif; ?>
    <?= cms_section('About ' . $name, cms_paragraphs($proc['description'] ?? '')) ?>
    <?= cms_cta('Hello, I would like a quote for ' . $name . '.') ?>
    <?= cms_section('Other ' . $tName . ' Procedures', $others ? '<ul class="cms-links">' . $others . '</ul>' : '') ?>
    <p><a class="cms-back" href="/treatments/<?= h($t['slug']) ?>/">← Back to <?= h($tName) ?></a></p>
    <?php
    $content = (string)ob_get_clean();
    $first = (string)(preg_split('/(?<=\.)\s/u', trim((string)($proc['description'] ?? '')))[0] ?? '');
    cms_page(
        $name . ' in India | ' . $tName . ' | Alis Pro meditours',
        $first,
        '/treatments/' . $t['slug'] . '/' . slugify($name) . '/',
        cms_header($name, $tName, [['Treatments', '/treatments/'], [$tName, '/treatments/' . $t['slug'] . '/'], [$name, '']]),
        $content
    );
}

// ── Blog ────────────────────────────────────────────────────

function blog_date(string $iso): string {
    $ts = strtotime($iso);
    return $ts ? date('j M Y', $ts) : $iso;
}

function render_blog_post(array $p): void {
    $title = (string)($p['title'] ?? '');
    ob_start(); ?>
    <article class="cms-article">
      <?php if (!empty($p['image'])): ?><img class="cms-hero-image" src="<?= h((string)$p['image']) ?>" alt="<?= h($title) ?>" width="1200" height="630"><?php endif; ?>
      <p class="cms-meta"><span class="cms-pill"><?= h((string)($p['category'] ?? '')) ?></span> <?= h(blog_date((string)($p['date'] ?? ''))) ?><?= !empty($p['readMinutes']) ? ' · ' . (int)$p['readMinutes'] . ' min read' : '' ?></p>
      <?= cms_paragraphs($p['body'] ?? []) ?>
      <?= cms_cta('Hello, I read your article "' . $title . '" and would like some advice.') ?>
    </article>
    <?php
    $content = (string)ob_get_clean();
    cms_page(
        $title . ' | AlisPro MediTours Blog',
        (string)($p['excerpt'] ?? ''),
        '/blog/' . $p['slug'] . '/',
        cms_header($title, (string)($p['excerpt'] ?? ''), [['Blog', '/blog/'], [$title, '']], (string)($p['category'] ?? '')),
        $content
    );
}

function render_blog_index(): void {
    $posts = array_map(fn($e) => $e['record'], all_entries('blogs'));
    uasort($posts, fn($a, $b) => strcmp((string)($b['date'] ?? ''), (string)($a['date'] ?? '')));
    $cards = '<div class="cms-cards cms-cards--blog">';
    foreach ($posts as $slug => $p) {
        $cards .= '<a class="cms-card cms-card--post" href="/blog/' . h((string)$slug) . '/">'
            . (!empty($p['image']) ? '<img src="' . h((string)$p['image']) . '" alt="" width="400" height="220" loading="lazy">' : '')
            . '<span class="cms-meta"><span class="cms-pill">' . h((string)($p['category'] ?? '')) . '</span> ' . h(blog_date((string)($p['date'] ?? ''))) . '</span>'
            . '<strong>' . h((string)($p['title'] ?? '')) . '</strong><small>' . h((string)($p['excerpt'] ?? '')) . '</small><span class="cms-more">Read more →</span></a>';
    }
    cms_page(
        'Blog | Medical Travel Guides | AlisPro MediTours',
        'Guides and articles on treatment in India: costs, hospitals, visas and planning your medical trip.',
        '/blog/',
        cms_header('Medical Travel Blog', 'Guides on treatment costs, hospitals, visas and planning your trip to India.', [['Blog', '']]),
        $cards . '</div>'
    );
}
