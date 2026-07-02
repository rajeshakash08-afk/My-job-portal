import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { useNavigate, Link } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://my-job-portal-backend.onrender.com/login/login",
        {
          email,
          password,
        }
      );

      alert(res.data.message || "Login successful!");
      navigate("/home");

    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
        error.response?.data ||
        "Invalid login!"
      );
    }
  };

  return (
    <div className="login">
      <div className="login-box">
        <h2>LOGIN</h2>

        <form onSubmit={handleLogin}>
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

          <button type="submit">Login</button>
        </form>

        <Link to="/signup" className="signup-link">
          Signup
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;