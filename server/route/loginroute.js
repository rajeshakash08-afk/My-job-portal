const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
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

  const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

  res.status(200).json({
    message: "Login successful",
    token: token,
    user: {
      id: user._id,
      email: user.email,
      name: user.name
    }
  });
});
module.exports = router;