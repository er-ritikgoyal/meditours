<?php
declare(strict_types=1);

/**
 * Hands the admin's saved content to the site build (scripts/pull-cms-data.mjs):
 *   GET /editor/api/export.php   with header  X-CMS-Key: <CMS_EXPORT_KEY from .env>
 * Returns { blogs: {...}, treatments: {...}, doctors: {...}, hospitals: {...} },
 * each keyed by slug, including deletion markers.
 */

define('CMS_BOOT', true);
require_once dirname(__DIR__) . '/bootstrap.php';

$key = cms_env('CMS_EXPORT_KEY');
$given = (string)($_SERVER['HTTP_X_CMS_KEY'] ?? '');
if (strlen($key) < 24 || !hash_equals($key, $given)) {
    usleep(300_000);
    http_response_code(403);
    header('Content-Type: application/json');
    echo '{"error":"forbidden"}';
    exit;
}

$out = [];
// Only editor changes: imported copies of the site's own content must never override the build.
foreach (CMS_TYPES as $type) $out[$type] = (object)array_filter(saved($type), fn($r) => !is_imported($r));
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
echo json_encode($out, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
