import React, { useState, useEffect } from "react";

function Profile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: ""
  });

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) setUser(savedUser);
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(user));
    alert("Profile Updated Successfully!");
  };

  return (
    <div className="profile-page">
      <h1>User Profile</h1>

      <div className="profile-form">
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          value={user.phone}
          onChange={handleChange}
        />

        <button onClick={handleSave}>Save Changes</button>
      </div>
    </div>
  );
}

export default Profile;