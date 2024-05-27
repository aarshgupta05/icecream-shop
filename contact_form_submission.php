<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us | Sweet Scoops</title>
    <link rel="stylesheet" href="Styles/style.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Baby+Kruffy&display=swap">
    <style>
        /* Custom styles for the Contact page */
        header h1 {
            font-family: 'Baby Kruffy', cursive;
            color: #ff6600;
            text-align: center;
            margin-top: 20px;
        }

        .contact-container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            text-align: center;
        }

        .contact-section {
            margin-bottom: 20px;
        }

        .contact-section h2 {
            font-family: 'Baby Kruffy', cursive;
            color: #ff6600;
        }

        .contact-section p {
            font-size: 1.1rem;
            line-height: 1.6;
        }

        .contact-form {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .contact-form input,
        .contact-form textarea {
            padding: 10px;
            font-size: 1rem;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 100%;
        }

        .contact-form button {
            background-color: #ff6600;
            color: #fff;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .contact-form button:hover {
            background-color: #ff8533;
        }
    </style>
</head>
<body>
    <header>
        <h1>Contact Us</h1>
        <button onclick="window.location.href='index.html'">Back to Home Page</button>
    </header>

    <main class="contact-container">
        <section class="contact-section">
            <h2>We'd Love to Hear From You!</h2>
            <p>If you have any questions, suggestions, or feedback, feel free to get in touch with us using the form below or through our contact details. Your opinion matters to us!</p>
        </section>

        <section class="contact-section">
            <form class="contact-form" action="" method="post">
                <input type="text" name="name" placeholder="Your Name" required>
                <input type="email" name="email" placeholder="Your Email" required>
                <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>

        <section class="contact-section">
            <h2>Our Contact Details</h2>
            <p>Email: contact@sweetscoops.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Sweet Street, Scoop City, IC 12345</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Sweet Scoops. All rights reserved.</p>
        <button onclick="window.location.href='index.html'">Back to Home Page</button>
    </footer>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Collect and sanitize input data
        $name = htmlspecialchars(strip_tags(trim($_POST["name"])));
        $email = htmlspecialchars(strip_tags(trim($_POST["email"])));
        $message = htmlspecialchars(strip_tags(trim($_POST["message"])));

        // Validate email
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "<p>Invalid email format</p>";
            exit;
        }

        // Email configuration
        $to = "your-email@example.com";  // Replace with your email address
        $subject = "New Contact Form Submission";
        $headers = "From: " . $email . "\r\n";
        $headers .= "Reply-To: " . $email . "\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        // Email body
        $body = "You have received a new message from your website contact form.\n\n";
        $body .= "Name: " . $name . "\n";
        $body .= "Email: " . $email . "\n";
        $body .= "Message:\n" . $message . "\n";

        // Send email
        if (mail($to, $subject, $body, $headers)) {
            echo "<p>Thank you for contacting us. We will get back to you shortly.</p>";
        } else {
            echo "<p>Sorry, something went wrong. Please try again later.</p>";
        }
    }
    ?>
</body>
</html>
