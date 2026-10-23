<?php
declare(strict_types=1);

/**
 * Shared core for the content admin (/editor/) and the live page renderer
 * (/cms/render.php). Modelled on the AlisPro editor.
 *
 * Storage
 *   - The site's content as of the last build is published by Astro as
 *     /editor-seed/{blogs,doctors,hospitals,treatments,meta}.json.
 *   - Everything saved in the admin goes to DATA_DIR/{type}.json, keyed by
 *     slug. DATA_DIR sits OUTSIDE the web root, so uploading a new build never
 *     deletes it, and the web can't read it directly.
 *   - Uploaded images go to DATA_DIR/media/{type}/ and are served by
 *     /cms/media.php as /media/{type}/{file}.
 *   - What the admin shows = the build snapshot, overlaid with saved records.
 *
 * Going live
 *   - A record saved after the last build is rendered live by PHP straight
 *     away; everything else is served as the normal static page.
 *   - The next `npm run build` pulls the saved records (scripts/pull-cms-data.mjs),
 *     so the static pages — and menus, search, the other languages — catch up.
 *
 * Configuration lives in .env in the web root (blocked in .htaccess):
 *   EDITOR_PASSWORD_HASH   bcrypt hash of the editor password
 *                          php -r "echo password_hash('YourPassword', PASSWORD_BCRYPT, ['cost'=>12]);"
 *   CMS_EXPORT_KEY         long random string the build uses to pull saved content
 *   CMS_DATA_DIR           optional: override where data is stored
 */

if (!defined('CMS_BOOT')) {
    // Only reachable through require_once from another script.
    if (realpath(__FILE__) === realpath($_SERVER['SCRIPT_FILENAME'] ?? '')) {
        http_response_code(403);
        exit;
    }
    define('CMS_BOOT', true);
}

define('WEB_ROOT', dirname(__DIR__));

function cms_env(string $key): string {
    static $env = null;
    if ($env === null) {
        $env = [];
        $path = WEB_ROOT . '/.env';
        if (is_readable($path)) {
            foreach (file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
                $line = trim($line);
                if ($line === '' || $line[0] === '#' || !str_contains($line, '=')) continue;
                [$k, $v] = explode('=', $line, 2);
                $v = trim($v);
                if (strlen($v) >= 2 && $v[0] === $v[-1] && ($v[0] === '"' || $v[0] === "'")) $v = substr($v, 1, -1);
                $env[trim($k)] = $v;
            }
        }
    }
    return $env[$key] ?? (getenv($key) ?: '');
}

define('DATA_DIR', rtrim(cms_env('CMS_DATA_DIR') ?: dirname(WEB_ROOT) . '/cms-data', '/\\'));
define('MEDIA_DIR', DATA_DIR . '/media');
define('SEED_DIR', WEB_ROOT . '/editor-seed');
define('LOCKOUT_FILE', DATA_DIR . '/lockout.json');
define('SESSION_NAME', 'alispro_meditours_editor_v1');
define('MAX_UPLOAD_BYTES', 5 * 1024 * 1024);

const CMS_TYPES = ['blogs', 'treatments', 'doctors', 'hospitals'];

/** Languages editors can translate into (English is the main version). */
const CMS_LOCALES = [
    'fr' => 'Français', 'es' => 'Español', 'pt' => 'Português', 'ro' => 'Română',
    'ru' => 'Русский', 'bn' => 'বাংলা', 'vi' => 'Tiếng Việt', 'ar' => 'العربية',
];

/**
 * Fields editors can translate, per type. A list of keys marks a repeating
 * group: only those sub-fields are translated, row by row.
 */
const CMS_TRANSLATABLE = [
    'blogs' => ['title' => true, 'excerpt' => true, 'category' => true, 'body' => true],
    'treatments' => ['name' => true, 'shortDescription' => true, 'overview' => true, 'procedures' => true, 'benefits' => true,
        'detailedProcedures' => ['name', 'description'], 'flagshipProcedure' => true, 'inclusions' => true, 'exclusions' => true,
        'faqs' => ['question', 'answer']],
    'doctors' => ['name' => true, 'specialty' => true, 'title' => true, 'qualification' => true, 'hospital' => true, 'city' => true,
        'languages' => true, 'about' => true, 'specializations' => true, 'education' => ['degree', 'institution'],
        'experience' => ['role', 'place', 'period'], 'awards' => ['title'], 'memberships' => true],
    'hospitals' => ['name' => true, 'city' => true, 'accreditation' => true, 'specialties' => true, 'beds' => true, 'about' => true,
        'aboutHistory' => true, 'aboutSpecialities' => true, 'aboutTechnology' => true, 'aboutInternational' => true, 'overview' => true],
];

function h(?string $str): string {
    return htmlspecialchars((string)$str, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

// ── Session, auth, CSRF ─────────────────────────────────────

function start_session(): void {
    if (session_status() === PHP_SESSION_NONE) {
        session_name(SESSION_NAME);
        session_set_cookie_params([
            'lifetime' => 0,
            'path'     => '/',
            'httponly' => true,
            'secure'   => !empty($_SERVER['HTTPS']),
            'samesite' => 'Lax',
        ]);
        session_start();
    }
}

function is_authenticated(): bool {
    start_session();
    return ($_SESSION['editor_authed'] ?? false) === true;
}

function require_auth(): void {
    if (!is_authenticated()) {
        header('Location: /editor/login.php');
        exit;
    }
}

function csrf_token(): string {
    start_session();
    if (empty($_SESSION['csrf_token'])) $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    return $_SESSION['csrf_token'];
}

function verify_csrf(?string $token): bool {
    start_session();
    return isset($_SESSION['csrf_token'], $token) && hash_equals($_SESSION['csrf_token'], $token);
}

function flash(string $msg = '', string $type = 'success'): array {
    start_session();
    if ($msg !== '') {
        $_SESSION['flash'] = ['msg' => $msg, 'type' => $type];
        return [];
    }
    $f = $_SESSION['flash'] ?? [];
    unset($_SESSION['flash']);
    return $f;
}

function redirect(string $url, string $msg = '', string $type = 'success'): never {
    if ($msg !== '') flash($msg, $type);
    header('Location: ' . $url);
    exit;
}

// ── Brute-force lockout: 5 attempts per IP, then 15 minutes ──

function _lockout_data(): array {
    if (!is_file(LOCKOUT_FILE)) return [];
    $d = json_decode((string)file_get_contents(LOCKOUT_FILE), true);
    return is_array($d) ? $d : [];
}

function _save_lockout(array $data): void {
    if (!is_dir(DATA_DIR)) mkdir(DATA_DIR, 0755, true);
    file_put_contents(LOCKOUT_FILE, json_encode($data), LOCK_EX);
}

function is_locked_out(): bool {
    $e = _lockout_data()[$_SERVER['REMOTE_ADDR'] ?? 'unknown'] ?? null;
    return $e && ($e['locked_until'] ?? 0) > time();
}

function record_failed_login(): void {
    $ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    $now = time();
    $data = _lockout_data();
    $e = $data[$ip] ?? ['count' => 0, 'window_start' => $now, 'locked_until' => 0];
    if ($now - ($e['window_start'] ?? 0) > 900) $e = ['count' => 0, 'window_start' => $now, 'locked_until' => 0];
    $e['count']++;
    if ($e['count'] >= 5) $e = ['count' => 0, 'window_start' => $now, 'locked_until' => $now + 900];
    $data[$ip] = $e;
    _save_lockout($data);
}

function clear_failed_logins(): void {
    $data = _lockout_data();
    unset($data[$_SERVER['REMOTE_ADDR'] ?? 'unknown']);
    _save_lockout($data);
}

// ── Content storage ─────────────────────────────────────────

/** The build snapshot for a type (list of records), or meta.json. */
function seed(string $file): array {
    static $cache = [];
    if (!isset($cache[$file])) {
        $path = SEED_DIR . '/' . basename($file) . '.json';
        $d = is_file($path) ? json_decode((string)file_get_contents($path), true) : null;
        $cache[$file] = is_array($d) ? $d : [];
    }
    return $cache[$file];
}

/** Seed records keyed by slug. */
function seed_by_slug(string $type): array {
    $out = [];
    foreach (seed($type) as $rec) {
        if (isset($rec['slug'])) $out[$rec['slug']] = $rec;
    }
    return $out;
}

/** When the deployed static build was made (unix time). */
function build_time(): int {
    $t = strtotime((string)(seed('meta')['builtAt'] ?? ''));
    return $t ?: 0;
}

/** Saved records for a type: slug => record (each has a `_cms` meta block). */
function saved(string $type): array {
    $path = DATA_DIR . '/' . $type . '.json';
    if (!is_file($path)) return [];
    $d = json_decode((string)file_get_contents($path), true);
    return is_array($d) ? $d : [];
}

function write_saved(string $type, array $records): bool {
    if (!is_dir(DATA_DIR)) mkdir(DATA_DIR, 0755, true);
    $path = DATA_DIR . '/' . $type . '.json';
    $tmp = $path . '.' . bin2hex(random_bytes(4)) . '.tmp';
    $json = json_encode($records, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_INVALID_UTF8_SUBSTITUTE);
    if ($json === false) { $GLOBALS['cms_write_error'] = 'could not encode the data (' . json_last_error_msg() . ')'; return false; }
    if (file_put_contents($tmp, $json, LOCK_EX) === false) { $GLOBALS['cms_write_error'] = 'could not write ' . $tmp . ' (' . (error_get_last()['message'] ?? 'unknown') . ')'; return false; }
    if (@rename($tmp, $path)) return true; // atomic replace (Linux hosting)
    // Windows (local preview) can refuse to rename over an existing file: write in place instead.
    $ok = file_put_contents($path, $json, LOCK_EX) !== false;
    @unlink($tmp);
    return $ok;
}

/**
 * Everything the admin lists: snapshot overlaid with saved records.
 * Each entry: ['record' => [...], 'builtIn' => bool, 'edited' => bool, 'live' => bool, 'updatedAt' => int]
 */
/**
 * True when a saved record is newer than the version baked into the deployed
 * build (the snapshot records each item's saved version as `_cmsVersion`).
 * Comparing versions rather than times means a build that didn't pull the
 * latest saves (a failed pull, a local preview) never hides them.
 */
function newer_than_build(string $type, string $slug, array $rec): bool {
    $built = (int)(seed_by_slug($type)[$slug]['_cmsVersion'] ?? 0);
    return (int)($rec['_cms']['updatedAt'] ?? 0) > $built;
}

/** A copy of the site's own content kept in cms-data (not an editor change). */
function is_imported(?array $rec): bool {
    return !empty($rec['_cms']['imported']);
}

/** The cms-data copy of a site item: the build snapshot's record, marked as imported. */
function site_copy(array $seedRecord): array {
    unset($seedRecord['_cmsVersion']);
    $seedRecord['_cms'] = ['source' => 'site', 'imported' => true, 'updatedAt' => 0];
    return $seedRecord;
}

/**
 * Keeps a full copy of every site item in cms-data/{type}.json, so the data
 * folder holds all blogs, treatments, doctors and hospitals — not only the
 * ones editors changed. Copies nobody has edited follow the latest build
 * (so developer changes to src/data are never frozen); edited items are left
 * alone. Imported copies are never shown live and never override the build.
 */
function sync_site_content(string $type): void {
    $seed = seed_by_slug($type);
    if (!$seed) return; // no snapshot uploaded: nothing to copy (and nothing to prune)
    $saved = saved($type);
    $changed = false;
    foreach ($seed as $slug => $rec) {
        if (isset($saved[$slug]) && !is_imported($saved[$slug])) continue; // edited, created or deleted here
        $copy = site_copy($rec);
        if (($saved[$slug] ?? null) != $copy) {
            $saved[$slug] = $copy;
            $changed = true;
        }
    }
    foreach ($saved as $slug => $rec) {
        // A site item the developer removed from the code: drop its copy too.
        if (is_imported($rec) && !isset($seed[$slug])) {
            unset($saved[$slug]);
            $changed = true;
        }
    }
    if ($changed) write_saved($type, $saved);
}

/**
 * Built image URLs (/_astro/…) change with every build. For an edited item
 * still using the site's own photo, use the current build's URL so live pages
 * never point at an old file. Uploaded photos (/media/…) are kept as they are.
 */
function refresh_built_images(array $rec, ?array $seedRec): array {
    if (!$seedRec) return $rec;
    // Fields added to the editor after this item was saved (e.g. the hospital write-up):
    // take them from the current build so they're neither shown empty nor treated as removed.
    foreach ($seedRec as $k => $v) {
        if ($k !== '_cmsVersion' && $k !== 'i18n' && !array_key_exists($k, $rec)) $rec[$k] = $v;
    }
    foreach (['photo', 'bannerPhoto', 'topRightPhoto', 'image'] as $k) {
        if (isset($rec[$k]) && is_string($rec[$k]) && str_starts_with($rec[$k], '/_astro/')) $rec[$k] = $seedRec[$k] ?? '';
    }
    foreach ((array)($rec['detailedProcedures'] ?? []) as $i => $proc) {
        $img = $proc['image'] ?? '';
        if (is_string($img) && str_starts_with($img, '/_astro/')) {
            $rec['detailedProcedures'][$i]['image'] = $seedRec['detailedProcedures'][$i]['image'] ?? '';
        }
    }
    return $rec;
}

function all_entries(string $type): array {
    $seed = seed_by_slug($type);
    $saved = saved($type);
    $out = [];
    foreach ($seed as $slug => $rec) {
        $out[$slug] = ['record' => $rec, 'builtIn' => true, 'edited' => false, 'live' => false, 'updatedAt' => 0];
    }
    foreach ($saved as $slug => $rec) {
        $meta = $rec['_cms'] ?? [];
        $updated = (int)($meta['updatedAt'] ?? 0);
        if (!empty($meta['deleted'])) {
            unset($out[$slug]);
            continue;
        }
        if (is_imported($rec)) continue; // the snapshot entry above is the current version
        $rec = refresh_built_images($rec, $seed[$slug] ?? null);
        $out[$slug] = [
            'record' => $rec,
            // "Built in" = came with the site (not created in the admin): editable, not deletable.
            'builtIn' => isset($seed[$slug]) && ($meta['source'] ?? 'site') !== 'admin',
            'edited' => true,
            // Newer than the deployed build → PHP is serving it live until the next build.
            'live' => newer_than_build($type, (string)$slug, $rec),
            'updatedAt' => $updated,
        ];
    }
    return $out;
}

/** One entry (see all_entries) or null. */
function get_entry(string $type, string $slug): ?array {
    return all_entries($type)[$slug] ?? null;
}

/** A saved record that PHP must render live (newer than the deployed build), or null. */
function live_record(string $type, string $slug): ?array {
    $rec = saved($type)[$slug] ?? null;
    if (!$rec || !empty($rec['_cms']['deleted']) || is_imported($rec)) return null;
    return newer_than_build($type, $slug, $rec) ? refresh_built_images($rec, seed_by_slug($type)[$slug] ?? null) : null;
}

/** True when an admin-created record was deleted but the deployed build still has its page (which must 404). */
function deleted_after_build(string $type, string $slug): bool {
    $rec = saved($type)[$slug] ?? null;
    return $rec && !empty($rec['_cms']['deleted']) && isset(seed_by_slug($type)[$slug]);
}

function slugify(string $text): string {
    $s = strtolower(trim($text));
    $s = str_replace(["'", '’'], '', $s);
    $s = preg_replace('/[^a-z0-9]+/', '-', $s) ?? '';
    return trim($s, '-');
}

// ── Images ──────────────────────────────────────────────────

/** Saves an uploaded image under DATA_DIR/media/{type}/ and returns its public URL, or an error string prefixed with "!". */
function save_upload(array $file, string $type): string {
    if (($file['error'] ?? UPLOAD_ERR_NO_FILE) === UPLOAD_ERR_NO_FILE) return '';
    if ($file['error'] !== UPLOAD_ERR_OK) return '!Upload failed (error ' . (int)$file['error'] . ').';
    if ($file['size'] > MAX_UPLOAD_BYTES) return '!Image is larger than 5 MB.';
    // Trust the file's contents, not its name, for the type.
    $info = @getimagesize($file['tmp_name']);
    if (!$info) return '!That file is not a valid image.';
    $ext = [IMAGETYPE_JPEG => 'jpg', IMAGETYPE_PNG => 'png', IMAGETYPE_WEBP => 'webp', IMAGETYPE_GIF => 'gif'][$info[2]] ?? '';
    if ($ext === '') return '!Use a JPG, PNG, WebP or GIF image.';
    $dir = MEDIA_DIR . '/' . $type;
    if (!is_dir($dir)) mkdir($dir, 0755, true);
    $name = bin2hex(random_bytes(10)) . '.' . $ext;
    if (!move_uploaded_file($file['tmp_name'], $dir . '/' . $name)) return '!Could not save the image on the server.';
    return '/media/' . $type . '/' . $name;
}

// ── Content types: fields shown in the admin ────────────────
//
// Field types: text, textarea, longtext (paragraphs), number, select, url,
// list (one item per line), repeater (rows of sub-fields), image.
// Fields not listed here (e.g. a doctor's testimonials, a treatment's cost
// comparison table) are kept as they are when a record is saved.

function themes(): array {
    return ['blue' => 'Blue', 'teal' => 'Teal', 'green' => 'Green'];
}

function cms_types(): array {
    static $types = null;
    if ($types !== null) return $types;
    $types = cms_type_defs();
    foreach ($types as $type => &$def) {
        foreach ($def['fields'] as &$field) {
            $tr = CMS_TRANSLATABLE[$type][$field['key']] ?? null;
            if ($tr) $field['tr'] = $tr;
        }
        unset($field);
    }
    unset($def);
    return $types;
}

function cms_type_defs(): array {
    $destinations = [];
    foreach (seed('meta')['destinations'] ?? [] as $d) $destinations[$d['slug']] = $d['city'];
    $imageKeys = ['' => '— No photo (icon tile) —'];
    foreach (array_keys(seed('meta')['treatmentImages'] ?? []) as $k) {
        $imageKeys[$k] = ucwords(trim((string)preg_replace('/([A-Z])/', ' $1', $k)));
    }
    $icons = [];
    foreach (['heart', 'activity', 'shieldPlus', 'gem', 'droplet', 'dropletFill', 'capsule', 'eye', 'brain', 'spine', 'stomach', 'kidney', 'earNoseThroat'] as $i) $icons[$i] = $i;

    return [
        'blogs' => [
            'label' => 'Blog Posts', 'singular' => 'Blog Post', 'titleKey' => 'title', 'subtitleKey' => 'category',
            'path' => '/blog/%s', 'icon' => '📝',
            'fields' => [
                ['key' => 'title', 'label' => 'Title', 'type' => 'text', 'required' => true],
                ['key' => 'slug', 'label' => 'URL slug', 'type' => 'slug', 'from' => 'title'],
                ['key' => 'excerpt', 'label' => 'Short summary', 'type' => 'textarea', 'required' => true, 'help' => 'Shown on the blog list and in search results.'],
                ['key' => 'category', 'label' => 'Category', 'type' => 'text', 'required' => true],
                ['key' => 'date', 'label' => 'Publish date', 'type' => 'date', 'required' => true],
                ['key' => 'readMinutes', 'label' => 'Reading time (minutes)', 'type' => 'number', 'default' => 4],
                ['key' => 'image', 'label' => 'Cover image', 'type' => 'image', 'required' => true],
                ['key' => 'body', 'label' => 'Article', 'type' => 'longtext', 'as' => 'paragraphs', 'required' => true, 'help' => 'Leave a blank line between paragraphs. Start a line with "## " to make it a subheading.'],
            ],
        ],
        'treatments' => [
            'label' => 'Treatments', 'singular' => 'Treatment', 'titleKey' => 'name', 'subtitleKey' => 'shortDescription',
            'path' => '/treatments/%s', 'icon' => '🩺',
            'fields' => [
                ['key' => 'name', 'label' => 'Treatment name', 'type' => 'text', 'required' => true],
                ['key' => 'slug', 'label' => 'URL slug', 'type' => 'slug', 'from' => 'name'],
                ['key' => 'shortDescription', 'label' => 'Short description', 'type' => 'textarea', 'required' => true],
                ['key' => 'overview', 'label' => 'Overview', 'type' => 'longtext', 'required' => true],
                ['key' => 'imageKey', 'label' => 'Photo', 'type' => 'select', 'options' => $imageKeys],
                ['key' => 'icon', 'label' => 'Icon', 'type' => 'select', 'options' => $icons, 'default' => 'heart'],
                ['key' => 'theme', 'label' => 'Colour theme', 'type' => 'select', 'options' => themes(), 'default' => 'blue'],
                ['key' => 'startingPrice', 'label' => 'Starting price (USD)', 'type' => 'number', 'required' => true],
                ['key' => 'avgSavings', 'label' => 'Average savings (%)', 'type' => 'number', 'required' => true],
                ['key' => 'hospitalsCount', 'label' => 'Partner hospitals', 'type' => 'number', 'required' => true],
                ['key' => 'procedures', 'label' => 'Key procedures (short list for cards)', 'type' => 'list'],
                ['key' => 'benefits', 'label' => 'Why choose India (one per line)', 'type' => 'list'],
                ['key' => 'detailedProcedures', 'label' => 'Sub-treatments', 'type' => 'repeater', 'addLabel' => 'Add sub-treatment',
                    'help' => 'Each sub-treatment gets its own page at /treatments/{treatment}/{sub-treatment}.',
                    'fields' => [
                        ['key' => 'name', 'label' => 'Name', 'type' => 'text'],
                        ['key' => 'image', 'label' => 'Photo (optional — uses the treatment photo if empty)', 'type' => 'image'],
                        ['key' => 'description', 'label' => 'Description', 'type' => 'longtext'],
                    ]],
                ['key' => 'flagshipProcedure', 'label' => 'Sample package procedure', 'type' => 'text'],
                ['key' => 'packagePrice', 'label' => 'Package price (USD)', 'type' => 'number'],
                ['key' => 'totalTripDays', 'label' => 'Total trip (days)', 'type' => 'number'],
                ['key' => 'inclusions', 'label' => 'Package inclusions (one per line)', 'type' => 'list'],
                ['key' => 'exclusions', 'label' => 'Package exclusions (one per line)', 'type' => 'list'],
                ['key' => 'faqs', 'label' => 'FAQs', 'type' => 'repeater', 'addLabel' => 'Add question',
                    'fields' => [
                        ['key' => 'question', 'label' => 'Question', 'type' => 'text'],
                        ['key' => 'answer', 'label' => 'Answer', 'type' => 'textarea'],
                    ]],
            ],
        ],
        'doctors' => [
            'label' => 'Doctors', 'singular' => 'Doctor', 'titleKey' => 'name', 'subtitleKey' => 'specialty',
            'path' => '/doctors/%s', 'icon' => '👨‍⚕️',
            'fields' => [
                ['key' => 'name', 'label' => 'Full name', 'type' => 'text', 'required' => true, 'help' => 'e.g. Dr. Ila Gupta'],
                ['key' => 'slug', 'label' => 'URL slug', 'type' => 'slug', 'from' => 'name'],
                ['key' => 'specialty', 'label' => 'Specialty (short)', 'type' => 'text', 'required' => true, 'help' => 'e.g. IVF & Infertility Specialist'],
                ['key' => 'title', 'label' => 'Position / title', 'type' => 'text', 'required' => true],
                ['key' => 'qualification', 'label' => 'Qualifications', 'type' => 'text', 'required' => true],
                ['key' => 'hospital', 'label' => 'Hospital', 'type' => 'text', 'required' => true, 'help' => 'Use the hospital name exactly as on its page so the two get linked.'],
                ['key' => 'city', 'label' => 'City', 'type' => 'text', 'required' => true, 'help' => 'e.g. New Delhi, India'],
                ['key' => 'experienceYears', 'label' => 'Years of experience', 'type' => 'number', 'required' => true],
                ['key' => 'languages', 'label' => 'Languages (one per line)', 'type' => 'list'],
                ['key' => 'rating', 'label' => 'Rating (0–5)', 'type' => 'number', 'step' => '0.1', 'default' => 4.8],
                ['key' => 'reviews', 'label' => 'Number of reviews', 'type' => 'number', 'default' => 0],
                ['key' => 'theme', 'label' => 'Colour theme', 'type' => 'select', 'options' => themes(), 'default' => 'blue'],
                ['key' => 'photo', 'label' => 'Profile photo', 'type' => 'image'],
                ['key' => 'topRightPhoto', 'label' => 'Clinic photo (top right)', 'type' => 'image', 'help' => 'Leave empty to use the hospital photo.'],
                ['key' => 'videoUrl', 'label' => 'Video (YouTube link)', 'type' => 'url'],
                ['key' => 'extraVideoUrls', 'label' => 'More videos (one YouTube link per line)', 'type' => 'list'],
                ['key' => 'about', 'label' => 'About', 'type' => 'longtext', 'required' => true],
                ['key' => 'specializations', 'label' => 'Specializations (one per line)', 'type' => 'list'],
                ['key' => 'education', 'label' => 'Qualifications / education', 'type' => 'repeater', 'addLabel' => 'Add qualification',
                    'fields' => [
                        ['key' => 'degree', 'label' => 'Degree', 'type' => 'text'],
                        ['key' => 'institution', 'label' => 'Institution', 'type' => 'text'],
                        ['key' => 'year', 'label' => 'Year', 'type' => 'text'],
                    ]],
                ['key' => 'experience', 'label' => 'Experience', 'type' => 'repeater', 'addLabel' => 'Add position',
                    'fields' => [
                        ['key' => 'role', 'label' => 'Role', 'type' => 'text'],
                        ['key' => 'place', 'label' => 'Hospital / place', 'type' => 'text'],
                        ['key' => 'period', 'label' => 'Period', 'type' => 'text'],
                    ]],
                ['key' => 'awards', 'label' => 'Awards & achievements', 'type' => 'repeater', 'addLabel' => 'Add award',
                    'fields' => [
                        ['key' => 'title', 'label' => 'Award', 'type' => 'text'],
                        ['key' => 'year', 'label' => 'Year', 'type' => 'text'],
                    ]],
                ['key' => 'memberships', 'label' => 'Memberships (one per line)', 'type' => 'list'],
            ],
        ],
        'hospitals' => [
            'label' => 'Hospitals', 'singular' => 'Hospital', 'titleKey' => 'name', 'subtitleKey' => 'city',
            'path' => '/hospitals/%s', 'icon' => '🏥',
            'fields' => [
                ['key' => 'name', 'label' => 'Hospital name', 'type' => 'text', 'required' => true],
                ['key' => 'slug', 'label' => 'URL slug', 'type' => 'slug', 'from' => 'name'],
                ['key' => 'citySlug', 'label' => 'Destination', 'type' => 'select', 'options' => $destinations, 'required' => true],
                ['key' => 'city', 'label' => 'Area / city (as shown)', 'type' => 'text', 'required' => true, 'help' => 'e.g. Saket, New Delhi'],
                ['key' => 'country', 'label' => 'Country', 'type' => 'text', 'default' => 'India'],
                ['key' => 'accreditation', 'label' => 'Type / accreditation', 'type' => 'text', 'required' => true, 'help' => 'e.g. Multi Specialty Hospital, Fertility & IVF Center'],
                ['key' => 'specialties', 'label' => 'Specialties (one per line)', 'type' => 'list'],
                ['key' => 'beds', 'label' => 'Scale', 'type' => 'text', 'help' => 'e.g. 500 Beds'],
                ['key' => 'theme', 'label' => 'Colour theme', 'type' => 'select', 'options' => themes(), 'default' => 'blue'],
                ['key' => 'image', 'label' => 'Photo', 'type' => 'image'],
                ['key' => 'about', 'label' => 'About (short introduction)', 'type' => 'longtext', 'required' => true],
                ['key' => 'aboutHistory', 'label' => 'History and background', 'type' => 'longtext', 'help' => 'Part of the hospital write-up. Leave a blank line between paragraphs; leave empty to hide this part.'],
                ['key' => 'aboutSpecialities', 'label' => 'Specialities and centres of excellence', 'type' => 'longtext'],
                ['key' => 'aboutTechnology', 'label' => 'Technology and facilities', 'type' => 'longtext'],
                ['key' => 'aboutInternational', 'label' => 'International patients', 'type' => 'longtext'],
                ['key' => 'overview', 'label' => 'Overview (shown only when the write-up above is empty)', 'type' => 'longtext'],
                ['key' => 'address', 'label' => 'Address', 'type' => 'text'],
                ['key' => 'established', 'label' => 'Year established', 'type' => 'number'],
                ['key' => 'certs', 'label' => 'Certifications (one per line, e.g. JCI)', 'type' => 'list'],
                ['key' => 'videoUrl', 'label' => 'Video (YouTube link)', 'type' => 'url'],
            ],
        ],
    ];
}

function cms_type(string $type): ?array {
    return cms_types()[$type] ?? null;
}

// ── Rich text ───────────────────────────────────────────────
//
// Long text fields (about, write-ups, overviews, descriptions, FAQ answers,
// blog paragraphs) may contain a little HTML. Same allowlist as
// src/utils/richText.ts: formatting, links, lists, subheadings — never
// scripts, styles, event handlers or javascript: links.

const CMS_ALLOWED_TAGS = ['b', 'strong', 'i', 'em', 'u', 'a', 'br', 'ul', 'ol', 'li', 'p', 'h2', 'h3', 'h4', 'span', 'sub', 'sup', 'blockquote', 'small'];

/** Text that may contain HTML → safe HTML. Plain text (no tags) is escaped. */
function cms_clean_html(string $text): string {
    if (!preg_match('/<\/?[a-zA-Z]/', $text)) return htmlspecialchars($text, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8', false);
    $text = preg_replace('~<(script|style|iframe|object|embed|template|svg|math)\b[\s\S]*?</\1\s*>~i', '', $text) ?? '';
    $text = preg_replace('/<!--[\s\S]*?-->/', '', $text) ?? '';
    return preg_replace_callback('~<(/?)([a-zA-Z][a-zA-Z0-9]*)\b([^>]*)>~', function ($m) {
        $name = strtolower($m[2]);
        if (!in_array($name, CMS_ALLOWED_TAGS, true)) return '';
        if ($m[1] === '/') return '</' . $name . '>';
        if ($name === 'br') return '<br>';
        if ($name !== 'a') return '<' . $name . '>';
        $href = preg_match('/\shref\s*=\s*("([^"]*)"|\'([^\']*)\'|([^\s>]+))/i', $m[3], $hm) ? ($hm[2] ?? '') . ($hm[3] ?? '') . ($hm[4] ?? '') : '';
        $href = trim($href);
        $ok = $href !== '' && preg_match('/^(https?:|mailto:|tel:|\/|#)/i', $href);
        $blank = (bool)preg_match('/\starget\s*=\s*["\']?_blank/i', $m[3]);
        return '<a' . ($ok ? ' href="' . htmlspecialchars($href, ENT_QUOTES, 'UTF-8') . '"' : '') . ($blank ? ' target="_blank" rel="noopener noreferrer"' : '') . '>';
    }, $text) ?? '';
}

/** What a rich-text field stores: cleaned HTML when it has tags, otherwise the text exactly as typed. */
function cms_store_rich(string $text): string {
    return preg_match('~</?[a-zA-Z]~', $text) ? cms_clean_html($text) : $text;
}

/** Fields that accept HTML: long texts, and FAQ answers. */
function cms_is_rich(array $field): bool {
    return ($field['type'] ?? '') === 'longtext' || ($field['key'] ?? '') === 'answer';
}

/** The text without tags (titles, descriptions, teasers, structured data). */
function cms_plain(string $text): string {
    $text = preg_replace('~<(script|style)\b[\s\S]*?</\1\s*>~i', '', $text) ?? $text;
    $text = preg_replace('/<br\s*\/?>/i', ' ', $text) ?? $text;
    return trim(preg_replace('/[ \t]+/u', ' ', html_entity_decode(strip_tags($text), ENT_QUOTES | ENT_HTML5, 'UTF-8')) ?? '');
}
