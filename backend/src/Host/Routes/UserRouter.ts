import express from 'express';
import { createUser } from '../Handlers/User/CreateUser';
import { GetAllChatsOfOneUser } from '../Handlers/User/GetAllChatsOfOneUser';
const userRouter = express.Router();

userRouter.post('/', createUser);
userRouter.get('/:username/chats', GetAllChatsOfOneUser);

export default userRouter;
