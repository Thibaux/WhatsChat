import { Request, Response } from "express";
import { UserI, userModel } from "../Models/User";

export const saveUser = async ({
	username,
	password,
}: {
	username: string;
	password: string;
}) => {
	const user = new userModel({
		username,
		password,
	});

	if (await user.save()) null;

	return user;
};
