import express from 'express';
import userRouter from './UserRouter';
import chatRouter from './ChatRouter';
import messagesRouter from './MessagesRouter';
import healthRouter from './HealthRouter';

const router = express.Router();

router.use('/', healthRouter);
router.use('/health', healthRouter);
router.use('/users', userRouter);
router.use('/chat', chatRouter);
router.use('/messages', messagesRouter);

export default router;
