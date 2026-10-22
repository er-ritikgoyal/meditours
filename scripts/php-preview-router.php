<?php
/**
 * Local preview of the built site WITH the PHP content editor, using PHP's
 * built-in server (which doesn't read .htaccess, so this mirrors its rules).
 *
 *   npm run preview:editor        (builds, then serves http://127.0.0.1:8080)
 *
 * Settings come from the project-root .env (git-ignored):
 *   EDITOR_PASSWORD_HASH='...'    php -n -r "echo password_hash('YourPassword', PASSWORD_BCRYPT);"
 * Saved content goes to ./cms-data/ (git-ignored) unless CMS_DATA_DIR is set.
 */

$projectRoot = dirname(__DIR__);
$docRoot = $_SERVER['DOCUMENT_ROOT'];

// Load the project-root .env into the environment (bootstrap.php falls back to getenv()).
if (is_readable($projectRoot . '/.env')) {
    foreach (file($projectRoot . '/.env', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
        if (!preg_match('/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/', $line, $m)) continue;
        $v = $m[2];
        if (strlen($v) >= 2 && $v[0] === $v[-1] && ($v[0] === '"' || $v[0] === "'")) $v = substr($v, 1, -1);
        putenv($m[1] . '=' . $v);
    }
}
if (!getenv('CMS_DATA_DIR')) putenv('CMS_DATA_DIR=' . $projectRoot . '/cms-data');

$path = (string)parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Same private paths as .htaccess.
if (preg_match('#^/(\.env|editor/(bootstrap|ui)\.php|cms/templates\.php)$#', $path)) {
    http_response_code(403);
    return true;
}
if (preg_match('#^/cms-shell(/.*)?$#', $path)) {
    http_response_code(404);
    return true;
}

$run = function (string $script, array $get = []) use ($docRoot) {
    $_GET = $get + $_GET;
    $_SERVER['SCRIPT_FILENAME'] = $docRoot . '/' . $script;
    chdir(dirname($docRoot . '/' . $script));
    require $docRoot . '/' . $script;
    return true;
};

// Same rewrites as .htaccess.
$routes = [
    '#^/media/(blogs|treatments|doctors|hospitals)/([a-f0-9]{20}\.(?:jpg|png|webp|gif))$#' => fn($m) => ['cms/media.php', ['type' => $m[1], 'f' => $m[2]]],
    '#^/sitemap\.xml$#' => fn($m) => ['cms/sitemap.php', []],
    '#^/blog/?$#' => fn($m) => ['cms/render.php', ['r' => 'blog-index']],
    '#^/blog/([a-z0-9-]+)/?$#' => fn($m) => ['cms/render.php', ['r' => 'blog', 'slug' => $m[1]]],
    '#^/doctors/([a-z0-9-]+)/?$#' => fn($m) => ['cms/render.php', ['r' => 'doctor', 'slug' => $m[1]]],
    '#^/hospitals/([a-z0-9-]+)/?$#' => fn($m) => ['cms/render.php', ['r' => 'hospital', 'slug' => $m[1]]],
    '#^/treatments/([a-z0-9-]+)/?$#' => fn($m) => ['cms/render.php', ['r' => 'treatment', 'slug' => $m[1]]],
    '#^/treatments/([a-z0-9-]+)/([a-z0-9-]+)/?$#' => fn($m) => ['cms/render.php', ['r' => 'procedure', 'slug' => $m[1], 'sub' => $m[2]]],
];
foreach ($routes as $re => $target) {
    if (preg_match($re, $path, $m)) return $run(...$target($m));
}

// Other PHP files and folder index.php (e.g. /editor/).
if (str_ends_with($path, '.php') && is_file($docRoot . $path)) return $run(ltrim($path, '/'));
if (is_file(rtrim($docRoot . $path, '/') . '/index.php')) return $run(trim($path, '/') . '/index.php');

return false; // static files: served by the built-in server
