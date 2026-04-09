const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  role: String,
  experience: String,
  location: String,
  salary: String
});

const companySchema = new mongoose.Schema({
  name: String,
  description: String,
  jobs: [jobSchema]
});

module.exports = mongoose.model("Company", companySchema);