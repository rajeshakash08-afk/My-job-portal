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
      await axios.post("http://localhost:5000/login/login", {
        email,
        password
      });

      alert("Login successful!");
      navigate("/home");

    } catch (error) {
      alert("Invalid login!");
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