import express from 'express';
import { Authorize } from '../Middleware/Authentication/Authorize';
import { GetAllMessagesOfChat } from '../Handlers/Message/GetAllMessagesOfChat';
import { PostMessageToChat } from '../Handlers/Message/PostMessageToChat';

const messagesRouter = express.Router();

messagesRouter.get('/:chatId', Authorize, GetAllMessagesOfChat);
messagesRouter.post('/', Authorize, PostMessageToChat);

export default messagesRouter;
