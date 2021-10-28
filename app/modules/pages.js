import { socket } from "../app.js";
import * as lobbyItems from "./lobby.js";
import * as pagesHTML from "./pagesHTML.js";

let isInLobby = false;

export function selectActivePage() {
	let type = window.location.hash.substr(1);
	if (type == "lobby") {
		lobbyCheck();
	} else if (type == "information") {
		informationPage();
	} else {
		homePage();
	}
}

export function lobbyCheck() {
	// als die al gejoined is joint hij dat weer anders naar
	joinLobbyContainer();
}

export function joinLobbyContainer() {
	// creat the h2 on top
	pagesHTML.joinLobbyContainerHTML();
	lobbyItems.joinLobbyContainerFunctions();

	socket.on("lobbyChange", (lobby) => {
		lobbyPreGame();
	});
}

export function lobbyPreGame() {
	if (isInLobby) {
		return;
	}
	isInLobby = true;

	pagesHTML.lobbyPreGameHTML();

	lobbyItems.gameInformation();
	lobbyItems.lobbyPreGameFunctions();
}

export function lobbyInGame() {
	// import { startGame, score as memoryScore, endGame as memoryEndGame } from "../games/memory/memory.js";
	// // get the css of the game
	// $("<link/>", { rel: "stylesheet", type: "text/css", href: "../games/memory/memory.css" }).appendTo("head");
	// startGame();
	// // update the score in score games
	// setInterval(function () {
	// 	console.log(memoryScore);
	// 	if (memoryEndGame == true) {
	// 		console.log("stopthe game");
	// 	}
	// }, 2000);
}
export function informationPage() {
	pagesHTML.informationPageHTML();
}

export function homePage() {
	pagesHTML.homePageHTML();
}
