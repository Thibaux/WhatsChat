import express from 'express';
import {
    CreateUser,
    DeleteUser,
    GetAllUsers,
    LoginUser,
} from '../Handlers/User';

const userRouter = express.Router();

userRouter.get('/', GetAllUsers);
userRouter.post('/login', LoginUser);
userRouter.post('/create', CreateUser);
userRouter.delete('/:userId', DeleteUser);

export default userRouter;
