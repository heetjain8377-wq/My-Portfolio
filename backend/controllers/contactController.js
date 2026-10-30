
const Message = require("../models/Message");
const { sendContactEmail } = require("../services/emailService");

async function contact(req, res) {
    try {

        const { name, email, message } = req.body;

        // Keep your existing validation here

        const savedMessage = await Message.create({
            name: name.trim(),
            email: email.trim(),
            message: message.trim()
        });

        res.status(201).json({
            message: "Your message has been received successfully."
        });

        sendContactEmail({
            name: savedMessage.name,
            email: savedMessage.email,
            message: savedMessage.message
        }).catch((emailError) => {
            console.error("4. Email notification failed:", emailError);
        });

    } catch (error) {
        console.error("Contact submission error:", error);

        if (!res.headersSent) {
            return res.status(500).json({
                message: "Something went wrong. Please try again later."
            });
        }
    }
}

module.exports = { contact };