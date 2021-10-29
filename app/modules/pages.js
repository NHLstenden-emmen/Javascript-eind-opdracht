import { socket } from "../app.js";
import * as lobbyItems from "./lobby.js";
import * as pagesHTML from "./pagesHTML.js";

var isInLobby = null;

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
	// als die al gejoind is rejoined hij inplaats van dat hij vraagt om een lobby

	if (isInLobby !== null) {
		socket.emit("rejoinLobby", { isInLobby });
	} else {
		joinLobbyContainer();
	}
}

export function joinLobbyContainer() {
	// creat the h2 on top
	pagesHTML.joinLobbyContainerHTML();
	lobbyItems.joinLobbyContainerFunctions();

	socket.on("lobbyChange", (lobby) => {
		isInLobby = lobby;
		lobbyPreGame();
	});
}

export function lobbyPreGame() {
	pagesHTML.lobbyPreGameHTML();
	lobbyItems.gameInformation();
	lobbyItems.lobbyPreGameFunctions();
	lobbyItems.playerlist();
	lobbyItems.chatFunctions();
}
export async function lobbyInGame(gameNameForImport, gameNameForCSS) {
	pagesHTML.lobbyInGameHTML();

	lobbyItems.playerlist();
	lobbyItems.chatFunctions();

	// memory should be changed with gameName so you can start other games
	let { startGame, getScore, getEndgame } = await import(gameNameForImport);
	// get the css of the game
	$("<link/>", { rel: "stylesheet", type: "text/css", href: gameNameForCSS }).appendTo("head");
	startGame();
	// update the score in score games
	setInterval(function () {
		let score = getScore();
		let endgame = getEndgame();
		console.log(score);
		console.log(endgame);
		if (endgame == true) {
			// stop the game and share the score while going back to the pre lobby
			socket.emit("gameEnd", score);
			return lobbyPreGame();
		}
	}, 2000);
}
export function informationPage() {
	pagesHTML.informationPageHTML();
}

export function homePage() {
	pagesHTML.homePageHTML();
}
