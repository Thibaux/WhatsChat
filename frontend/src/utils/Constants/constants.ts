import { io } from 'socket.io-client';

export const BASEURL_API = process.env.REACT_APP_BACKEND_API_URL;
export const SOCKET = io(`${BASEURL_API}`, { transports: ['websocket'] });
