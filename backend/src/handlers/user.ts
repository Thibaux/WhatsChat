import { NextFunction, Request, Response } from "express";
import { userModel } from "../db/models/User";
import { hashPassword } from "../utils/hashPassword";

export const createUser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		if (!req.body.username || !req.body.password) {
			res.send({ error: "Username or password not provided!" });
		}

		const hash = await hashPassword(req.body.password);

		const user = new userModel({
			username: req.body.username,
			password: hash,
		});

		const result = await user.save();

		if (!result) {
			res.status(500).send({ message: "Error creating user" });
		}

		res.status(201).send({ message: "User created!", newUserId: user._id });
	} catch (error) {
		next(error);
	}
};
