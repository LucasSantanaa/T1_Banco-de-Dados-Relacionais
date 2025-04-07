import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000' // altere se necessário
});

export default api;
