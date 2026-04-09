const express = require("express");
const router = express.Router();
const multer = require("multer");
const ApplyJob = require("../model/ApplyJob");
const nodemailer = require("nodemailer");

const storage = multer.diskStorage({
    destination: "./uploads",
    filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});

const upload = multer({ storage });

router.post("/apply", upload.single("resume"), async (req, res) => {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone || !req.file) {
        return res.status(400).send("All fields required");
    }

    const resumePath = req.file.path;

    try {
        await new ApplyJob({
            name,
            email,
            phone,
            resume: resumePath
        }).save();
    } catch (error) {
        return res.status(500).send("Saving failed");
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "rajeshakash08@gmail.com",
            pass: "aqntyktzjzoauruy"
        }
    });

    const mailOptions = {
        from: email,
        to: "rajeshakash08@gmail.com",
        subject: "New Job Application",
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}`,
        attachments: [{ path: resumePath }]
    };

    transporter.sendMail(mailOptions, () => {
        res.send("Application Submitted Successfully!");
    });
});

module.exports = router;