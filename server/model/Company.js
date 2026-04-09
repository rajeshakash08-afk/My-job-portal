const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  role: String,
  experience: String,
  location: String,
  salary: String
});

const CompanySchema = new mongoose.Schema({
  name: String,
  description: String,
  jobs: [JobSchema]
});

module.exports = mongoose.model("Company", CompanySchema);