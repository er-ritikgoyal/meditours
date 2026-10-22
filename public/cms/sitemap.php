<?php
declare(strict_types=1);

/**
 * /sitemap.xml (see .htaccess): the sitemap made at build time, kept up to
 * date with the content editor straight away —
 *   - pages created in the editor since the build are added (English; the
 *     other languages are added by the next build),
 *   - sub-treatments added to a treatment are added,
 *   - pages edited since the build get today's date as "last modified",
 *   - pages deleted in the editor are removed (every language).
 */

define('CMS_BOOT', true);
require_once dirname(__DIR__) . '/editor/bootstrap.php';

const SITE_URL = 'https://alispromeditours.com';
const TYPE_PATHS = ['blogs' => '/blog/', 'doctors' => '/doctors/', 'hospitals' => '/hospitals/', 'treatments' => '/treatments/'];

$xml = @file_get_contents(WEB_ROOT . '/sitemap.xml');
if ($xml === false) {
    $xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\" xmlns:xhtml=\"http://www.w3.org/1999/xhtml\">\n</urlset>\n";
}

$escape = fn(string $s) => htmlspecialchars($s, ENT_XML1 | ENT_QUOTES, 'UTF-8');
$hasLoc = fn(string $url) => str_contains($xml, '<loc>' . $escape($url) . '</loc>');
$add = [];

foreach (TYPE_PATHS as $type => $prefix) {
    foreach (saved($type) as $slug => $rec) {
        $slug = (string)$slug;
        if (!preg_match('/^[a-z0-9][a-z0-9-]*$/', $slug)) continue;
        $path = $prefix . $slug;

        // Deleted: drop that page in every language (and a treatment's sub-pages).
        if (!empty($rec['_cms']['deleted'])) {
            $pattern = '~\s*<url>\s*<loc>' . preg_quote(SITE_URL, '~') . '(?:/[a-z]{2})?' . preg_quote($path, '~') . '(?:/[a-z0-9-]+)?</loc>.*?</url>~s';
            $xml = preg_replace($pattern, '', $xml) ?? $xml;
            continue;
        }
        if (!newer_than_build($type, $slug, $rec)) continue;

        $date = gmdate('Y-m-d', (int)($rec['_cms']['updatedAt'] ?? time()));
        $urls = [SITE_URL . $path];
        if ($type === 'treatments') {
            foreach ((array)($rec['detailedProcedures'] ?? []) as $proc) {
                $ps = slugify((string)($proc['name'] ?? ''));
                if ($ps !== '') $urls[] = SITE_URL . $path . '/' . $ps;
            }
        }
        foreach ($urls as $url) {
            if ($hasLoc($url)) {
                // Edited: refresh "last modified" for this page in every language.
                $xml = preg_replace(
                    '~(<loc>' . preg_quote(SITE_URL, '~') . '(?:/[a-z]{2})?' . preg_quote(substr($url, strlen(SITE_URL)), '~') . '</loc>\s*<lastmod>)[^<]*(</lastmod>)~',
                    '${1}' . $date . '${2}',
                    $xml
                ) ?? $xml;
            } else {
                $add[$url] = $date;
            }
        }
    }
}

if ($add) {
    $blocks = '';
    foreach ($add as $url => $date) {
        $blocks .= "\t<url>\n\t\t<loc>" . $escape($url) . "</loc>\n\t\t<lastmod>" . $date . "</lastmod>\n\t</url>\n";
    }
    $xml = str_replace('</urlset>', $blocks . '</urlset>', $xml);
}

header('Content-Type: application/xml; charset=utf-8');
header('Cache-Control: public, max-age=600');
echo $xml;
