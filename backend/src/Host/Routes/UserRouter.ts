import express from 'express';
import { CreateUser, DeleteUser, GetAllChatsOfOneUser, GetAllUsers } from '../Handlers/User';

const userRouter = express.Router();

userRouter.get('/', GetAllUsers);
userRouter.post('/login', LoginUser);
userRouter.post('/create', CreateUser);

userRouter.delete('/:userId', DeleteUser);

userRouter.get('/:username/chats', GetAllChatsOfOneUser);

export default userRouter;
