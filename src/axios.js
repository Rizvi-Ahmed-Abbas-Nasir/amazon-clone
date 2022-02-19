import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-f4f6a/us-central1/api' // The API (CLoud Function using Node.js)  
});

export default instance;