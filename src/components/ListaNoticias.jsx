import React from 'react';
import Noticia from './Noticia';

const ListaNoticias = ({ noticias }) => {
  return (
    <div>
      {noticias.map((noticia, index) => (
        <Noticia key={index} noticia={noticia} />
      ))}
    </div>
  );
};

export default ListaNoticias;