import axios from 'axios';
import environment from 'src/environment';

export const http = axios.create({
    baseURL: environment.API_URL
});


