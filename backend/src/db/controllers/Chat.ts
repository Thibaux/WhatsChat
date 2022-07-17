import { Request, Response } from "express";
import { MongoUser } from "../interfaces";

export const saveChat = async ({
	users,
	chatTitle,
}: {
	users: MongoUser[];
	chatTitle: string;
}) => {
	const user = new chatModel({ chatTitle: chatTitle, users: users });

	if (await user.save()) null;

	return user;
};
