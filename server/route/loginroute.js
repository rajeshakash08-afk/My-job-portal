const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../model/register");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).send("Missing fields");

  const user = await User.findOne({ email });
  if (!user) return res.status(404).send("User not found");

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).send("Incorrect password");

  res.status(200).send("Login successful");
});

module.exports = router;