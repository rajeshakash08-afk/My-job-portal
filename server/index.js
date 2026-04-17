require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

// 👉 Render gives PORT dynamically
const port = process.env.PORT || 5000;

// ROUTES
const userRoutes = require("./route/registerroute");
const loginRoutes = require("./route/loginroute");
const contactRoutes = require("./route/contactformroute");
const applyJobRoutes = require("./route/applyJobRoute");
const companyRoutes = require("./route/companyRoutes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello from the backend!");
});

// 👉 All ROUTES
app.use("/user", userRoutes);
app.use("/login", loginRoutes);
app.use("/contact", contactRoutes);
app.use("/applyjob", applyJobRoutes);
app.use("/company", companyRoutes);
app.use("/uploads", express.static("uploads"));

// 👉 MongoDB Atlas Connection
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to MongoDB Atlas!"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));

// 👉 Start Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});