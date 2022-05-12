import axios from 'axios';

const apiService = axios.create({
  baseURL: 'localhost:8000/api',
});

export default apiService;
