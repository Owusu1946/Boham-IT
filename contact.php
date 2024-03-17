<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["Your Name"];
    $email = $_POST["Your Email"];
    $phone = $_POST["Your Phone"];
    $subject = $_POST["Your Subject"];
    $message = $_POST["Your Message"];

    // Construct email message
    $to = "owusukenneth77@gmail.com";
    $subject = "New Form Submission";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nSubject: $subject\nMessage: $message";

    // Send email
    if (mail($to, $subject, $body)) {
        echo "<script>showToast('Thank you for your message. We will get back to you soon.', true);</script>";
    } else {
        echo "<script>showToast('Sorry, there was an error sending your message.', false);</script>";
    }
}
?>
