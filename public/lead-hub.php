<?php
declare(strict_types=1);

// Sends a copy of a website enquiry to the Alis lead hub (n8n), so it lands in the CRM.
// Best effort: a failure here never stops the enquiry email. The hub address lives outside
// the web root in ../lead-hub.env (LEAD_HUB_URL=https://...); without that file nothing is sent.
// The hub only accepts requests from this hosting server's address.

if (realpath(__FILE__) === realpath($_SERVER['SCRIPT_FILENAME'] ?? '')) {
    http_response_code(404);
    exit;
}

function lead_hub_url(): string
{
    $file = dirname(__DIR__) . '/lead-hub.env';
    if (!is_readable($file)) {
        return '';
    }
    foreach (file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
        $line = trim($line);
        if (str_starts_with($line, 'LEAD_HUB_URL=')) {
            $url = trim(substr($line, strlen('LEAD_HUB_URL=')), " \"'");
            return preg_match('#^https://[^\s]+$#', $url) ? $url : '';
        }
    }
    return '';
}

/** Returns true when the hub confirmed it received the enquiry. */
function lead_hub_send(array $lead): bool
{
    $url = lead_hub_url();
    if ($url === '') {
        return false;
    }
    $body = json_encode($lead, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_INVALID_UTF8_SUBSTITUTE);
    if ($body === false) {
        return false;
    }
    $context = stream_context_create(['http' => [
        'method'        => 'POST',
        'header'        => "Content-Type: application/json\r\n",
        'content'       => $body,
        'timeout'       => 5,
        'ignore_errors' => true,
    ]]);
    $response = @file_get_contents($url, false, $context);
    $status = 0;
    if (isset($http_response_header[0]) && preg_match('#^HTTP/\S+\s+(\d{3})#', $http_response_header[0], $m)) {
        $status = (int) $m[1];
    }
    if ($status < 200 || $status >= 300) {
        error_log('lead-hub: enquiry not accepted, HTTP ' . $status);
        return false;
    }
    return $response !== false;
}
