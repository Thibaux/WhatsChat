import mongoose, { Schema } from "mongoose";

type properyType = {
	type: string;
	required: [boolean, string];
	unique: [boolean, string];
};

export interface UserI extends Document {
	username: properyType;
	password: properyType;
}

export const userSchema: Schema = new mongoose.Schema<UserI>({
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
