<?php
/*

git clone https://markus-freise:ATATT3xFfGF0TBygwA_JJZdSPLAip5tqCWC8pZO9Kjlhiz2jxgUkQtgvRODPB1eA5Z7evhFK1OEvxHaVZ8BY4UJ3uRNgUcCmqWSvs5TP6gyEUpTnG_mIY_aBh3D72HdLxj69yfSKWSeoXtQEsEYsbP6627m6XPoBqGc9fOGKV0NuHqVBb183aTI=C92A43DD@bitbucket.org/freise-design-digital/lenkwerk-wordpress-theme

URL: https://your-domain.de/bitbucket-webhook.php?secret=YOUR_SECRET

*/

$secret = 'innddnsdff2486,euiwudddffafoib';

// Verify the request
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Method not allowed');
}

// Verify webhook secret (sent as query parameter: ?secret=YOUR_SECRET)
if (!isset($_GET['secret']) || $_GET['secret'] !== $secret) {
    http_response_code(403);
    exit('Forbidden');
}

// Parse the payload
$payload = json_decode(file_get_contents('php://input'), true);

// Only deploy on push to main branch
$branch = $payload['push']['changes'][0]['new']['name'] ?? '';
if ($branch !== 'main') {
    echo "Not main branch ($branch), skipping.";
    exit;
}

// Deploy to all instances
$site = getcwd();
$theme = $site.'/wp-content/themes/' . basename(glob('wp-content/themes/*-wordpress-theme')[0] ?? '');

$result = shell_exec("cd $theme && git pull origin main 2>&1");
$output[] = "$themee:\n$result";

header('Content-Type: text/plain');
echo implode("\n---\n", $output);
