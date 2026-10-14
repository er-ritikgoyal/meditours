<?php
declare(strict_types=1);

$toEmail   = 'website@alisprofessional.com';
$toName    = 'Alis Pro Sales';
$fromEmail = 'website@alisprofessional.com';
$fromName  = 'Medical Tourism Website';

function redirect_with_status(string $status): void
{
    if (($_SERVER['HTTP_X_REQUESTED_WITH'] ?? '') === 'XMLHttpRequest') {
        header('Content-Type: application/json; charset=UTF-8');
        echo json_encode(['status' => $status]);
        exit;
    }
    header('Location: /contact/?status=' . rawurlencode($status) . '#enquiry-form', true, 302);
    exit;
}

function clean_input(?string $value): string
{
    return trim((string) $value);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    redirect_with_status('method');
}

$name     = clean_input($_POST['name']     ?? null);
$email    = clean_input($_POST['email']    ?? null);
$phone    = clean_input($_POST['phone']    ?? null);
$company  = clean_input($_POST['company']  ?? null);
$subject  = clean_input($_POST['subject']  ?? null);
$category = clean_input($_POST['category'] ?? $_POST['products'] ?? null);
$message  = clean_input($_POST['message']  ?? null);
$website  = clean_input($_POST['website']  ?? null);

$resolvedSubject = $subject !== '' ? $subject : ($category !== '' ? $category : 'General enquiry');

if (
    $name === '' ||
    $message === '' ||
    $website !== '' ||
    ($email === '' && $phone === '') ||
    ($email !== '' && filter_var($email, FILTER_VALIDATE_EMAIL) === false)
) {
    redirect_with_status('validation');
}

$safeName    = preg_replace('/[\r\n]+/', ' ', $name)            ?? $name;
$safeEmail   = preg_replace('/[\r\n]+/', '',  $email)           ?? $email;
$safeSubject = preg_replace('/[\r\n]+/', ' ', $resolvedSubject) ?? $resolvedSubject;
$replyTo     = $safeEmail !== '' ? '"' . $safeName . '" <' . $safeEmail . '>' : $fromEmail;

$mailSubject = 'Website Enquiry: ' . $safeSubject;
$mailBody    = "New Website Enquiry\r\n"
    . "Name:                {$name}\r\n"
    . "Email:               {$email}\r\n"
    . "Phone:               {$phone}\r\n"
    . "Company:             {$company}\r\n"
    . "Subject:             {$resolvedSubject}\r\n"
    . "Category / Products: {$category}\r\n"
    . "Message:\r\n{$message}\r\n";

// ── File attachment ────────────────────────────────────────
$att       = $_FILES['attachment'] ?? null;
$hasFile   = $att
    && isset($att['error'], $att['size'], $att['tmp_name'], $att['name'])
    && $att['error'] === UPLOAD_ERR_OK
    && $att['size'] > 0;

if ($hasFile) {
    $allowedMime = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
    $allowedExt  = ['pdf', 'jpg', 'jpeg', 'png'];
    $ext         = strtolower(pathinfo((string) $att['name'], PATHINFO_EXTENSION));
    $mime        = mime_content_type((string) $att['tmp_name']) ?: 'application/octet-stream';

    if (!in_array($ext, $allowedExt, true) || !in_array($mime, $allowedMime, true)) {
        redirect_with_status('validation');
    }
    if ($att['size'] > 5 * 1024 * 1024) {
        redirect_with_status('validation');
    }

    $fileData  = base64_encode((string) file_get_contents((string) $att['tmp_name']));
    $safeFile  = preg_replace('/[^a-zA-Z0-9._-]/', '_', basename((string) $att['name']));
    $boundary  = '----=_MimeBoundary_' . bin2hex(random_bytes(12));

    $headers = implode("\r\n", [
        'From: "' . $fromName . '" <' . $fromEmail . '>',
        'Reply-To: ' . $replyTo,
        'MIME-Version: 1.0',
        'Content-Type: multipart/mixed; boundary="' . $boundary . '"',
    ]);

    $body = "--{$boundary}\r\n"
        . "Content-Type: text/plain; charset=UTF-8\r\n"
        . "Content-Transfer-Encoding: 8bit\r\n"
        . "\r\n"
        . $mailBody
        . "\r\n"
        . "--{$boundary}\r\n"
        . "Content-Type: {$mime}; name=\"{$safeFile}\"\r\n"
        . "Content-Transfer-Encoding: base64\r\n"
        . "Content-Disposition: attachment; filename=\"{$safeFile}\"\r\n"
        . "\r\n"
        . chunk_split($fileData)
        . "--{$boundary}--";
} else {
    $headers = implode("\r\n", [
        'From: "' . $fromName . '" <' . $fromEmail . '>',
        'Reply-To: ' . $replyTo,
        'Content-Type: text/plain; charset=UTF-8',
    ]);
    $body = $mailBody;
}

$sent = mail(
    '"' . $toName . '" <' . $toEmail . '>',
    $mailSubject,
    $body,
    $headers
);

if (!$sent) {
    redirect_with_status('mailer');
}

redirect_with_status('success');
