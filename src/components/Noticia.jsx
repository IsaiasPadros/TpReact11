import React from 'react';

const Noticia = ({ noticia }) => {
  const { Titulo, description, url, urlToImage } = noticia;
  return (
    <div>
      <h3>{Titulo}</h3>
      <img src={urlToImage} alt={Titulo} />
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Leer más
      </a>
    </div>
  );
};

export default Noticia;