import React, { useState, useEffect } from 'react';
import './contactform.css';

export default function ContactForm({ onSave, contactToEdit, onCancel }) {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });

  useEffect(() => {
    if (contactToEdit) setContact(contactToEdit);
  }, [contactToEdit]);

  const handleChange = e => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!contact.name) {
      alert('El nombre es obligatorio');
      return;
    }
    onSave(contact);
    setContact({ name: '', email: '', phone: '', company: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Nombre"
        value={contact.name}
        onChange={handleChange}
        required
      />
      <input
        name="company"
        placeholder="Empresa"
        value={contact.company}
        onChange={handleChange}
      />
      <input
        name="phone"
        placeholder="Teléfono"
        value={contact.phone}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        type="email"
        value={contact.email}
        onChange={handleChange}
      />
      <button className='guardar' type="submit">Guardar</button>
      {onCancel && <button className='cancelar' onClick={onCancel}>Cancelar</button>}
    </form>
  );
}
