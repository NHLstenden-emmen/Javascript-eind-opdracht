const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server (httpServer, {
	cors: { origin: "*" },
});

class Lobby {
	constructor(id) {
		this.id = id;

		this.players = [];
		this.game = null;
	}

	removePlayer(id) {
		this.players = this.players.filter(player => player.id !== id);
	}
}

class Player {
	constructor(id, name) {
		this.id = id;
		this.name = name;

		this.ready = false;
	}
}

const lobbies = {};

io.on("connection", socket => {
	console.log(`client with id ${socket.id} connected.`);

	socket.on("joinLobby", ({lobbyID, username})  => {
		addLobby(lobbyID);
		addPlayerToLobby(lobbyID, socket.id, username)
		socket.name = sanitizeString(username);
		socket.lobby = lobbyID;
		socket.join(lobbyID);
		console.log(`User ${socket.name} with id ${socket.id} Joined ${lobbyID}`);
		io.in(lobbyID).emit("lobbyChange", lobbyID);
		io.in(lobbyID).emit("message", { 
			username: socket.name,
			msg: " Joined!",
		});

		socket.on("message", msg => {
			io.in(lobbyID).emit("message", {
				username: socket.name,
				msg: sanitizeString(msg)
			});
		});
	});

	socket.on("disconnect", () => {
		removePlayerFromLobby(socket.lobby, socket.id);
		console.log(`User ${socket.name} with id ${socket.id} left.`);
	});

});

const sanitizeString = (str) => {
	str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "");
	return str.trim();
}

const addLobby = (lobbyID) => {
	const lobby = lobbies[lobbyID];
	if (lobby) { return; }

	lobbies[lobbyID] = new Lobby(lobbyID);
}

const addPlayerToLobby = (lobbyID, playerID, name) => {
	const lobby = lobbies[lobbyID];
	if (!lobby) { return; }

	lobby.players.push(new Player(playerID, name));
	lobbies[lobbyID] = lobby;
	console.log(lobbies);
}

const removePlayerFromLobby = (lobbyID, playerID) => {
	const lobby = lobbies[lobbyID];
	if (!lobby) { return; }

	lobbies[lobbyID].removePlayer(playerID);

	if (lobby.players.length < 1) {
		lobbies[lobbyID] = null;
		return;
	}
}

httpServer.listen(8080, () => console.log("listening on port 8080!"));
