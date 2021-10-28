import { socket } from "../app.js";
import { lobbyInGame } from "./pages.js";
import * as pagesHTML from "./pagesHTML.js";
export function joinLobby() {}
export function createLobby() {}

export function gameInformation() {
	// loop trough games
	let result = {};
	$.getJSON("../games/memory/memory.json", function (data) {
		result.name = data.name;
		result.shortDesc = data.description.short;
		result.longDesc = data.description.long;
		result.gameType = data.gameType;
		result.minPlayers = data.players.min;
		result.maxPlayers = data.players.max;
		// loops trough all the rules
		let rules = {};
		for (let x in data.Rules) {
			rules[x] = data.Rules[x];
		}
		result.Rules = rules;
		// moet nog even naar gameSettings kijken
	})
		.done(function (data) {
			pagesHTML.seroundingDivAccordion(result.name, result.shortDesc);
			pagesHTML.seroundingDivAccordion(result.name, result.shortDesc);
		})
		.fail(function () {
			result.name = "name";
			result.shortDesc = "short description";
			result.longDesc = "long description";
			result.gameType = "game type";
			result.minPlayers = "min players";
			result.maxPlayers = "max players";
			result.Rules = "Rules";
			result.gameSettings = "gameSettings";
		});
}

export function joinLobbyContainerFunctions() {
	$("#join").on("click", () => {
		let lobbyID = $("#id").val();
		let username = $("#name").val();
		joinLobby(lobbyID, username);
	});

	function joinLobby(lobbyID, username) {
		socket.emit("joinLobby", { lobbyID, username });
	}
}

export function lobbyPreGameFunctions() {
	$("#send").on("click", () => {
		let msg = $("#msg").val();
		socket.emit("message", msg);
		$("#msg").val("");
	});

	$("#ready").on("click", () => {
		socket.emit("toggleReady");
	});

	socket.on("message", (data) => {
		$("#msgs").prepend(`<p>${sanitizeString(data.username)}: ${sanitizeString(data.msg)}</p>`);
	});

	const sanitizeString = (str) => {
		str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "");
		return str.trim();
	};

	socket.on("playerList", (data) => {
		$("#playerList").html('<li class="list-group-item active">Players: </li>');
		data.lobby.players.forEach((player) => {
			if (player.ready) {
				$("#playerList").append(`<li class="list-group-item">${player.name}: Ready!</li>`);
			} else {
				$("#playerList").append(`<li class="list-group-item">${player.name}: Not ready</li>`);
			}
		});
	});
	socket.on("startGame"), (selectedGame) => {
		lobbyInGame(selectedGame);
	}
}
