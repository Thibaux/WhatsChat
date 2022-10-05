import axios from 'axios';
import { getAccessToken } from './getAccessToken';
import { BASEURL_API } from './Constants';

export const backendApiInstance = () => {
    return axios.create({
        baseURL: BASEURL_API,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });
};
