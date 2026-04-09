import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./signup.css";

function SignupPage() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/user/register", {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      });

      alert("Registration successful!");
      navigate("/home");

    } catch (error) {
      alert("Signup failed!");
    }
  };

  return (
    <div className="signup">
      <div className="signup-box">
        <h2>SIGNUP</h2>

        <form onSubmit={handleSignup}>

          <input type="text" placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)} required />

          <input type="text" placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)} required />

          <input type="email" placeholder="Email"
            onChange={(e) => setEmail(e.target.value)} required />

          <input type="password" placeholder="Password"
            onChange={(e) => setPassword(e.target.value)} required />

          <input type="password" placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)} required />

          <button type="submit">Sign Up</button>
        </form>

        <div className="back-btn" onClick={() => navigate(-1)}>
          <p className="back-text"> Already have an account? Login</p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;