const express = require("express");
const router = express.Router();
const Contact = require("../model/Contact");
const nodemailer = require("nodemailer");

router.post("/contact", async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: "All fields required" });
        }

        // Save to DB
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        console.log("Message saved to DB");

        // Send Email
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "rajeshakash08@gmail.com",
                pass: "aqntyktzjzoauruy",
            },
        });

        const mailOptions = {
            from: email,
            to: "rajeshakash08@gmail.com",
            subject: "New Contact Form Message",
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: "Message saved & email sent" });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;