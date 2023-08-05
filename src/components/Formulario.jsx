import React from 'react';

const Formulario = ({ categories, selectedCategory, handleChange }) => {
  return (
    <div>
      <label htmlFor="categorySelect">Selecciona una categoría:</label>
      <select
        id="categorySelect"
        value={selectedCategory}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="">Todas</option> {/* Opción predeterminada */}
        {categories.map((category) => (
          <option key={category.id} value={category.slug}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Formulario;