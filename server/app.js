const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server (httpServer, {
	cors: { origin: "*" },
});

var connected_users = [];

class Lobby {
	constructor(id) {
		this.id = id;
		this.players = [];
	}
}

class Player {
	constructor(id, tag) {
		this.id = id;
		this.tag = tag;
		this.isReady = false;
	}
}

io.on("connection", (socket) => {
	console.log(`client with id ${socket.id} connected.`);

	socket.on("joinLobby", ({lobbyID, username})  => {
		socket.name = username;
		socket.join(lobbyID);
		console.log(`User ${socket.name} with id ${socket.id} Joined ${lobbyID}`);
		io.in(lobbyID).emit("lobbyChange", lobbyID);
		io.in(lobbyID).emit("message", `${socket.name} joined!`);

		socket.on("message", msg => {
			io.in(lobbyID).emit("message", msg, socket.name);
		});
	});

	socket.on("disconnect", () => {
		console.log(`User ${socket.name} with id ${socket.id} left.`);
	});

});

httpServer.listen(8080, () => console.log("listening on port 8080!"));
