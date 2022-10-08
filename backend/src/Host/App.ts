import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { createServer } from 'http';
import bodyParser from 'body-parser';
import router from './Routes';
import { connectToDb } from '../Infrastructure/Database/ConnectToDb';
import { ErrorHandler, RouteNotFound, UnexpectedErrorsHandler } from './Middleware';
import { connectWebSocket } from '../Infrastructure/Socket/connectWebSocket';

dotenv.config();

const app = express();
const completeServer = createServer(app);
connectToDb();

app.set('port', process.env.PORT);
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    bodyParser.json()(req, res, (err) => {
        if (err) {
            return res.sendStatus(400);
        }
        next();
    });
});

app.use(
    cors({
        origin: '*',
    })
);

app.use((req, res, next) => {
    res.header('Content-Type', 'application/json');
    next();
});

app.use(UnexpectedErrorsHandler);
app.use(router);
app.use(ErrorHandler);
app.use(RouteNotFound);

connectWebSocket(completeServer);

export default completeServer;
