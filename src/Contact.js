import React from 'react';
import "./Contact.css";
const Contact = ({ contact, onDelete, onUpdate }) => {
  const { id, name, email, contactNo } = contact;

  const handleDelete = () => {
    onDelete(id);
  };

  const handleUpdate = () => {
    // Implement update functionality here
    // You can use a modal or form to edit contact details
    onUpdate(id);
  };

  return (
    <div className="contact">
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Contact No: {contactNo}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleUpdate}>Edit</button>
    </div>
  );
};

export default Contact;
