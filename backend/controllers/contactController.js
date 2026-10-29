const Message = require("../models/Message");
const { sendContactEmail } = require("../services/emailService");

async function contact(req, res) {
    try {
        const { name, email, message } = req.body;

        if (
            typeof name !== "string" ||
            typeof email !== "string" ||
            typeof message !== "string" ||
            !name.trim() ||
            !email.trim() ||
            !message.trim()
        ) {
            return res.status(400).json({
                message: "Please provide a valid name, email, and message."
            });
        }

        const savedMessage = await Message.create({
            name: name.trim(),
            email: email.trim(),
            message: message.trim()
        });

        let emailSent = false;

        try {
            await sendContactEmail({
                name: savedMessage.name,
                email: savedMessage.email,
                message: savedMessage.message
            });

            emailSent = true;
        } catch (emailError) {
            console.error("Email notification failed:", emailError);
        }

        return res.status(201).json({
            message: "Your message has been received successfully.",
            emailSent
        });

    } catch (error) {
        console.error("Contact submission error:", error);

        return res.status(500).json({
            message: "Something went wrong. Please try again later."
        });
    }
}

module.exports = { contact };
