import dotenv from "dotenv";
import express from "express";
import http from "http";
import socket from "socket.io";
dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socket(server);

const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});
// io.on("connection", (socket) => {
//   console.log("a user connected");
// });
server.listen(PORT, function () {
  console.log(`listening on localhost:${PORT}`);
});
