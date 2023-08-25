import React, { useState, useEffect } from 'react';
import './App.css';
//import './Contact.css';
//import './ContactForm.css';
//import './ContactList';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

function App() {
  const [contacts, setContacts] = useState([]);
  const [editingContactId, setEditingContactId] = useState(null);

  useEffect(() => {
    // Fetch data from your API here and set it in the contacts state
    // Replace 'your_api_endpoint' with the actual API endpoint
    fetch('your_api_endpoint')
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const addContact = (newContact) => {
    // Implement adding a contact (POST request to your API)
    // After adding, update the contacts state
    // You can generate a unique id for the new contact
  };

  const deleteContact = (id) => {
    // Implement deleting a contact (DELETE request to your API)
    // After deleting, update the contacts state
  };

  const updateContact = (id, updatedData) => {
    // Implement updating a contact (PUT/PATCH request to your API)
    // After updating, update the contacts state
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Contact Management</h1>
      </header>
      <main className="App-main">
        <ContactForm onSubmit={addContact} />
        <ContactList
          contacts={contacts}
          onDelete={deleteContact}
          onUpdate={setEditingContactId}
        />
      </main>
    </div>
  );
}

export default App;
