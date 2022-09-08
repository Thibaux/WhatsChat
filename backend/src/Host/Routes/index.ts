import express from 'express';
import userRouter from './UserRouter';
import chatRouter from './ChatRouter';
import messagesRouter from './MessagesRouter';

const router = express.Router();

router.use('/users', userRouter);
router.use('/chat', chatRouter);
router.use('/messages', messagesRouter);

export default router;
