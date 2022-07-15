"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const port = process.env.PORT;
const app = (0, express_1.default)();
const server = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
    allowEIO3: true,
});
app.get("/", (req, res) => {
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
//# sourceMappingURL=index.js.map