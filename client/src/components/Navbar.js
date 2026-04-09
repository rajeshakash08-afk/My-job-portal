import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Akash.logo.png";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>

      
      <div className="logo">
        <img src={logo} height="70" width="80" alt="Logo" />
      </div>

     
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </div>

     
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </li>
      </ul>

      
      <div className="auth-buttons">
        <Link to="/">
          <button className="logout-btn">Login</button>
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;