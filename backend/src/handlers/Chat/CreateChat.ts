import express, { Request, Response, NextFunction } from "express";
import { saveChat } from "../../db/controllers/Chat";
import { getUserIdByName } from "./../../utils/GetUserIdByName";

export const createChat = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	let chatTitle = "";

	try {
		if (!req.body.username) res.send({ error: "Username not provided!" });

		const id = req.headers.id;

		const creatorOfchat = getUsernameById(id)
		const userId = await getUserIdByName(req.body.username);
		
		if (!req.body.chatTitle) chatTitle = `${req.body.username} + ${req.body.username}`;

		const user = await saveChat({
			users: users
			chatTitle,
		});

		res.status(200).send({ userId: userId });
	} catch (error) {
		next(error);
	}
};
