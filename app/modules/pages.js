import { socket } from "../app.js";
import * as lobbyItems from "./lobby.js";
const $pageContentCodeBlock = $("#main");

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
function clearHtml() {
	$pageContentCodeBlock.empty(); // clear images
}

export function lobbyCheck() {
	// als die al gejoined is joint hij dat weer anders naar
	joinLobbyContainer();
}

export function joinLobbyContainerHTML() {
	var h2 = document.createElement("h2");
	h2.id = "lobbyText";
	h2.className = "text-center";
	h2.textContent = "Join lobby!";
	$pageContentCodeBlock[0].appendChild(h2);
	// joinLobbyContainer div
	var joinLobbyContainer = document.createElement("div");
	joinLobbyContainer.id = "joinLobbyContainer";
	// container-sm div
	var containersm = document.createElement("div");
	containersm.className = "container-sm";
	// create input container name
	var inputgroupName = document.createElement("div");
	inputgroupName.className = "input-group mb-3";
	// create input name
	var inputName = document.createElement("input");
	inputName.className = "form-control";
	inputName.id = "name";
	inputName.placeholder = "name";
	// create input container name
	var inputgroupLobbyId = document.createElement("div");
	inputgroupLobbyId.className = "input-group mb-3";
	// create input name
	var inputLobbyId = document.createElement("input");
	inputLobbyId.className = "form-control";
	inputLobbyId.id = "id";
	inputLobbyId.type = "number";
	inputLobbyId.placeholder = "Lobby ID";
	// spanbefore lobby id
	var inputgroupLobbyIdSpan = document.createElement("span");
	inputgroupLobbyIdSpan.className = "input-group-text";
	inputgroupLobbyIdSpan.textContent = "#";
	// create input container join
	var inputgroupLobbyButton = document.createElement("div");
	inputgroupLobbyButton.className = "input-group mb-3";
	// create button join
	var joinButton = document.createElement("button");
	joinButton.className = "form-control btn btn-primary";
	joinButton.id = "join";
	joinButton.textContent = "Join!";

	inputgroupName.appendChild(inputName);
	inputgroupLobbyId.appendChild(inputgroupLobbyIdSpan);
	inputgroupLobbyId.appendChild(inputLobbyId);
	containersm.appendChild(inputgroupName);
	containersm.appendChild(inputgroupLobbyId);
	inputgroupLobbyButton.appendChild(joinButton);
	containersm.appendChild(inputgroupLobbyButton);
	joinLobbyContainer.appendChild(containersm);
	$pageContentCodeBlock[0].appendChild(joinLobbyContainer);
}
export function joinLobbyContainer() {
	clearHtml();
	// creat the h2 on top
	joinLobbyContainerHTML();
	lobbyItems.joinLobbyContainerFunctions();

	socket.on("lobbyChange", (lobby) => {
		lobbyPreGame();
	});
}

export function lobbyPreGame() {
	clearHtml();
	// surrounding div around lobbyPreGame
	var lobbyPreGame = document.createElement("div");
	lobbyPreGame.id = "lobbyPreGame";
	lobbyPreGame.className = "containter";
	// surrounding div for row
	var row = document.createElement("div");
	row.className = "row";

	// playerList Container
	var playerListContainer = document.createElement("div");
	playerListContainer.id = "playerListContainer";
	playerListContainer.className = "col";
	// playerList ul
	var playerList = document.createElement("ul");
	playerList.id = "playerList";
	playerList.className = "list-group";
	// list-group-item active li
	var playerListItem = document.createElement("li");
	playerListItem.textContent = "Players: ";
	playerListItem.className = "list-group-item active";
	//append them to the row
	playerList.appendChild(playerListItem);
	playerListContainer.appendChild(playerList);
	row.appendChild(playerListContainer);

	// message Container
	var messageContainer = document.createElement("div");
	messageContainer.className = "col-6";
	// message div
	var messageList = document.createElement("div");
	messageList.id = "msgs";
	messageList.className = "container";
	// row around textbox
	var rowTextBox = document.createElement("div");
	rowTextBox.className = "row";
	// message input
	var messageInput = document.createElement("input");
	messageInput.className = "form-control col-sm";
	messageInput.id = "msg";
	messageInput.placeholder = "Message";
	// message button
	var messageButton = document.createElement("button");
	messageButton.className = "btn btn-primary col-1";
	messageButton.id = "send";
	messageButton.textContent = "Send";
	// append them to the row
	rowTextBox.appendChild(messageInput);
	rowTextBox.appendChild(messageButton);
	messageList.appendChild(rowTextBox);
	messageContainer.appendChild(messageList);
	row.appendChild(messageContainer);

	// game list div
	var gameListDiv = document.createElement("div");
	gameListDiv.className = "col";
	// ready button
	var readyButton = document.createElement("button");
	readyButton.className = "btn btn-primary";
	readyButton.id = "ready";
	readyButton.textContent = "Ready!";
	// game list
	var gameList = document.createElement("div");
	gameList.className = "accordion";
	gameList.id = "gameList";
	// append them to the row
	gameListDiv.appendChild(readyButton);
	gameListDiv.appendChild(gameList);
	row.appendChild(gameListDiv);

	lobbyPreGame.appendChild(row);
	$pageContentCodeBlock[0].appendChild(lobbyPreGame);

	lobbyItems.gameInformation();
	lobbyItems.lobbyPreGameFunctions();
}

export function lobbyInGame() {}
export function informationPage() {
	clearHtml();
	var h2 = document.createElement("h2");
	h2.id = "lobbyText";
	h2.className = "text-center";
	h2.textContent = "informationPage";
	$pageContentCodeBlock[0].appendChild(h2);
}

export function homePage() {
	clearHtml();
	var h2 = document.createElement("h2");
	h2.id = "lobbyText";
	h2.className = "text-center";
	h2.textContent = "home pagina";
	$pageContentCodeBlock[0].appendChild(h2);
}
