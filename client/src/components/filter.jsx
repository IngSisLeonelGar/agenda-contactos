import React from 'react';

export default function Filter({ filterText, onFilterChange }) {
  return (
    <input
      placeholder="Filtrar por nombre o empresa"
      value={filterText}
      onChange={e => onFilterChange(e.target.value)}
    />
  );
}
