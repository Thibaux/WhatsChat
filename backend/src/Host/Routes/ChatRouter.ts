import express from 'express';
import { CreateChat, DeleteChat, GetChatsFromUser } from '../Handlers/Chat';

const chatRouter = express.Router();

chatRouter.get('/', GetChatsFromUser);

chatRouter.post('/', CreateChat);
chatRouter.delete('/:chatId', DeleteChat);

export default chatRouter;
