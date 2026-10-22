<?php
declare(strict_types=1);
define('CMS_BOOT', true);
require_once __DIR__ . '/bootstrap.php';

if (is_authenticated()) redirect('/editor/');

$error = '';
$configured = cms_env('EDITOR_PASSWORD_HASH') !== '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!verify_csrf($_POST['csrf'] ?? null)) {
        $error = 'Your session expired. Please try again.';
    } elseif (is_locked_out()) {
        $error = 'Too many failed attempts. Please try again in 15 minutes.';
    } elseif ($configured && password_verify((string)($_POST['password'] ?? ''), cms_env('EDITOR_PASSWORD_HASH'))) {
        clear_failed_logins();
        session_regenerate_id(true);
        $_SESSION['editor_authed'] = true;
        redirect('/editor/');
    } else {
        record_failed_login();
        usleep(500_000);
        $error = 'Incorrect password. Please try again.';
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <title>Editor Login — AlisPro MediTours</title>
  <link rel="stylesheet" href="/editor/admin.css">
</head>
<body class="login-page">
  <div class="login-card">
    <div class="brand">
      <img src="/images/alis_small_logo.png" alt="" width="40" height="40">
      <div>AlisPro MediTours<small>Content Editor</small></div>
    </div>
    <h1>Welcome back</h1>
    <p class="muted">Sign in to manage blogs, treatments, doctors and hospitals.</p>

    <?php if (!$configured): ?>
      <div class="alert alert-error">The editor password isn't set up yet. Add <code>EDITOR_PASSWORD_HASH</code> to the site's <code>.env</code> file.</div>
    <?php endif; ?>
    <?php if ($error): ?>
      <div class="alert alert-error"><?= h($error) ?></div>
    <?php endif; ?>

    <form method="POST">
      <input type="hidden" name="csrf" value="<?= h(csrf_token()) ?>">
      <label for="password">Password</label>
      <input type="password" id="password" name="password" required autocomplete="current-password" autofocus>
      <button type="submit" class="btn btn-primary btn-block">Sign in →</button>
    </form>
    <a href="/" class="back-link">← Back to the website</a>
  </div>
</body>
</html>
