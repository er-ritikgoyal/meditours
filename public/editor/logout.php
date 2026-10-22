<?php
declare(strict_types=1);
define('CMS_BOOT', true);
require_once __DIR__ . '/bootstrap.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && verify_csrf($_POST['csrf'] ?? null)) {
    start_session();
    $_SESSION = [];
    session_destroy();
}
header('Location: /editor/login.php');
exit;
