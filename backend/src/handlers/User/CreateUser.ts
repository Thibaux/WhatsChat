import { NextFunction, Request, Response } from "express";
import { saveUser } from "../../db/controllers/User";
import { hashPassword } from "../../utils/HashPassword";

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

		const user = await saveUser({
			username: req.body.username,
			password: hash,
		});

		res.status(201).send({ message: "User created!", newUserId: user._id });
	} catch (error) {
		next(error);
	}
};
