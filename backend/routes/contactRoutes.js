const express = require("express");
const { rateLimit } = require("express-rate-limit");
const router = express.Router();
const { contact } = require("../controllers/contactController");

const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 5,
    standardHeaders: "draft-8",
    legacyHeaders: false,
    message: {
        message: "Too many submissions. Please try again in 15 minutes."
    }
});

router.post("/", contactLimiter, contact);

module.exports = router;
