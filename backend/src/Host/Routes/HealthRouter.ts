import express from 'express';
import { GetHealthStatus } from '../Handlers/Health/GetHealthStatus';

const healthRouter = express.Router();

healthRouter.get('/', GetHealthStatus);

export default healthRouter;
