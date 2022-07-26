import express from 'express';
import { createChat } from '../Handlers/Chat/CreateChat';

const chatRouter = express.Router();

chatRouter.post('/:userId', createChat);

export default chatRouter;
