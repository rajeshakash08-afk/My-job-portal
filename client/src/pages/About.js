import React from "react";
import "./about.css";
import amazon from "./amazon-logo-.png"
import google from "./Google-logo-.png"
import wipro from "./wipro.png"
import zoho from "./zoho.png"
import techmahindra from "./tech-mahindra.png"


function About() {
  return (
    <div className="about">
      <div className="about-container">


        <h1>About Our Job Portal</h1>

        <p>
          Our Job Portal helps job seekers find the best career opportunities in top companies across India.
          We connect talented candidates with leading organizations in the IT industry,
          ensuring that every individual finds a role that matches their skills, passion,
          and career goals. Our platform is designed to make job searching simple, fast,
          and effective by providing updated listings, personalized recommendations, and a seamless application process.
          Enga portal-la, unga professional growth-ku thevaiyana ella support-um kadikum,
          so you can confidently take the next step in your career journey.
        </p>

        <div className="mission">
          <h2>Our Mission</h2>

          <p>
            Our mission is to simplify the job search process and help candidates discover their dream jobs quickly and easily.
            We aim to empower every job seeker by providing accurate, up-to-date opportunities, user-friendly tools, and personalized guidance throughout their career journey. By bridging the gap between skilled professionals and trusted employers,
            we strive to create a smooth, transparent, and rewarding employment experience for everyone.
          </p>
        </div>

        <div className="list">
          <h2>What We Offer</h2>

          <ul className="unorder">
            <li>Latest IT job opportunities</li>
            <li>Top company listings</li>
            <li>Easy job application process</li>
            <li>Career guidance for job seekers</li>
          </ul>

        </div>
        <div className="logo-img">        
        <img src={amazon} alt="amazon" width={200}></img>
        <img src={google} alt="google" width={200}></img>
        <img src={wipro} alt="wipro" width={200}></img>
        <img src={zoho} alt="zoho" width={200}></img>
        <img src={techmahindra} alt="techmahindra" width={200}></img>
        </div>

      </div>
    </div>
  );
}

export default About;