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
	lobbyItems.playerlist();
	lobbyItems.chatFunctions();

	socket.on("startGame", (data) => {
		// gameName moet dan de naam krijgen van de game die word ge emit
		let gameNameForImport = `../../games/${data}/${data}.js`;
		let gameNameForCSS = `../games/${data}/${data}.css`;
		lobbyInGame(gameNameForImport, gameNameForCSS);
	});
}
export async function lobbyInGame(gameNameForImport, gameNameForCSS) {
	pagesHTML.lobbyInGameHTML();
	lobbyItems.playerlist();
	lobbyItems.chatFunctions();
	// memory should be changed with gameName so you can start other games
	let { startGame, score, endGame } = await import(gameNameForImport);
	// get the css of the game
	$("<link/>", { rel: "stylesheet", type: "text/css", href: gameNameForCSS }).appendTo("head");
	startGame();
	// update the score in score games
	setInterval(function () {
		console.log(score);
		if (endGame == true) {
			console.log("stopthe game");
			lobbyPreGame();
		}
	}, 2000);
}
export function informationPage() {
	pagesHTML.informationPageHTML();
}

export function homePage() {
	pagesHTML.homePageHTML();
}
