import mongoose, { Schema } from "mongoose";
import { ChatSchema } from "../interfaces";

export const chatSchema: Schema = new mongoose.Schema<ChatSchema>({
	chatTitle: {
		type: String,
		required: [true, "Please provide an chatTitle!"],
	},
	users: {
		type: Array,
		required: [true, "Please provide users!"],
	},
});

export const chatModel = mongoose.model("Chat", chatSchema);
