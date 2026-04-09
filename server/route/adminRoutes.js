const express = require("express");
const router = express.Router();

const Contact = require("../model/Contact");
const ApplyJob = require("../model/ApplyJob");
const User = require("../model/User");

router.get("/all-data", async (req, res) => {
    const contacts = await Contact.find();
    const jobs = await ApplyJob.find();
    const users = await User.find();

    res.json({ contacts, jobs, users });
});

module.exports = router;