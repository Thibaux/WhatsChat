const express = require('express');
import userRouter from './UserRouter';
import chatRouter from './ChatRouter';

const router = express.Router();

router.use('/users', userRouter);
router.use('/chat', chatRouter);

export default router;
