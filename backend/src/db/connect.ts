import mongoose from "mongoose";

export const connectToDb = async () => {
	try {
		const result = await mongoose.connect(process.env.DB_URI, {
			user: process.env.DB_USER,
			pass: process.env.DB_PASSWORD,
		});

		if (result) {
			console.log("Succefully connected to DB!");
		}
	} catch (err) {
		console.log(err);
	}
};
