<?php

//this file is not used
$sendto = "sebastiaan.vanhoecke@hotmail.be";
$usermail = $_POST['email'];
$content = nl2br($_POST['msg']);
$subjectM = nl2br($_POST['subjectM']);
$location = "server: ";

$subject = "New message from Sevaho";
$headers = "From: " . strip_tags($usermail) . "\r\n";
$headers .= "Reply-To: " . strip_tags($usermail) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

$date = date("l, F jS, Y");
$time = date("h:i A");


$msg = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>New User Feedback</h2>\r\n";
$msg = "Bericht op $date om $time.\n\n";
$msg .= "<p><strong>Sent by:</strong> " . $usermail . "</p>\r\n";
$msg .= "<p><strong>subject:</strong> " . $subjectM . "</p>\r\n";
$msg .= "<p><strong>Message:</strong> " . $content . "</p>\r\n";
$msg .= "</body></html>";


if (@mail($sendto, $subject, $msg, $headers)) {
    echo "true";
} else {
    echo "false";
}

?>
