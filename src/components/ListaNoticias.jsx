import React from 'react';
import Noticia from './Noticia';

const ListaNoticias = ({ noticias }) => {
  return (
    <div className="row">
      {noticias.map((noticia, index) => (
        <div key={index} className="col-md-4 mb-4">
          <div style={{ height: '100%' }}>
            <Noticia noticia={noticia} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListaNoticias;