import axios from 'axios';

export const fetchNews = () => {
  return axios.get('http://localhost:3000/news');
};