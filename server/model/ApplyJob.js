const mongoose = require("mongoose");

const applyJobSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    resume: String,
});

module.exports = mongoose.model("ApplyJob", applyJobSchema);