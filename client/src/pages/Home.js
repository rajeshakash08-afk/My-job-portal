import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);

  const [jobSearch, setJobSearch] = useState("");
  const [locationSearch, setLocationSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/company/all")
      .then(res => setCompanies(res.data))
      .catch(err => console.log(err));
  }, []);

  const filteredCompanies = companies.filter(company =>
    company.jobs?.some(job => {
      const matchJob =
        job.role.toLowerCase().includes(jobSearch.toLowerCase()) ||
        jobSearch.trim() === "";

      const matchLocation =
        job.location.toLowerCase().includes(locationSearch.toLowerCase()) ||
        locationSearch.trim() === "";

      return matchJob && matchLocation;
    })
  );

  const openCompany = (company) => {
    navigate("/company", { state: company });
  };

  return (
    <div className="home">
      <div className="container">
        <h1>Company List</h1>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search Job or Skills"
            value={jobSearch}
            onChange={(e) => setJobSearch(e.target.value)}
          />

          <input
            type="text"
            placeholder="Search Location"
            value={locationSearch}
            onChange={(e) => setLocationSearch(e.target.value)}
          />
        </div>

        <div className="row">
          {filteredCompanies.map((company, index) => (
            <div className="col-md-3" key={index}>
              <div className="job-box">
                <h3>{company.name}</h3>
                <p>{company.description}</p>

                <button
                  className="view-btn"
                  onClick={() => openCompany(company)}
                >
                  View Jobs
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Home;