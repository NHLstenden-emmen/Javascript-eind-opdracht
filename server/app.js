const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server (httpServer, {
	cors: { origin: "*" },
});

io.on("connection", (socket) => {
	console.log(`client with id ${socket.id} connected.`);

	socket.on("joinLobby", ({lobbyID, username})  => {
		socket.name = username;
		socket.join(lobbyID);
		console.log(`User ${socket.name} with id ${socket.id} Joined ${lobbyID}`);
		io.in(lobbyID).emit("lobbyChange", lobbyID);
		io.in(lobbyID).emit("message", { 
			username: `${username}`,
			msg: " Joined!",
		});

		socket.on("message", msg => {
			io.in(lobbyID).emit("message", {
				username: `${username}`,
				msg: msg
			});
		});
	});

	socket.on("disconnect", () => {
		console.log(`User ${socket.name} with id ${socket.id} left.`);
	});

});

httpServer.listen(8080, () => console.log("listening on port 8080!"));
