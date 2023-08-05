import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { getNoticiasPorCategoria } from './Api';
import Titulo from './components/Titulo';
import Formulario from './components/Formulario';
import ListaNoticias from './components/ListaNoticias';

const App = () => {
  const [categorias, setCategorias] = useState([]);
  const [selectedCategoria, setSelectedCategoria] = useState('general');
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      const response = await fetch(
        'https://newsapi.org/v2/top-headlines/sources?apiKey=1d48306703b04b5fac7248aa6e828190'
      );
      const data = await response.json();
      const categorias = data.sources.map((source) => source.category);
      setCategorias([...new Set(categorias)]);
    };

    fetchCategorias();
  }, []);

  useEffect(() => {
    const fetchNoticiasPorCategoria = async () => {
      const noticiasPorCategoria = await getNoticiasPorCategoria(selectedCategoria);
      setNoticias(noticiasPorCategoria);
    };

    fetchNoticiasPorCategoria();
  }, [selectedCategoria]);

  return (
    <Container>
      <Titulo />
      <Formulario categorias={categorias} onChangeCategoria={setSelectedCategoria} />
      <ListaNoticias noticias={noticias} />
    </Container>
  );
};

export default App;