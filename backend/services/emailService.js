const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

async function sendContactEmail({ name, email, message }) {
    return await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `New Portfolio Contact Message from ${name}`,
        text: `
Name: ${name}
Email: ${email}

Message:
${message}
        `
    });
}

module.exports = { sendContactEmail };