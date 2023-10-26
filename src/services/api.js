import axios from 'axios';

const api = axios.create({
baseURL: 'https://suachave-api-private-e41301cb6190.herokuapp.com/'
//baseURL: 'http://localhost:3333/'
});

export default api;



