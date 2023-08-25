import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', email: '', contactNo: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="text"
        name="contactNo"
        value={formData.contactNo}
        onChange={handleChange}
        placeholder="Contact No"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
