<?php
declare(strict_types=1);
define('CMS_BOOT', true);
require_once __DIR__ . '/bootstrap.php';
require_once __DIR__ . '/ui.php';
require_auth();

$type = (string)($_GET['type'] ?? '');
$def = cms_type($type);
if (!$def) redirect('/editor/', 'Unknown section.', 'error');

// Keep a full copy of the site's content in cms-data.
sync_site_content($type);

$action = (string)($_GET['action'] ?? 'list');
$slug = (string)($_GET['slug'] ?? '');
$listUrl = '/editor/manage.php?type=' . urlencode($type);

// ── POST actions ────────────────────────────────────────────

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!verify_csrf($_POST['csrf'] ?? null)) redirect($listUrl, 'Your session expired. Please try again.', 'error');

    if ($action === 'delete' || $action === 'reset') {
        $entry = get_entry($type, $slug);
        if (!$entry) redirect($listUrl, 'That item no longer exists.', 'error');
        $saved = saved($type);
        if ($action === 'delete') {
            if ($entry['builtIn']) redirect($listUrl, 'Items that were already on the site can be edited but not deleted. Ask the developer if one should be removed.', 'error');
            // Keep a tombstone so a page already built for it returns "not found" until the next build.
            $saved[$slug] = ['slug' => $slug, '_cms' => ['deleted' => true, 'source' => 'admin', 'updatedAt' => time()]];
            $msg = 'Deleted.';
        } else {
            unset($saved[$slug]);
            $msg = 'Your changes were removed; the item is back to the version from the last site build.';
        }
        if (!write_saved($type, $saved)) redirect($listUrl, 'Could not save on the server. Check folder permissions.', 'error');
        redirect($listUrl, $msg);
    }

    if ($action === 'save') {
        $existing = $slug !== '' ? get_entry($type, $slug) : null;
        [$record, $errors] = build_record($def, $type, $existing, $_POST['f'] ?? [], $_FILES, $_POST['rm'] ?? [], $_POST['t'] ?? []);

        if (!$errors) {
            $saved = saved($type);
            $prevMeta = $existing['record']['_cms'] ?? [];
            $record['_cms'] = [
                'source' => $existing ? ($existing['builtIn'] ? 'site' : 'admin') : 'admin',
                'createdAt' => $prevMeta['createdAt'] ?? time(),
                'updatedAt' => time(),
            ];
            $saved[$record['slug']] = $record;
            if (!write_saved($type, $saved)) $errors[] = 'Could not save on the server: ' . ($GLOBALS['cms_write_error'] ?? 'check folder permissions') . '.';
        }

        if (!$errors) {
            $where = sprintf($def['path'], $record['slug']);
            redirect('/editor/manage.php?type=' . urlencode($type) . '&action=edit&slug=' . urlencode($record['slug']),
                'Saved. It is live now at ' . $where);
        }
        // Re-show the form with what was typed.
        $formRecord = $record;
        $formErrors = $errors;
        $action = $existing ? 'edit' : 'new';
    }
}

/**
 * Turns posted form values into a record. Starts from the existing record so
 * fields the admin doesn't show are kept. Returns [record, errors].
 */
function build_record(array $def, string $type, ?array $existing, array $in, array $files, array $remove, array $translations = []): array {
    $record = $existing ? $existing['record'] : [];
    // Translations stored by earlier saves (built-in items carry the site's own ones, which aren't "saved").
    $prevI18n = ($existing && $existing['edited']) ? (array)($record['i18n'] ?? []) : [];
    unset($record['_cms'], $record['i18n']);
    $errors = [];

    foreach ($def['fields'] as $field) {
        $key = $field['key'];
        $raw = $in[$key] ?? null;
        switch ($field['type']) {
            case 'slug':
                continue 2; // handled below
            case 'number':
                $v = trim((string)$raw);
                if ($v === '') { unset($record[$key]); break; }
                if (!is_numeric($v)) { $errors[] = $field['label'] . ' must be a number.'; break; }
                $record[$key] = str_contains($v, '.') ? (float)$v : (int)$v;
                break;
            case 'list':
                $record[$key] = array_values(array_filter(array_map('trim', preg_split('/\R/u', (string)$raw) ?: []), fn($s) => $s !== ''));
                break;
            case 'longtext':
                $text = cms_store_rich(trim(str_replace("\r\n", "\n", (string)$raw)));
                $record[$key] =($field['as'] ?? '') === 'paragraphs'
                    ? array_values(array_filter(array_map('trim', preg_split('/\n\s*\n/u', $text) ?: []), fn($s) => $s !== ''))
                    : $text;
                break;
            case 'repeater':
                $rows = [];
                $rowFiles = $files['img_' . $key] ?? null; // nested: [name|tmp_name|…][row][sub]
                foreach ((array)$raw as $i => $row) {
                    $clean = [];
                    foreach ($field['fields'] as $sub) {
                        $sk = $sub['key'];
                        if ($sub['type'] === 'image') {
                            $upload = $rowFiles ? save_upload([
                                'name' => $rowFiles['name'][$i][$sk] ?? '',
                                'tmp_name' => $rowFiles['tmp_name'][$i][$sk] ?? '',
                                'error' => $rowFiles['error'][$i][$sk] ?? UPLOAD_ERR_NO_FILE,
                                'size' => $rowFiles['size'][$i][$sk] ?? 0,
                            ], $type) : '';
                            if (str_starts_with($upload, '!')) { $errors[] = $field['label'] . ' (row ' . (count($rows) + 1) . '): ' . substr($upload, 1); continue; }
                            $sv = $upload !== '' ? $upload : (!empty($remove[$key][$i][$sk]) ? '' : trim((string)($row[$sk] ?? '')));
                        } else {
                            $sv = trim(str_replace("\r\n", "\n", (string)($row[$sk] ?? '')));
                            if (cms_is_rich($sub)) $sv = cms_store_rich($sv);
                        }
                        if ($sv !== '') $clean[$sk] = $sv;
                    }
                    if ($clean) $rows[] = $clean;
                }
                $record[$key] = $rows;
                break;
            case 'image':
                $upload = save_upload($files['img_' . $key] ?? ['error' => UPLOAD_ERR_NO_FILE], $type);
                if (str_starts_with($upload, '!')) { $errors[] = $field['label'] . ': ' . substr($upload, 1); break; }
                if ($upload !== '') $record[$key] = $upload;
                elseif (!empty($remove[$key])) $record[$key] = '';
                else $record[$key] = (string)($raw ?? ($record[$key] ?? ''));
                break;
            default: // text, textarea, url, date, select
                $record[$key] = trim(str_replace("\r\n", "\n", (string)$raw));
        }
        $value = $record[$key] ?? null;
        $empty = $value === null || $value === '' || $value === [];
        if (!empty($field['required']) && $empty) $errors[] = $field['label'] . ' is required.';
        if ($field['type'] === 'url' && !$empty && !preg_match('#^https?://#i', (string)$value)) $errors[] = $field['label'] . ' must start with https://';
    }

    // Slug: locked for existing items; for new ones, typed or made from the title.
    if ($existing) {
        $record['slug'] = $existing['record']['slug'];
    } else {
        $slugField = current(array_filter($def['fields'], fn($f) => $f['type'] === 'slug'));
        $typed = slugify((string)($in['slug'] ?? ''));
        $record['slug'] = $typed !== '' ? $typed : slugify((string)($record[$slugField['from']] ?? ''));
        if ($record['slug'] === '') $errors[] = 'Add a title/name so the item gets a web address.';
        elseif (get_entry($type, $record['slug'])) $errors[] = 'The web address "' . $record['slug'] . '" is already used. Change the URL slug.';
    }

    // Sub-treatments become their own pages, so their names must give unique addresses.
    if ($type === 'treatments' && !empty($record['detailedProcedures'])) {
        $seen = [];
        foreach ($record['detailedProcedures'] as $i => $proc) {
            if (empty($proc['name'])) { $errors[] = 'Sub-treatment ' . ($i + 1) . ' needs a name.'; continue; }
            $ps = slugify($proc['name']);
            if (isset($seen[$ps])) $errors[] = 'Two sub-treatments are both called "' . $proc['name'] . '".';
            $seen[$ps] = true;
        }
    }
    // New treatments need the fields the treatment page always shows.
    if ($type === 'treatments') {
        $record['flagshipProcedure'] = $record['flagshipProcedure'] ?? ($record['detailedProcedures'][0]['name'] ?? $record['name'] ?? '');
        foreach (['procedures', 'benefits', 'inclusions', 'exclusions', 'faqs', 'costComparison'] as $k) $record[$k] = $record[$k] ?? [];
        $record['packagePrice'] = $record['packagePrice'] ?? ($record['startingPrice'] ?? 0);
        $record['totalTripDays'] = $record['totalTripDays'] ?? 14;
        $record['stayDuration'] = $record['stayDuration'] ?? ['patient' => ['icuDays' => 0, 'roomDays' => 0, 'totalDays' => 0]];
        if (($record['imageKey'] ?? '') === '') unset($record['imageKey']);
    }
    if ($type === 'doctors') {
        foreach (['languages', 'specializations', 'education', 'experience', 'awards', 'memberships', 'testimonials'] as $k) $record[$k] = $record[$k] ?? [];
    }
    if ($type === 'hospitals') {
        $record['country'] = ($record['country'] ?? '') ?: 'India';
        $record['specialties'] = $record['specialties'] ?? [];
        $record['beds'] = $record['beds'] ?? '';
    }

    // Translations: keep a field when it differs from the site's current
    // translation, or when it was already saved here before (so re-saving
    // never drops it). Empty fields fall back to the existing translation/English.
    $siteI18n = (array)(seed_by_slug($type)[$record['slug']]['i18n'] ?? []);
    $i18n = [];
    foreach (CMS_LOCALES as $loc => $_) {
        $posted = $translations[$loc] ?? null;
        if (!is_array($posted)) {
            if (!empty($prevI18n[$loc])) $i18n[$loc] = $prevI18n[$loc];
            continue;
        }
        foreach ($def['fields'] as $field) {
            if (empty($field['tr'])) continue;
            $k = $field['key'];
            $value = parse_translation($field, $posted[$k] ?? null);
            if ($value === null) continue;
            $site = $siteI18n[$loc][$k] ?? null;
            if (json_encode($value) !== json_encode($site) || isset($prevI18n[$loc][$k])) $i18n[$loc][$k] = $value;
        }
    }
    if ($i18n) $record['i18n'] = $i18n;
    return [$record, $errors];
}

/** One translated field from the form, or null when left empty. */
function parse_translation(array $field, $raw) {
    switch ($field['type']) {
        case 'list':
            $items = array_values(array_filter(array_map('trim', preg_split('/\R/u', (string)$raw) ?: []), fn($s) => $s !== ''));
            return $items ?: null;
        case 'longtext':
            $text = cms_store_rich(trim(str_replace("\r\n", "\n", (string)$raw)));
            if ($text === '') return null;
            return ($field['as'] ?? '') === 'paragraphs'
                ? array_values(array_filter(array_map('trim', preg_split('/\n\s*\n/u', $text) ?: []), fn($s) => $s !== ''))
                : $text;
        case 'repeater':
            // Rows line up with the English rows by position; keep blanks so later rows stay aligned.
            $rows = [];
            $any = false;
            foreach ((array)$raw as $row) {
                $clean = [];
                foreach ((array)$field['tr'] as $sk) {
                    $sv = trim(str_replace("\r\n", "\n", (string)($row[$sk] ?? '')));
                    $subDef = current(array_filter($field['fields'], fn($x) => $x['key'] === $sk)) ?: [];
                    if (cms_is_rich($subDef)) $sv = cms_store_rich($sv);
                    if ($sv !== '') { $clean[$sk] = $sv; $any = true; }
                }
                $rows[] = $clean ?: new stdClass();
            }
            return $any ? $rows : null;
        default:
            $text = trim(str_replace("\r\n", "\n", (string)$raw));
            return $text === '' ? null : $text;
    }
}

// ── Form field rendering ────────────────────────────────────

function field_value(array $record, array $field) {
    if (array_key_exists($field['key'], $record)) return $record[$field['key']];
    return $field['default'] ?? (in_array($field['type'], ['list', 'repeater'], true) ? [] : '');
}

function render_input(array $field, $value, string $name, bool $isNew): void {
    $id = 'f_' . preg_replace('/[^a-z0-9_]/i', '_', $name);
    $req = !empty($field['required']) ? ' required' : '';
    switch ($field['type']) {
        case 'textarea':
            echo '<textarea id="' . h($id) . '" name="' . h($name) . '" rows="3"' . $req . '>' . h((string)$value) . '</textarea>';
            break;
        case 'longtext':
            $text = is_array($value) ? implode("\n\n", $value) : (string)$value;
            echo '<textarea id="' . h($id) . '" name="' . h($name) . '" rows="' . (is_array($value) || strlen($text) > 400 ? 12 : 6) . '"' . $req . '>' . h($text) . '</textarea>';
            echo '<p class="help">HTML allowed: &lt;strong&gt;, &lt;em&gt;, &lt;u&gt;, &lt;a href=&quot;…&quot;&gt;, &lt;ul&gt;/&lt;ol&gt;&lt;li&gt;, &lt;h3&gt;, &lt;br&gt;, &lt;blockquote&gt;. Scripts and styles are removed.</p>';
            break;
        case 'list':
            echo '<textarea id="' . h($id) . '" name="' . h($name) . '" rows="' . max(3, min(10, count((array)$value) + 1)) . '">' . h(implode("\n", (array)$value)) . '</textarea>';
            break;
        case 'select':
            echo '<select id="' . h($id) . '" name="' . h($name) . '"' . $req . '>';
            if (!isset($field['options'][''])) echo '<option value="">— Choose —</option>';
            foreach ($field['options'] as $optValue => $optLabel) {
                $sel = (string)$optValue === (string)$value ? ' selected' : '';
                echo '<option value="' . h((string)$optValue) . '"' . $sel . '>' . h((string)$optLabel) . '</option>';
            }
            echo '</select>';
            break;
        case 'number':
            $step = $field['step'] ?? 'any';
            echo '<input type="number" step="' . h($step) . '" id="' . h($id) . '" name="' . h($name) . '" value="' . h((string)$value) . '"' . $req . '>';
            break;
        case 'date':
            echo '<input type="date" id="' . h($id) . '" name="' . h($name) . '" value="' . h((string)($value ?: date('Y-m-d'))) . '"' . $req . '>';
            break;
        case 'url':
            echo '<input type="url" id="' . h($id) . '" name="' . h($name) . '" value="' . h((string)$value) . '" placeholder="https://youtu.be/…">';
            break;
        default:
            echo '<input type="text" id="' . h($id) . '" name="' . h($name) . '" value="' . h((string)$value) . '"' . $req . '>';
    }
}

function render_field(array $field, array $record, bool $isNew, bool $locked): void {
    $value = field_value($record, $field);
    $key = $field['key'];
    echo '<div class="field field-' . h($field['type']) . '">';
    echo '<label>' . h($field['label']) . (!empty($field['required']) ? ' <span class="req">*</span>' : '') . '</label>';

    if ($field['type'] === 'slug') {
        if ($locked) {
            echo '<input type="text" value="' . h((string)$value) . '" readonly class="readonly">';
            echo '<p class="help">The web address of existing items can\'t change, so links and translations keep working.</p>';
        } else {
            echo '<input type="text" name="f[slug]" value="' . h((string)$value) . '" data-slug-from="f[' . h($field['from']) . ']" pattern="[a-z0-9\-]*" placeholder="made from the ' . h($field['from']) . ' if left empty">';
            echo '<p class="help">Lowercase letters, numbers and dashes. This becomes the page address.</p>';
        }
    } elseif ($field['type'] === 'image') {
        $src = (string)$value;
        echo '<div class="image-field">';
        echo '<img class="image-preview" src="' . h($src) . '" alt=""' . ($src === '' ? ' hidden' : '') . '>';
        echo '<input type="hidden" name="f[' . h($key) . ']" value="' . h($src) . '">';
        echo '<input type="file" name="img_' . h($key) . '" accept="image/jpeg,image/png,image/webp,image/gif" data-preview>';
        if ($src !== '') echo '<label class="check"><input type="checkbox" name="rm[' . h($key) . ']" value="1"> Remove this image</label>';
        echo '</div>';
    } elseif ($field['type'] === 'repeater') {
        $rows = (array)$value;
        echo '<div class="repeater" data-repeater>';
        echo '<div class="repeater-rows">';
        foreach ($rows as $i => $row) render_repeater_row($field, (array)$row, (string)$i, $isNew);
        echo '</div>';
        echo '<template>';
        render_repeater_row($field, [], '__INDEX__', true);
        echo '</template>';
        echo '<button type="button" class="btn btn-light" data-repeater-add>+ ' . h($field['addLabel'] ?? 'Add') . '</button>';
        echo '</div>';
    } else {
        render_input($field, $value, 'f[' . $key . ']', $isNew);
    }
    if (!empty($field['help']) && $field['type'] !== 'slug') echo '<p class="help">' . h($field['help']) . '</p>';
    echo '</div>';
}

function render_repeater_row(array $field, array $row, string $index, bool $isNew): void {
    echo '<div class="repeater-row">';
    echo '<div class="repeater-fields">';
    foreach ($field['fields'] as $sub) {
        $sk = $sub['key'];
        echo '<div class="field' . ($sub['type'] === 'image' ? ' field-image' : '') . '">';
        echo '<label>' . h($sub['label']) . '</label>';
        if ($sub['type'] === 'image') {
            $src = (string)($row[$sk] ?? '');
            echo '<div class="image-field">';
            echo '<img class="image-preview" src="' . h($src) . '" alt=""' . ($src === '' ? ' hidden' : '') . '>';
            echo '<input type="hidden" name="f[' . h($field['key']) . '][' . h($index) . '][' . h($sk) . ']" value="' . h($src) . '">';
            echo '<input type="file" name="img_' . h($field['key']) . '[' . h($index) . '][' . h($sk) . ']" accept="image/jpeg,image/png,image/webp,image/gif" data-preview>';
            if ($src !== '') echo '<label class="check"><input type="checkbox" name="rm[' . h($field['key']) . '][' . h($index) . '][' . h($sk) . ']" value="1"> Remove this photo</label>';
            echo '</div>';
        } else {
            render_input($sub, $row[$sk] ?? '', 'f[' . $field['key'] . '][' . $index . '][' . $sk . ']', $isNew);
        }
        echo '</div>';
    }
    echo '</div>';
    echo '<div class="repeater-tools">';
    echo '<button type="button" class="icon-btn" data-repeater-up title="Move up">↑</button>';
    echo '<button type="button" class="icon-btn" data-repeater-down title="Move down">↓</button>';
    echo '<button type="button" class="icon-btn danger" data-repeater-remove title="Remove">✕</button>';
    echo '</div>';
    echo '</div>';
}

/** Short English text shown under a translation field as a reference. */
function english_hint($value): string {
    if (is_array($value)) $value = implode(' / ', array_map(fn($v) => is_array($v) ? implode(' — ', $v) : (string)$v, $value));
    $value = trim(preg_replace('/\s+/u', ' ', (string)$value) ?? '');
    return $value === '' ? '' : '<p class="help en-hint"><span>English:</span> ' . h(mb_strimwidth($value, 0, 160, '…')) . '</p>';
}

/** One language tab: the translatable fields, pre-filled with the current translation. */
function render_translation_panel(array $def, array $record, array $current, string $loc, string $label): void {
    $rtl = $loc === 'ar' ? ' dir="rtl"' : '';
    echo '<div class="card form-card lang-panel" data-lang-panel="' . h($loc) . '" hidden>';
    echo '<p class="help lang-intro">Translate into ' . h($label) . '. Leave a field empty to keep the current text (or English if there is none). Translations appear on the ' . h($label) . ' pages after the next site build.</p>';
    foreach ($def['fields'] as $field) {
        if (empty($field['tr'])) continue;
        $k = $field['key'];
        $value = $current[$k] ?? null;
        $english = $record[$k] ?? '';
        echo '<div class="field field-' . h($field['type']) . '"' . $rtl . '>';
        echo '<label>' . h($field['label']) . '</label>';
        if ($field['type'] === 'repeater') {
            $rows = array_values((array)$english);
            if (!$rows) {
                echo '<p class="help">Add rows in the English tab first (and save) to translate them here.</p>';
            }
            foreach ($rows as $i => $enRow) {
                $trRow = (array)(array_values((array)$value)[$i] ?? []);
                echo '<div class="repeater-row tr-row"><div class="repeater-fields">';
                foreach ($field['fields'] as $sub) {
                    if (!in_array($sub['key'], (array)$field['tr'], true)) continue;
                    echo '<div class="field"><label>' . h($sub['label']) . ' ' . ($i + 1) . '</label>';
                    render_input($sub, $trRow[$sub['key']] ?? '', 't[' . $loc . '][' . $k . '][' . $i . '][' . $sub['key'] . ']', false);
                    echo english_hint($enRow[$sub['key']] ?? '') . '</div>';
                }
                echo '</div></div>';
            }
        } else {
            $display = $value ?? '';
            if ($field['type'] === 'list') $display = (array)$display;
            render_input(array_merge($field, ['required' => false]), $display, 't[' . $loc . '][' . $k . ']', false);
            echo english_hint($english);
        }
        echo '</div>';
    }
    echo '</div>';
}

// ── Views ───────────────────────────────────────────────────

if ($action === 'new' || $action === 'edit') {
    $entry = $action === 'edit' ? get_entry($type, $slug) : null;
    if ($action === 'edit' && !$entry) redirect($listUrl, 'That item no longer exists.', 'error');
    $record = $formRecord ?? ($entry['record'] ?? []);
    $errors = $formErrors ?? [];
    $isNew = $action === 'new';
    $titleText = $isNew ? 'Add ' . $def['singular'] : (string)($record[$def['titleKey']] ?? $slug);
    $postSlug = $isNew ? '' : $slug;

    admin_header($titleText, $type);
    ?>
    <div class="page-head">
      <div>
        <a class="back" href="<?= h($listUrl) ?>">← All <?= h(strtolower($def['label'])) ?></a>
        <h1><?= h($titleText) ?></h1>
      </div>
      <?php if (!$isNew): ?>
        <div class="head-actions">
          <?= status_badge($entry) ?>
          <a class="btn btn-light" href="<?= h(sprintf($def['path'], $slug)) ?>" target="_blank" rel="noopener">View page ↗</a>
        </div>
      <?php endif; ?>
    </div>

    <?php if ($errors): ?>
      <div class="alert alert-error"><strong>Please fix:</strong><ul><?php foreach ($errors as $e): ?><li><?= h($e) ?></li><?php endforeach; ?></ul></div>
    <?php endif; ?>

    <form method="POST" action="/editor/manage.php?type=<?= h($type) ?>&action=save&slug=<?= urlencode($postSlug) ?>" enctype="multipart/form-data" class="edit-form">
      <input type="hidden" name="csrf" value="<?= h(csrf_token()) ?>">
      <?php
        // Current translations: the site's own, overlaid with any saved here.
        $siteI18n = (array)(seed_by_slug($type)[$record['slug'] ?? '']['i18n'] ?? []);
        $savedI18n = (array)($record['i18n'] ?? []);
      ?>
      <div class="lang-tabs" role="tablist" data-lang-tabs>
        <button type="button" class="lang-tab active" data-lang="en">English</button>
        <?php foreach (CMS_LOCALES as $loc => $label): $has = !empty($savedI18n[$loc]) || !empty($siteI18n[$loc]); ?>
          <button type="button" class="lang-tab" data-lang="<?= h($loc) ?>"><?= h($label) ?><?= $has ? ' <span class="dot" title="Has translations"></span>' : '' ?></button>
        <?php endforeach; ?>
      </div>
      <div class="card form-card" data-lang-panel="en">
        <?php foreach ($def['fields'] as $field) render_field($field, $record, $isNew, !$isNew); ?>
      </div>
      <?php foreach (CMS_LOCALES as $loc => $label) {
          $current = array_merge((array)($siteI18n[$loc] ?? []), (array)($savedI18n[$loc] ?? []));
          render_translation_panel($def, $record, $current, $loc, $label);
      } ?>
      <div class="form-footer">
        <button type="submit" class="btn btn-primary">Save &amp; publish</button>
        <a class="btn btn-light" href="<?= h($listUrl) ?>">Cancel</a>
      </div>
    </form>

    <?php if (!$isNew && $entry): ?>
      <div class="card danger-zone">
        <?php if ($entry['builtIn'] && $entry['edited']): ?>
          <form method="POST" action="/editor/manage.php?type=<?= h($type) ?>&action=reset&slug=<?= urlencode($slug) ?>" data-confirm="Remove all your changes to this item and go back to the version from the last site build?">
            <input type="hidden" name="csrf" value="<?= h(csrf_token()) ?>">
            <button type="submit" class="btn btn-light">Undo my changes</button>
            <span class="muted small">Goes back to the version from the last site build.</span>
          </form>
        <?php endif; ?>
        <?php if (!$entry['builtIn']): ?>
          <form method="POST" action="/editor/manage.php?type=<?= h($type) ?>&action=delete&slug=<?= urlencode($slug) ?>" data-confirm="Delete this <?= h(strtolower($def['singular'])) ?>? Its page will stop working.">
            <input type="hidden" name="csrf" value="<?= h(csrf_token()) ?>">
            <button type="submit" class="btn btn-danger">Delete <?= h(strtolower($def['singular'])) ?></button>
          </form>
        <?php endif; ?>
      </div>
    <?php endif; ?>
    <?php
    admin_footer();
    exit;
}

// List view
$entries = all_entries($type);
uasort($entries, function ($a, $b) {
    if ($a['updatedAt'] !== $b['updatedAt']) return $b['updatedAt'] <=> $a['updatedAt'];
    return 0;
});
admin_header($def['label'], $type);
?>
<div class="page-head">
  <div>
    <h1><?= h($def['label']) ?></h1>
    <p class="muted"><?= count($entries) ?> items</p>
  </div>
  <a class="btn btn-primary" href="<?= h($listUrl) ?>&action=new">+ Add <?= h(strtolower($def['singular'])) ?></a>
</div>

<div class="card">
  <input type="search" class="list-filter" placeholder="Search <?= h(strtolower($def['label'])) ?>…" data-list-filter>
  <table class="table" data-list>
    <thead><tr><th>Name</th><th>Details</th><th>Status</th><th></th></tr></thead>
    <tbody>
    <?php foreach ($entries as $s => $e): $rec = $e['record']; $sub = $rec[$def['subtitleKey']] ?? ''; ?>
      <tr>
        <td><a class="row-title" href="<?= h($listUrl) ?>&action=edit&slug=<?= urlencode((string)$s) ?>"><?= h((string)($rec[$def['titleKey']] ?? $s)) ?></a>
          <div class="muted small"><?= h(sprintf($def['path'], $s)) ?></div></td>
        <td class="muted"><?= h(mb_strimwidth(is_array($sub) ? implode(', ', $sub) : (string)$sub, 0, 90, '…')) ?></td>
        <td><?= status_badge($e) ?></td>
        <td class="row-actions">
          <a href="<?= h($listUrl) ?>&action=edit&slug=<?= urlencode((string)$s) ?>">Edit</a>
          <a href="<?= h(sprintf($def['path'], $s)) ?>" target="_blank" rel="noopener">View ↗</a>
        </td>
      </tr>
    <?php endforeach; ?>
    </tbody>
  </table>
</div>
<?php admin_footer();
