const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../model/register");

router.post("/register", async (req, res) => {
    try {
        const { firstName, lastName, email, password, confirmPassword } = req.body;

        // Check required fields
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            return res.status(400).json({
                message: "Please fill all fields."
            });
        }

        // Check password match
        if (password !== confirmPassword) {
            return res.status(400).json({
                message: "Passwords do not match."
            });
        }

        // Check existing user
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User with this email already exists."
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });

        // Save user
        await newUser.save();

        return res.status(201).json({
            success: true,
            message: "Registration successful!"
        });

    } catch (error) {
        console.error("REGISTER ERROR:", error);

        return res.status(500).json({
            success: false,
            message: "Registration failed",
            error: error.message
        });
    }
});

module.exports = router;