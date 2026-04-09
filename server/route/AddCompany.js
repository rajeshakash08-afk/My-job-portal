import React, { useState } from "react";
import axios from "axios";

function AddCompany() {

  const [company, setCompany] = useState({
    name: "",
    description: "",
    jobs: [{ role: "", experience: "", location: "", salary: "" }]
  });

  const handleJobChange = (index, e) => {
    const newJobs = [...company.jobs];
    newJobs[index][e.target.name] = e.target.value;
    setCompany({ ...company, jobs: newJobs });
  };

  const addJobField = () => {
    setCompany({
      ...company,
      jobs: [...company.jobs, { role: "", experience: "", location: "", salary: "" }]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/company/add", company);
    alert("Company Added!");
  };

  return (
    <div>
      <h2>Add Company</h2>
      <form onSubmit={handleSubmit}>
        
        <input
          type="text"
          placeholder="Company Name"
          onChange={(e) => setCompany({ ...company, name: e.target.value })}
          required
        />

        <textarea
          placeholder="Description"
          onChange={(e) => setCompany({ ...company, description: e.target.value })}
          required
        />

        <h3>Job Details</h3>
        {company.jobs.map((job, index) => (
          <div key={index}>
            <input name="role" placeholder="Role" onChange={(e) => handleJobChange(index, e)} />
            <input name="experience" placeholder="Experience" onChange={(e) => handleJobChange(index, e)} />
            <input name="location" placeholder="Location" onChange={(e) => handleJobChange(index, e)} />
            <input name="salary" placeholder="Salary" onChange={(e) => handleJobChange(index, e)} />
          </div>
        ))}

        <button type="button" onClick={addJobField}>+ Add Job</button>
        <br /><br />
        <button type="submit">Save Company</button>

      </form>
    </div>
  );
}

export default AddCompany;