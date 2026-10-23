<?php
declare(strict_types=1);

/**
 * Front controller for content pages (see public/.htaccess):
 *   /blog/, /blog/{slug}/, /doctors/{slug}/, /hospitals/{slug}/,
 *   /treatments/{slug}/, /treatments/{slug}/{sub}/
 *
 * Shows the admin's saved version when it was saved after the deployed build
 * (so edits go live instantly); otherwise serves the normal static page.
 */

define('CMS_BOOT', true);
require_once dirname(__DIR__) . '/editor/bootstrap.php';
require_once __DIR__ . '/templates.php';
require_once __DIR__ . '/patch.php';
require_once __DIR__ . '/pages.php';

$route = (string)($_GET['r'] ?? '');
$slug = (string)($_GET['slug'] ?? '');
$sub = (string)($_GET['sub'] ?? '');
foreach ([$slug, $sub] as $part) {
    if ($part !== '' && !preg_match('/^[a-z0-9][a-z0-9-]*$/', $part)) not_found();
}

switch ($route) {
    case 'blog-index':
        // Every page keeps the built page's structure; the simple templates are only a
        // fallback for when no built page exists.
        $listChanged = false;
        foreach (all_entries('blogs') as $e) if ($e['live']) $listChanged = true;
        // Also when an admin-created post was deleted since the build.
        foreach (saved('blogs') as $s => $rec) if (deleted_after_build('blogs', (string)$s)) $listChanged = true;
        if ($listChanged) { render_blog_index_live() || render_blog_index(); exit; }
        serve_static('/blog/');

    case 'blog':
        serve_record('blogs', $slug, fn($r) => render_blog_post_live($r) || render_blog_post($r), '/blog/' . $slug . '/');

    case 'doctor':
        serve_record('doctors', $slug, fn($r) => render_doctor_live($r) || render_doctor($r), '/doctors/' . $slug . '/');

    case 'hospital':
        // Same structure as the built page; the simple template only if no built page exists.
        serve_record('hospitals', $slug, fn($r) => render_hospital_live($r) || render_hospital($r), '/hospitals/' . $slug . '/');

    case 'treatment':
        serve_record('treatments', $slug, fn($r) => render_treatment_live($r) || render_treatment($r), '/treatments/' . $slug . '/');

    case 'procedure':
        $t = live_record('treatments', $slug);
        if ($t) {
            foreach ((array)($t['detailedProcedures'] ?? []) as $proc) {
                if (slugify((string)($proc['name'] ?? '')) === $sub) { render_procedure_live($t, $proc) || render_procedure($t, $proc); exit; }
            }
            not_found();
        }
        if (deleted_after_build('treatments', $slug)) not_found();
        serve_static('/treatments/' . $slug . '/' . $sub . '/');

    default:
        not_found();
}

function serve_record(string $type, string $slug, callable $render, string $staticPath): never {
    $rec = live_record($type, $slug);
    if ($rec) { $render($rec); exit; }
    if (deleted_after_build($type, $slug)) not_found();
    serve_static($staticPath);
}

/** Sends the built static page for a path, or the 404 page. */
function serve_static(string $path): never {
    $file = WEB_ROOT . $path . 'index.html';
    $real = realpath($file);
    if ($real === false || !str_starts_with($real, realpath(WEB_ROOT)) || !is_file($real)) not_found();
    header('Content-Type: text/html; charset=utf-8');
    header('Last-Modified: ' . gmdate('D, d M Y H:i:s', (int)filemtime($real)) . ' GMT');
    if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'HEAD') readfile($real);
    exit;
}

function not_found(): never {
    http_response_code(404);
    header('Content-Type: text/html; charset=utf-8');
    $page = WEB_ROOT . '/404.html';
    if (is_file($page)) readfile($page);
    else echo '<!doctype html><title>Page not found</title><h1>Page not found</h1><p><a href="/">Go to the homepage</a></p>';
    exit;
}

/**
 * Wraps content in the built site frame (/cms-shell/index.html): real navbar,
 * search banner, footer, cookie bar, tracking and enquiry form.
 */
function cms_page(string $title, string $description, string $path, string $header, string $content): void {
    $shell = @file_get_contents(WEB_ROOT . '/cms-shell/index.html');
    if ($shell === false) {
        $shell = '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>%%CMS_TITLE%%</title><meta name="description" content="%%CMS_DESCRIPTION%%"></head><body><!--CMS_HEADER--><main style="max-width:1100px;margin:0 auto;padding:24px"><!--CMS_CONTENT--></main></body></html>';
    }
    if (mb_strlen($description) > 158) $description = rtrim(mb_substr($description, 0, 155)) . '…';
    $html = strtr($shell, [
        '%%CMS_TITLE%%' => h($title),
        '%%CMS_DESCRIPTION%%' => h($description),
        '/cms-shell/' => $path,
        '/cms-shell' => rtrim($path, '/'),
        '<!--CMS_HEADER-->' => $header,
        '<!--CMS_CONTENT-->' => $content,
        '</head>' => '<link rel="stylesheet" href="/cms/cms.css?v=1"></head>',
    ]);
    header('Content-Type: text/html; charset=utf-8');
    header('Cache-Control: no-cache');
    echo $html;
}
