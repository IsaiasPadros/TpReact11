import React, { useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import ListaNoticias from './components/ListaNoticias';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const categoriesResponse = await fetchCategories();
      setCategories(categoriesResponse);
    }
    fetchData();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('https://newsdata.io/api/1/news?apikey=pub_27255eeb9aed0b36610336db322bf162164af', {
        headers: {
          mode: 'no-cors'
        },
      });
      const data = await response.json();
      return data.categories;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  };

  const handleCategoryChange = async (category) => {
    setSelectedCategory(category);
    const noticiasResponse = await fetchNewsByCategory(category);
    setNoticias(noticiasResponse);
  };

  const fetchNewsByCategory = async (category) => {
    try {
      const response = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_27255eeb9aed0b36610336db322bf162164af&category=science`,
        {
          headers: {
            mode: 'no-cors'
          },
        }
      );
      const data = await response.json();
      return data.articles;
    } catch (error) {
      console.error(`Error fetching news for category ${category}:`, error);
      return [];
    }
  };

  return (
    <div className="container mt-4">
      <h1>Noticias</h1>
      <Formulario
        categories={categories}
        selectedCategory={selectedCategory}
        handleChange={handleCategoryChange}
      />
      <ListaNoticias noticias={noticias} />
    </div>
  );
};

export default App;