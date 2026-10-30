const {Resend} = require("resend"); 

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendContactEmail({ name, email, message }) {

    const { data, error } = await resend.emails.send({
        from: "Resend <onboarding@resend.dev>",
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

    if (error) {
        console.error("Resend error:", error);
        throw new Error(error.message);
    }

    console.log("Email sent successfully. ID:", data.id);
}

module.exports = {sendContactEmail}