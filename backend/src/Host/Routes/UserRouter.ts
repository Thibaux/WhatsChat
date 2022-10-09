import express from 'express';
import { Authorize } from '../Middleware';
import { CreateUser, DeleteUser, GetAllUsers, LoginUser } from '../Handlers/User';

const userRouter = express.Router();

userRouter.get('/', Authorize, GetAllUsers);
userRouter.post('/login', LoginUser);
userRouter.post('/create', CreateUser);
userRouter.delete('/:userId', Authorize, DeleteUser);

export default userRouter;
