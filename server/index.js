const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");


const port = 5000;

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

// ROUTES
app.use("/user", userRoutes);
app.use("/login", loginRoutes);
app.use("/contact", contactRoutes);
app.use("/applyjob", applyJobRoutes);
app.use("/company", companyRoutes);
app.use("/uploads", express.static("uploads"));


// MongoDB Connection
mongoose
    .connect("mongodb://127.0.0.1:27017/Akash")
    .then(() => console.log("Connected to MongoDB!"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});