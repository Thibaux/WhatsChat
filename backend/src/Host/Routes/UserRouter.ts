import express from 'express';
import { CreateUser } from '../Handlers/User/CreateUser';
import { GetAllChatsOfOneUser } from '../Handlers/User/GetAllChatsOfOneUser';
import { GetAllUsers } from '../Handlers/User/GetAllUsers';

const userRouter = express.Router();

userRouter.get('/', GetAllUsers);
userRouter.post('/', CreateUser);

userRouter.get('/:username/chats', GetAllChatsOfOneUser);

export default userRouter;
