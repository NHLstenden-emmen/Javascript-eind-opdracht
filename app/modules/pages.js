import { socket } from "../app.js";
import * as lobbyItems from "./lobby.js";
import * as pagesHTML from "./pagesHTML.js";

export function selectActivePage() {
	var type = window.location.hash.substr(1);
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
	pagesHTML.lobbyPreGameHTML();

	lobbyItems.gameInformation();
	lobbyItems.lobbyPreGameFunctions();
}

export function lobbyInGame() {}
export function informationPage() {
	pagesHTML.informationPageHTML();
}

export function homePage() {
	pagesHTML.homePageHTML();
}
