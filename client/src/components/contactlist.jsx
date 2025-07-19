import React from 'react';

export default function ContactList({ contacts, onEdit, onDelete }) {
  if (contacts.length === 0) return <p>No hay contactos.</p>;

  return (
    <ul>
      {contacts.map(c => (
        <li key={c.id}>
          <b>{c.name}</b> - {c.company} - {c.phone} - {c.email}
          <button onClick={() => onEdit(c)}>Editar</button>
          <button onClick={() => onDelete(c.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}
