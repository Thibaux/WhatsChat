import express from 'express';
const chatRouter = express.Router();

import { createChat } from '../Handlers/Chat/CreateChat';

chatRouter.post('/:userId', createChat);

export default chatRouter;
