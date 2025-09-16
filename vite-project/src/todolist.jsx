import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" /><br />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" /><br />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" /><br />
      <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" /><br />
      <button onClick={() => setSubmittedData(formData)}>Submit</button>

      {submittedData && (
        <div>
          <h3>Submitted Data</h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
          <p>Age: {submittedData.age}</p>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;
