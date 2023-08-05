const API_KEY = '1d48306703b04b5fac7248aa6e828190';
const API_URL = 'https://newsapi.org/v2/top-headlines';

const getNoticiasPorCategoria = async (categoria) => {
  const url = `${API_URL}?apiKey=${API_KEY}&category=${categoria}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.articles;
};

export { getNoticiasPorCategoria };