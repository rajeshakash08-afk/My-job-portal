require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// PORT
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const userRoutes = require("./route/registerroute");
const loginRoutes = require("./route/loginroute");
const contactRoutes = require("./route/contactformroute");
const applyJobRoutes = require("./route/applyJobRoute");
const companyRoutes = require("./route/companyRoutes");

// Home Route
app.get("/", (req, res) => {
  res.send("🚀 Job Portal Backend Running...");
});

// API Routes
app.use("/user", userRoutes);
app.use("/login", loginRoutes);
app.use("/contact", contactRoutes);
app.use("/applyjob", applyJobRoutes);
app.use("/company", companyRoutes);

// Static Folder
app.use("/uploads", express.static("uploads"));

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error");
    console.error(err);
  });

// Server Start
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});