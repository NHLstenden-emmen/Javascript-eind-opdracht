import { socket } from "../app.js";
export function joinLobby() {}
export function createLobby() {}

export function gameInformation() {
	const $gameList = $("#gameList");
	// loop trough games
	var result = {};
	$.getJSON("../games/memory/memory.json", function (data) {
		result.name = data.name;
		result.shortDesc = data.description.short;
		result.longDesc = data.description.long;
		result.gameType = data.gameType;
		result.minPlayers = data.players.min;
		result.maxPlayers = data.players.max;
		// loops trough all the rules
		var rules = {};
		for (let x in data.Rules) {
			rules[x] = data.Rules[x];
		}
		result.Rules = rules;
		// moet nog even naar gameSettings kijken
	}).fail(function () {
		result.name = "name";
		result.shortDesc = "short description";
		result.longDesc = "long description";
		result.gameType = "game type";
		result.minPlayers = "min players";
		result.maxPlayers = "max players";
		result.Rules = "Rules";
		result.gameSettings = "gameSettings";
	});

	console.log(result);
	console.log(result.name);

	var karel = seroundingDivAccordion(result.name, result.shortDesc);
	$gameList[0].appendChild(karel);
}

function seroundingDivAccordion(title, desc) {
	console.log(title);
	var h2 = document.createElement("h2");
	h2.id = "lobbyText";
	h2.className = "text-center";
	h2.textContent = title;
	// js hier van maken
	// <div class="accordion-item">
	// 	<h2 class="accordion-header" id="headingOne">
	// 		<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
	// 		Accordion Item #1
	// 		</button>
	// 	</h2>
	// 	<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
	// 		<div class="accordion-body">
	// 		<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
	// 		</div>
	// 	</div>
	// </div>
	return h2;
}

export function joinLobbyContainerFunctions() {
	var lobby;

	$("#join").on("click", () => {
		var lobbyID = $("#id").val();
		var username = $("#name").val();
		joinLobby(lobbyID, username);
	});

	function joinLobby(lobbyID, username) {
		socket.emit("joinLobby", { lobbyID, username });
	}
}

export function lobbyPreGameFunctions() {
	$("#send").on("click", () => {
		var msg = $("#msg").val();
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
}
