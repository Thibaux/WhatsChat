import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { connectToDb } from '../Infrastructure/Database/Connect';
import router from './Routes';

dotenv.config();

const app = express();

(async function () {
  await connectToDb();
})();

app.set('port', process.env.PORT);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header('Content-Type', 'application/json');
  next();
});

app.get('/', (req: Request, res: Response) => {
  res.send({ status: 'ok' }).status(200);
});

app.use(router);

export default app;
