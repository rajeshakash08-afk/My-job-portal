import React, { useState } from "react";
import "./contact.css";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/contact/contact",
        formData
      );
      console.log(response.data);
      alert("Message sent!");

      //  CLEAR FORM AFTER SUCCESS
      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      console.error("Error submitting message:", error);
      alert("Message failed!");
    }
  };

  return (
    <div className="mycontact">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to contact us anytime.</p>

        <form onSubmit={handleSubmit} className="contact-form">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;