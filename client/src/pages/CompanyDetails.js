import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./companyDetails.css";

function CompanyDetails() {
  const { state: company } = useLocation();

  if (!company) {
    return <h2>No company data found</h2>;
  }

  return (
    <div className="company">
      <div className="container mt-5">

        <h1>{company.name}</h1>
        <h3>Available Job Openings</h3>

        {company.jobs.map((job, index) => (
          <div className="job-box1" key={index}>
            <ul>
              <li><b>Role:</b> {job.role}</li>
              <li><b>Experience:</b> {job.experience}</li>
              <li><b>Location:</b> {job.location}</li>
              <li><b>Salary:</b> {job.salary}</li>
            </ul>

            <Link to="/apply" state={{ company: company.name, job: job.role }}>
              <button>Apply Now</button>
            </Link>
          </div>
        ))}

        <div className="back-home">
          <Link to="/Home">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default CompanyDetails;