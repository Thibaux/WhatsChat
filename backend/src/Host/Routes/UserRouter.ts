import express from 'express';
import { GetAllUsers } from '../Handlers/User/GetAllUsers';
import { CreateUser, DeleteUser, GetAllChatsOfOneUser } from '../Handlers/User';

const userRouter = express.Router();

userRouter.get('/', GetAllUsers);
userRouter.post('/', CreateUser);

userRouter.delete('/:userId', DeleteUser);

userRouter.get('/:username/chats', GetAllChatsOfOneUser);

export default userRouter;
