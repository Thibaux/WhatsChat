import { Types } from "mongoose";
import { userModel } from "./../db/Models/User";

export const getUserIdByName = async (
	username: string
): Promise<Types.ObjectId> => {
	const user = await userModel.find({ username: username });

	return user[0]._id;
};
