import React from 'react';
import './contactlist.css';

export default function ContactList({ contacts, onEdit, onDelete }) {
  if (contacts.length === 0) return <p>No hay contactos.</p>;

  return (
    <div className="tabla-wrapper">
      <table className="tabla-contactos">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Empresa</th>
            <th>Teléfono</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
        {contacts.map(c => (
          <tr key={c.id}>
            <td><b>{c.name}</b></td>
            <td>{c.company}</td>
            <td>{c.phone}</td>
            <td>{c.email}</td>
            <td>
              <div className="botones-acciones">
                <button className="Editar" onClick={() => onEdit(c)}>Editar</button>
                <button className="Eliminar" onClick={() => onDelete(c.id)}>Eliminar</button>
              </div>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
    
  );
}
