import express from 'express';
import { CreateChat } from '../Handlers/Chat/CreateChat';

const chatRouter = express.Router();

chatRouter.post('/', CreateChat);

export default chatRouter;
