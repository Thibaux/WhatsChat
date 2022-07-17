import mongoose, { Schema } from "mongoose";
import { UserSchema } from "../interfaces";

export const userSchema: Schema = new mongoose.Schema<UserSchema>({
	username: {
		type: String,
		required: [true, "Please provide an username!"],
		unique: [true, "username Exist"],
	},
	password: {
		type: String,
		required: [true, "Please provide a password!"],
		unique: false,
	},
});

export const userModel = mongoose.model("User", userSchema);
