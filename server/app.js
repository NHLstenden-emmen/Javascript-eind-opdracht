const fs = require("fs");

const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
	cors: { origin: "*" },
});

// Port voor socket server. 
// 8080 In testomgeving, 3000 Op server (nginx reverse proxy past poort aan).
const port = process.env.PORT || 8080;

class Lobby {
	constructor(id) {
		this.id = id;

		this.players = [];
		this.game = null;
	}

	removePlayer(remPlayer) {
		this.players = this.players.filter((player) => player !== remPlayer);
	}

	getPlayer(id) {
		return this.players.find((player) => player.id == id);
	}

	addPlayer(player) {
		this.players.push(player);
	}

	addCreatePlayer(playerID, name) {
		this.addPlayer(new Player(playerID, name));
	}
}

class Player {
	constructor(id, name) {
		this.id = id;
		this.name = name;

		this.ready = false;
	}

	toggleReady() {
		this.ready = !this.ready;
	}
}

// Lijst met games.
let games = [];
// Voeg alle games in de map games toe aan de lijst. Voert Asynchroon uit.
fs.readdir("../games", (err, files) => {
	files.forEach((file) => {
		games.push(file);
	});
});

// Dictionary met lobbies.
const lobbies = {};

//Client opent verbinding met de socket.
io.on("connection", (socket) => {
	console.log(`client with id ${socket.id} connected.`);

	socket.on("joinLobby", ({lobbyID, username}) => {
		lobbyID = sanitizeString(lobbyID);
		username = sanitizeString(username);
		socket.join(lobbyID);
		let lobby = lobbies[lobbyID];
		if (!lobby) {
			//Lobby bestaat nog niet, maak een nieuwe aan.
			lobby = new Lobby(lobbyID);
			lobbies[lobbyID] = lobby;
		}
		// Maak nieuwe palyer aan, en 
		let player = new Player(socket.id, username);
		lobby.players.push(player);
		console.log(`User ${username} with id ${socket.id} Joined ${lobbyID}`);
		// Laat de client weten dat de lobby succesvol gejoined is.
		io.to(socket.id).emit("lobbyChange", lobbyID);

		// Verstuur bericht dat de player gejoined is
		io.in(lobbyID).emit("message", {
			username: "Lobby",
			msg: `${username} Joined!`,
		});
		// Verstuur alle clients in de lobby dat er een nieuwe player gejoined is.
		updateLobby(lobbyID);

		// Verstuur het binnenkomende bericht naar de lobby.
		socket.on("message", (msg) => {
			io.in(lobbyID).emit("message", {
				username: username,
				msg: sanitizeString(msg),
			});
		});

		socket.on("gameEnd", (msg) => {
			io.in(lobbyID).emit("message", {
				username: "Game: ",
				msg: sanitizeString(msg),
			});
		});

		// Verstuur lijst met games.
		io.to(socket.id).emit("gameList", games);

		// Ready / unready de player, verstuur dit naar players in de lobby.
		socket.on("toggleReady", () => {
			player.toggleReady();
			updateLobby(lobbyID);
			let lobbyReady = true;
			lobby.players.forEach(player => {
				if (!player.ready) { lobbyReady = false; }
			})
			if (lobbyReady) {
				console.log("Game starting in " + lobbyID)
				// Tmp altijd memory selecten, die is af.
				// let selectedGame = "fourInARow";
				let selectedGame = "memory";
				io.in(lobbyID).emit("startGame", selectedGame)
			}
		});

		// Gebruiker disconnect. Sluit het browsertab, of drukt op een (nieuwe feature?) disconnect knop.
		socket.on("disconnect", () => {
			console.log(`User ${username} with id ${socket.id} left.`);
			lobby.removePlayer(player)
			updateLobby(lobbyID);
			if (lobby.players.length === 0) {
				delete lobbies[lobbyID];
			}
		});
	});

});

const updateLobby = (lobbyID) => {
	io.in(lobbyID).emit("playerList", {
		lobby: lobbies[lobbyID],
		lobbyID: lobbyID
	});
};

const sanitizeString = (str) => {
	str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "");
	return str.trim();
};

// Start de socket server.
httpServer.listen(port, () => console.log(`listening on port ${port}!`));