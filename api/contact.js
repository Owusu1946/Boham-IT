// api/contact.js

export default function handler(req, res) {
    if (req.method === 'POST') {
        // Handle form submission
        const formData = req.body;
        // Process the form data (e.g., send email)
        // Example: Send email using SendGrid
        // replace SENDGRID_API_KEY with your actual SendGrid API key
        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to: 'your-email@example.com', // Replace with your email address
            from: formData.email,
            subject: formData.msg_subject,
            text: formData.message,
        };
        sgMail.send(msg)
            .then(() => {
                console.log('Email sent');
                res.status(200).json({ message: 'Form submitted successfully' });
            })
            .catch((error) => {
                console.error(error);
                res.status(500).json({ message: 'Internal server error' });
            });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
