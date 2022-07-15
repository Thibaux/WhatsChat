import express, { Request, Response } from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const port = process.env.PORT;
const app = express();
const server = createServer(app);
const io = new Server(server, {
	cors: {
		origin: "http://localhost:3000",
		methods: ["GET", "POST"],
	},
	allowEIO3: true,
});

app.get("/", (req: Request, res: Response) => {
	res.send({ status: "ok" }).status(200);
});

io.on("connect", (socket) => {
	socket.on("hello", (message, callback) => {
		console.log("hellohellohellohellohello");
		const mssObj = {
			user: "userName",
			message: message,
		};

		io.to("mss1").emit("message", mssObj);

		callback();
	});
});

server.listen(port, () => console.log(`Server has started on port ${port}`));
