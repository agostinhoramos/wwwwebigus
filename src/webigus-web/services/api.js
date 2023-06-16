import axios from 'axios';

// TODO
// https://www.npmjs.com/package/axios
const api = axios.create({
    baseURL: 'https://webigus.com/_api/v1/'
});

export default api;