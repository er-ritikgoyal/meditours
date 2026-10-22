<?php
declare(strict_types=1);
define('CMS_BOOT', true);
require_once __DIR__ . '/bootstrap.php';
require_once __DIR__ . '/ui.php';
require_auth();

$type = (string)($_GET['type'] ?? '');
$def = cms_type($type);
if (!$def) redirect('/editor/', 'Unknown section.', 'error');

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
        [$record, $errors] = build_record($def, $type, $existing, $_POST['f'] ?? [], $_FILES, $_POST['rm'] ?? []);

        if (!$errors) {
            $saved = saved($type);
            $prevMeta = $existing['record']['_cms'] ?? [];
            $record['_cms'] = [
                'source' => $existing ? ($existing['builtIn'] ? 'site' : 'admin') : 'admin',
                'createdAt' => $prevMeta['createdAt'] ?? time(),
                'updatedAt' => time(),
            ];
            $saved[$record['slug']] = $record;
            if (!write_saved($type, $saved)) $errors[] = 'Could not save on the server. Check folder permissions.';
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
function build_record(array $def, string $type, ?array $existing, array $in, array $files, array $remove): array {
    $record = $existing ? $existing['record'] : [];
    unset($record['_cms']);
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
                $record[$key] = array_values(array_filter(array_map('trim', preg_split('/\R/', (string)$raw) ?: []), fn($s) => $s !== ''));
                break;
            case 'longtext':
                $text = trim(str_replace("\r\n", "\n", (string)$raw));
                $record[$key] = ($field['as'] ?? '') === 'paragraphs'
                    ? array_values(array_filter(array_map('trim', preg_split('/\n\s*\n/', $text) ?: []), fn($s) => $s !== ''))
                    : $text;
                break;
            case 'repeater':
                $rows = [];
                foreach ((array)$raw as $row) {
                    $clean = [];
                    foreach ($field['fields'] as $sub) {
                        $sv = trim(str_replace("\r\n", "\n", (string)($row[$sub['key']] ?? '')));
                        if ($sv !== '') $clean[$sub['key']] = $sv;
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
    return [$record, $errors];
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
        echo '<div class="field">';
        echo '<label>' . h($sub['label']) . '</label>';
        render_input($sub, $row[$sub['key']] ?? '', 'f[' . $field['key'] . '][' . $index . '][' . $sub['key'] . ']', $isNew);
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
      <div class="card form-card">
        <?php foreach ($def['fields'] as $field) render_field($field, $record, $isNew, !$isNew); ?>
      </div>
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
