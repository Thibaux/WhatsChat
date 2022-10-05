import express from 'express';
import userRouter from './UserRouter';
import chatRouter from './ChatRouter';
import messagesRouter from './MessagesRouter';
import healthRouter from './HealthRouter';

const router = express.Router();

router.use('/users', userRouter);
router.use('/chat', chatRouter);
router.use('/messages', messagesRouter);
router.use('/health', healthRouter);

export default router;
