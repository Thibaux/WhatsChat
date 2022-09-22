import axios from 'axios';
import { getAccessToken } from './getAccessToken';

export const backendApiInstance = () => {
    return axios.create({
        baseURL:
            process.env.REACT_APP_BACKEND_API_URL || 'http://localhost:8080',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });
};
