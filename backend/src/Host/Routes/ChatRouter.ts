import express from 'express';
import { CreateChat, DeleteChat, GetChatsFromUser } from '../Handlers/Chat';
import { Authorize } from '../Middleware';

const chatRouter = express.Router();

chatRouter.get('/', Authorize, GetChatsFromUser);

chatRouter.post('/', Authorize, CreateChat);
chatRouter.delete('/:chatId', Authorize, DeleteChat);

export default chatRouter;
