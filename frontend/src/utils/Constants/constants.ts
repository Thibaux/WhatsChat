import { io } from 'socket.io-client';

export const BASEURL_API =
    process.env.REACT_APP_BACKEND_API_URL || 'http://localhost:8080';
export const SOCKET = io(`${BASEURL_API}`, { transports: ['websocket'] });
