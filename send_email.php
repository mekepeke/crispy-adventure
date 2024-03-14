<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form fields
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Email address to send the message
    $to = "maukotea@gmail.com";

    // Email subject
    $email_subject = "$subject";

    // Email content
    $email_body = "You have received a new message from $name ($email):\n\n$message";

    // Headers
    $headers = "From: $email\n";
    $headers .= "Reply-To: $email\n";

    // Send email
    mail($to, $email_subject, $email_body, $headers);
}
?>
