const express = require("express");
const router = express.Router();
const Company = require("../model/companyModel");

// Add Company
router.post("/add", async (req, res) => {
  try {
    const company = new Company(req.body);
    await company.save();
    res.json({ message: "Company Added", company });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

// Get All Companies
router.get("/all", async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;