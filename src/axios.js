import axios from 'axios';

const instance = axios.create({
    baseURL: '....' // The API (CLoud Function using Node.js)  
});

export default instance;