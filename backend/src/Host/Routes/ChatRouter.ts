import express from 'express';
import { CreateChat } from '../Handlers/Chat/CreateChat';
import { DeleteChat } from '../Handlers/Chat/DeleteChat';

const chatRouter = express.Router();

chatRouter.post('/', CreateChat);
chatRouter.delete('/:chatId', DeleteChat);

export default chatRouter;
