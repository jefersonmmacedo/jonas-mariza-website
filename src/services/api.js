import axios from 'axios';

const api = axios.create({
baseURL: 'https://api-suachave.onrender.com/'

//baseURL: 'http://localhost:3333/'
});

export default api;



