import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './Routes';
import { connectToDb } from '../Infrastructure/Database/ConnectToDb';
import { ErrorHandler, RouteNotFound } from './Middleware';

dotenv.config();

const app = express();
connectToDb();

app.set('port', process.env.PORT);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    cors({
        origin: '*',
    })
);

app.use((req, res, next) => {
    res.header('Content-Type', 'application/json');
    next();
});

app.get('/', (req: Request, res: Response) => {
    res.send({ status: 'ok' }).status(200);
});

app.use(router);

app.use(ErrorHandler);
app.use(RouteNotFound);

export default app;
