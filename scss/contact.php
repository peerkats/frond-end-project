

<!DOCTYPE html>
<html>
<head>
    <title>Contact Form</title>
</head>
<body>
    <h1>Contact Form</h1>
    <form action="process.php" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br><br>
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea><br><br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>





<?php


require 'vendor/autoload.php'; 

use SergiX44\Nutgram\Nutgram;

$bot = new Nutgram('7357062863:AAHtwmiU5OnayqYvYiT7pDbjfiIQXEjE2TE');

$bot->onCommand('start', function (Nutgram $bot) {
    $bot->sendMessage('Hello, world!');
});

$bot->run();

?>