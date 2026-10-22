<?php
declare(strict_types=1);

/** Admin page chrome: <head>, top bar, flash message. Close with admin_footer(). */
function admin_header(string $title, string $active = ''): void {
    $flash = flash();
    ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <title><?= h($title) ?> — AlisPro MediTours Editor</title>
  <link rel="stylesheet" href="/editor/admin.css">
</head>
<body>
  <header class="topbar">
    <a class="brand" href="/editor/">
      <img src="/images/alis_small_logo.png" alt="" width="32" height="32">
      <span>MediTours Editor</span>
    </a>
    <nav class="topbar-nav">
      <a href="/editor/" class="<?= $active === 'dashboard' ? 'active' : '' ?>">Dashboard</a>
      <?php foreach (cms_types() as $key => $t): ?>
        <a href="/editor/manage.php?type=<?= h($key) ?>" class="<?= $active === $key ? 'active' : '' ?>"><?= h($t['label']) ?></a>
      <?php endforeach; ?>
    </nav>
    <div class="topbar-actions">
      <a href="/" target="_blank" rel="noopener">View site ↗</a>
      <form method="POST" action="/editor/logout.php">
        <input type="hidden" name="csrf" value="<?= h(csrf_token()) ?>">
        <button type="submit" class="link-btn">Log out</button>
      </form>
    </div>
  </header>
  <main class="wrap">
    <?php if ($flash): ?>
      <div class="alert alert-<?= h($flash['type']) ?>"><?= h($flash['msg']) ?></div>
    <?php endif; ?>
    <?php if (!is_file(SEED_DIR . '/meta.json')): ?>
      <div class="alert alert-error">The site snapshot (<code>/editor-seed/</code>) is missing. Upload the latest build so existing content shows here.</div>
    <?php endif; ?>
<?php
}

function admin_footer(): void {
    ?>
  </main>
  <script src="/editor/admin.js"></script>
</body>
</html>
<?php
}

/** Status pill for a list row or edit page. */
function status_badge(array $entry): string {
    if ($entry['live']) return '<span class="badge badge-live" title="Saved after the last build — shown live on the site now. The full page (all languages, menus, search) updates after the next build.">Live update</span>';
    if (!$entry['builtIn']) return '<span class="badge badge-new">New</span>';
    if ($entry['edited']) return '<span class="badge badge-edited">Edited</span>';
    return '<span class="badge">On site</span>';
}
