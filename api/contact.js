// api/contact.js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.mailgun.org',
    port: 587,
    secure: false, // false for 587, true for 465
    auth: {
        user: 'postmaster@https://app.mailgun.com/app/sending/domains/sandbox2efef77b306c49559a5854247cf2fdc9.mailgun.org',
        pass: process.env.MAILGUN_API_KEY,
    },
});

export default function (req, res) {
    if (req.method === 'POST') {
        const formData = req.body;
        const mailOptions = {
            from: formData.email,
            to: 'owusukenneth77@gmail.com', // Replace with your email address
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
