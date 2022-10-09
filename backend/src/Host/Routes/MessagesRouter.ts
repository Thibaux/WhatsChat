import express from 'express';
import { Authorize } from '../Middleware';
import { GetAllMessagesOfChat, PostMessageToChat } from '../Handlers/Message';

const messagesRouter = express.Router();

messagesRouter.get('/:chatId', Authorize, GetAllMessagesOfChat);
messagesRouter.post('/', Authorize, PostMessageToChat);

export default messagesRouter;
