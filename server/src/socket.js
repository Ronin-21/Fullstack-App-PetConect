import { createServer } from "http";
import { Server } from "socket.io";
import app from "./app.js";
import { chatsHandler } from "./websockets/chatsHandler.js";
import { notificationsHandler } from "./websockets/notificationsHandler.js";

const server = createServer(app);
const io = new Server(server);
let usersConnected = [];

const onConnection = async (socket) => {
  console.log("Hola alguien se conecto al socket 👌👌👌");
  usersConnected.push({
    client: socket.id,
    username: socket.handshake.auth.username,
  });

  //------
  socket.on("disconnect", () => {
    console.log("an user has disconnected");
  });

  chatsHandler(io, socket);
  notificationsHandler(io, socket);
};

io.on("connection", onConnection);

export default server;
