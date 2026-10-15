import React, { useState } from "react";

function App() {
  // 1. Store form data
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
  });

  // 2. Get existing users from Local Storage
  const [usersData, setUserData] = useState(() => {
    const savedUsers = localStorage.getItem("Datauser");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  // 3. Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 4. Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    if (
      !formData.name.trim() ||
      !formData.age ||
      !formData.email.trim() ||
      !formData.password
    ) {
      alert("Please fill in all fields");
      return;
    }

    // Check for duplicate email
    const existEmail = usersData.some(
      (user) =>
        user.email.toLowerCase() === formData.email.trim().toLowerCase()
    );

    if (existEmail) {
      alert("Email already exists");
      return;
    }

    // Create a new user
    const newUser = {
      id: Date.now(),
      name: formData.name.trim(),
      age: formData.age,
      email: formData.email.trim(),
      password: formData.password,
    };

    // Add the new user to the array
    const updatedUsers = [...usersData, newUser];

    // Update state
    setUserData(updatedUsers);

    // Save users in Local Storage
    localStorage.setItem("Datauser", JSON.stringify(updatedUsers));

    alert("Registration successful!");

    // Clear the form
    setFormData({
      name: "",
      age: "",
      email: "",
      password: "",
    });
  };

  return (
    <div style={{maxWidth: "400px",
    margin: "40px auto",
    padding: "30px",
    background: "linear-gradient(135deg, #e0e9f0, #f3e8ff)",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(88, 28, 135, 0.2)",
    fontFamily: "Arial, sans-serif",
    border: "1px solid #140127",
     }}>
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            style={{
            border: "2px solid #8b5cf6",
            borderRadius: "8px",
            padding: "10px",
            outline: "none",
            width: "100%",
            boxSizing: "border-box",
  }}
/>
        </div>

        <div>
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            min="1"
            required
            placeholder="Enter your age"
            style={{
            border: "2px solid #8b5cf6",
            borderRadius: "8px",
            padding: "10px",
            outline: "none",
            width: "100%",
            boxSizing: "border-box",
  }}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            style={{
            border: "2px solid #8b5cf6",
            borderRadius: "8px",
            padding: "10px",
            outline: "none",
            width: "100%",
            boxSizing: "border-box",
  }}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            style={{
            border: "2px solid #8b5cf6",
            borderRadius: "8px",
            padding: "10px",
            outline: "none",
            width: "100%",
            boxSizing: "border-box",
  }}
          />
        </div>

        <button type="submit" 
        style={{border: "2px solid #8b5cf6", borderRadius: "8px", padding: "5px", }}
        >Register</button>
      </form>

      

    
    </div>
  );
}

export default App;