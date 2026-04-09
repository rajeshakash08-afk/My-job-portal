import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pro-footer">
      <div className="footer-wrapper">

        <div className="footer-section">
          <h3>AKASH JOB PORTAL</h3>
          <p>Your trusted platform to find jobs across India with ease.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaGithub /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {(2026)} Akash Job Portal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;