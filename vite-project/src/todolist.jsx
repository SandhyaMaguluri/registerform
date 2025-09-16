import React, { useState } from "react";
import "./App.css"; // Import CSS

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    gender: "",
    phone: "",
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name) return "Name is required";
    if (formData.password.length < 6) return "Password must be at least 6 characters";
    if (!/\S+@\S+\.\S+/.test(formData.email)) return "Enter a valid email";
    if (!formData.gender) return "Please select gender";
    if (!/^\d{10}$/.test(formData.phone)) return "Phone must be 10 digits";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError("");
    setSubmittedData(formData);
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit} className="form">
        {/* Name */}
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>

        {/* Password */}
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>

        {/* Gender */}
        <div className="form-group">
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">-- Select --</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Phone */}
        <div className="form-group">
          <label>Phone:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
        </div>

        <button type="submit" className="btn">Submit</button>
      </form>

      {/* Error */}
      {error && <p className="error">{error}</p>}

      {/* Display Data */}
      {submittedData && (
        <div className="result">
          <h3>Submitted Data:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Password:</strong> {submittedData.password}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Gender:</strong> {submittedData.gender}</p>
          <p><strong>Phone:</strong> {submittedData.phone}</p>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;