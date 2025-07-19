import React from 'react';
import './filter.css'

export default function Filter({ filterText, onFilterChange }) {
  return (
    <input className='filtro'
      placeholder="Filtrar por nombre o empresa"
      value={filterText}
      onChange={e => onFilterChange(e.target.value)}
    />
  );
}
