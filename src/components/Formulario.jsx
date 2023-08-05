import React from 'react';

const Formulario = ({ categorias, onChangeCategoria }) => {
  return (
    <div>
      <label htmlFor="selectCategoria">Buscar por categoria:</label>
      <select id="selectCategoria" onChange={(e) => onChangeCategoria(e.target.value)}>
        {categorias.map((categoria) => (
          <option key={categoria} value={categoria}>
            {categoria}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Formulario;