import React, { useState } from "react";
import "./applyJob.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ApplyJob() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
  });

  // Input text change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // File upload change
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("resume", formData.resume);

    try {
      const res = await axios.post("http://localhost:5000/applyjob/apply", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Application submitted successfully!");
      console.log(res.data);

      //  FORM RESET

      setFormData({
        name: "",
        email: "",
        phone: "",
        resume: null,
      });

      //  PAGE RELOAD
      
      window.location.reload();

    } catch (error) {
      console.error(error);
      alert("Error submitting application!");
    }
  };

  return (
    <div className="applyjob">
      <div className="apply-container">
        <h1>Job Application Form</h1>

        <form onSubmit={handleSubmit} className="apply-form">

          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}   // Controlled input
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Enter Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>Upload Resume</label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            required
          />

          <button type="submit">Submit Application</button>
        </form>
      </div>

      <div className="back-btn" onClick={() => navigate(-1)}>
        <p className="back-text">Back</p>
      </div>
    </div>
  );
}

export default ApplyJob;