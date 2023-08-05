import React from 'react';
import { Card } from 'react-bootstrap';
import defaultImage from '../assets/NPCfoto.jpg'; 

const Noticia = ({ noticia }) => {
  return (
    <Card>
      <div className="image-container">
        <Card.Img
          variant="top"
          src={noticia.urlToImage || defaultImage}
          onError={(e) => e.target.src = defaultImage}
        />
      </div>
      <Card.Body>
        <Card.Title>{noticia.title}</Card.Title>
        <Card.Text>{noticia.description}</Card.Text>
        <a href={noticia.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Ver noticia completa
        </a>
      </Card.Body>
    </Card>
  );
};

export default Noticia;