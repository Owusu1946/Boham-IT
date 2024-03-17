// api/contact.js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.mailgun.org',
    port: 587,
    secure: false, // false for 587, true for 465
    auth: {
        user: 'postmaster@YOUR_MAILGUN_DOMAIN',
        pass: process.env.MAILGUN_API_KEY,
    },
});

export default function (req, res) {
    if (req.method === 'POST') {
        const formData = req.body;
        const mailOptions = {
            from: formData.email,
            to: 'your-email@example.com', // Replace with your email address
            subject: formData.msg_subject,
            text: formData.message,
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error);
                res.status(500).send('Internal server error');
            } else {
                console.log('Email sent: ' + info.response);
                res.status(200).send('Form submitted successfully');
            }
        });
    } else {
        res.status(405).send('Method Not Allowed');
    }
}
