import React, { useState, useEffect } from 'react';
import {
  fetchContacts,
  addContact,
  updateContact,
  deleteContact,
} from './api/contacts';
import ContactList from './components/contactlist';
import ContactForm from './components/contactform';
import Filter from './components/filter';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    loadContacts();
  }, []);

  async function loadContacts() {
    try {
      const data = await fetchContacts();
      setContacts(data);
    } catch (error) {
      alert(error.message);
    }
  }

  const handleSave = async contact => {
  try {
      // Si estamos agregando (no editando) y ya hay 5 contactos, no dejar continuar
      if (!editingContact && contacts.length >= 5) {
        alert('Solo puedes tener un máximo de 5 contactos.');
        return;
      }

      if (editingContact) {
        await updateContact(editingContact.id, contact);
        setEditingContact(null);
      } else {
        await addContact(contact);
      }

      loadContacts();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDelete = async id => {
    if (!window.confirm('¿Eliminar contacto?')) return;
    try {
      await deleteContact(id);
      loadContacts();
    } catch (error) {
      alert(error.message);
    }
  };

  const filteredContacts = contacts.filter(c =>
    c.name.toLowerCase().includes(filterText.toLowerCase()) ||
    (c.company && c.company.toLowerCase().includes(filterText.toLowerCase()))
  );

  return (
    <div className='app-container'>
      <h1>Agenda de Contactos</h1>
      <Filter filterText={filterText} onFilterChange={setFilterText} />
      <ContactForm
        onSave={handleSave}
        contactToEdit={editingContact}
        onCancel={() => setEditingContact(null)}
      />
      <ContactList
        contacts={filteredContacts}
        onEdit={setEditingContact}
        onDelete={handleDelete}
      />
    </div>
  );
}
