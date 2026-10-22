<?php
declare(strict_types=1);

/** Serves images uploaded in the admin: /media/{type}/{file} → DATA_DIR/media/{type}/{file}. */

define('CMS_BOOT', true);
require_once dirname(__DIR__) . '/editor/bootstrap.php';

$type = (string)($_GET['type'] ?? '');
$file = (string)($_GET['f'] ?? '');
if (!in_array($type, CMS_TYPES, true) || !preg_match('/^[a-f0-9]{20}\.(jpg|png|webp|gif)$/', $file, $m)) {
    http_response_code(404);
    exit;
}
$path = MEDIA_DIR . '/' . $type . '/' . $file;
if (!is_file($path)) {
    http_response_code(404);
    exit;
}
$mime = ['jpg' => 'image/jpeg', 'png' => 'image/png', 'webp' => 'image/webp', 'gif' => 'image/gif'][$m[1]];
$mtime = (int)filemtime($path);
header('Content-Type: ' . $mime);
header('Content-Length: ' . filesize($path));
header('Cache-Control: public, max-age=31536000, immutable'); // file names are random and never reused
header('Last-Modified: ' . gmdate('D, d M Y H:i:s', $mtime) . ' GMT');
header('X-Content-Type-Options: nosniff');
readfile($path);
