import axios from 'axios';

const api = axios.create({
    baseURL: '/_api/v1/'
});

export default api;