import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { connectToDb } from "./db/Connect";
import { createUser } from "./handlers/User/CreateUser";
import { createChat } from "./handlers/Chat/CreateChat";

const app = express();
connectToDb();

app.set("port", process.env.PORT);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
	res.send({ status: "ok" }).status(200);
});

// user
app.post(
	"/create-user",
	async (req, res, next) => await createUser(req, res, next)
);

// chat
app.post(
	"/create-chat",
	async (req, res, next) => await createChat(req, res, next)
);

export default app;
