const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../model/register");

router.post("/register", async (req, res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    if (!firstName || !lastName || !email || !password || password !== confirmPassword) {
        return res.status(400).send("Please fill all fields correctly.");
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).send("User with this email already exists.");

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).send("Registration successful!");
    } catch (error) {
        res.status(500).send("Registration failed. Please try again.");
    }
});

module.exports = router;