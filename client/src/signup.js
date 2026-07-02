import React, { useState } from "react";
import axios from "axios";
import "./signup.css";
import { useNavigate } from "react-router-dom";

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
      const res = await axios.post(
        "https://my-job-portal-backend.onrender.com/user/register",
        {
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
        }
      );

      alert(res.data.message || "Registration successful!");
      navigate("/home");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
        error.response?.data ||
        "Signup failed!"
      );
    }
  };

  return (
    <div className="signup">
      <div className="signup-box">
        <h2>SIGNUP</h2>

        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit">Sign Up</button>
        </form>

        <div className="back-btn" onClick={() => navigate(-1)}>
          <p className="back-text">Already have an account? Login</p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;