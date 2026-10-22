<?php
declare(strict_types=1);
define('CMS_BOOT', true);
require_once __DIR__ . '/bootstrap.php';
require_once __DIR__ . '/ui.php';
require_auth();

$recent = [];
$stats = [];
foreach (cms_types() as $type => $t) {
    $entries = all_entries($type);
    $live = 0;
    foreach ($entries as $slug => $e) {
        if ($e['live']) $live++;
        if ($e['edited']) $recent[] = ['type' => $type, 'slug' => $slug, 'entry' => $e];
    }
    $stats[$type] = ['total' => count($entries), 'live' => $live];
}
usort($recent, fn($a, $b) => $b['entry']['updatedAt'] <=> $a['entry']['updatedAt']);
$recent = array_slice($recent, 0, 10);
$built = build_time();

admin_header('Dashboard', 'dashboard');
?>
<div class="page-head">
  <div>
    <h1>Dashboard</h1>
    <p class="muted">Last site build: <?= $built ? h(date('j M Y, H:i', $built)) : 'unknown' ?></p>
  </div>
</div>

<div class="cards">
  <?php foreach (cms_types() as $type => $t): ?>
    <div class="card stat-card">
      <div class="stat-icon"><?= $t['icon'] ?></div>
      <div class="stat-body">
        <h2><?= h($t['label']) ?></h2>
        <p class="stat-num"><?= (int)$stats[$type]['total'] ?></p>
        <?php if ($stats[$type]['live']): ?><p class="muted small"><?= (int)$stats[$type]['live'] ?> live update(s) waiting for the next build</p><?php endif; ?>
      </div>
      <div class="stat-actions">
        <a class="btn btn-light" href="/editor/manage.php?type=<?= h($type) ?>">Manage</a>
        <a class="btn btn-primary" href="/editor/manage.php?type=<?= h($type) ?>&action=new">+ Add</a>
      </div>
    </div>
  <?php endforeach; ?>
</div>

<div class="card">
  <h2>Recently changed</h2>
  <?php if (!$recent): ?>
    <p class="muted">Nothing edited yet.</p>
  <?php else: ?>
    <table class="table">
      <thead><tr><th>Item</th><th>Type</th><th>Status</th><th>Saved</th><th></th></tr></thead>
      <tbody>
      <?php foreach ($recent as $r): $t = cms_type($r['type']); $rec = $r['entry']['record']; ?>
        <tr>
          <td><strong><?= h((string)($rec[$t['titleKey']] ?? $r['slug'])) ?></strong></td>
          <td><?= h($t['singular']) ?></td>
          <td><?= status_badge($r['entry']) ?></td>
          <td class="muted"><?= $r['entry']['updatedAt'] ? h(date('j M Y, H:i', $r['entry']['updatedAt'])) : '' ?></td>
          <td class="row-actions"><a href="/editor/manage.php?type=<?= h($r['type']) ?>&action=edit&slug=<?= urlencode($r['slug']) ?>">Edit</a></td>
        </tr>
      <?php endforeach; ?>
      </tbody>
    </table>
  <?php endif; ?>
</div>

<div class="card help">
  <h2>How publishing works</h2>
  <ul>
    <li><strong>Saving publishes straight away.</strong> The English page for that item updates the moment you save (marked <span class="badge badge-live">Live update</span>).</li>
    <li><strong>The rest follows on the next site build.</strong> Menus, listings, search, the recommendations column and the other 8 languages pick up your changes when the developer next builds and uploads the site. New items show in English on the other languages until they are translated.</li>
    <li><strong>Existing site items</strong> can be edited but not deleted, and their web address stays the same, so translations and links keep working. Items you create here can be deleted.</li>
  </ul>
</div>
<?php admin_footer();
