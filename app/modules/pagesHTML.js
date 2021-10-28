const $pageContentCodeBlock = $("#main");
var accordionNumber = 1;

function clearHtml() {
	$pageContentCodeBlock.empty(); // clear images
}
export function joinLobbyContainerHTML() {
	clearHtml();
	let h2 = document.createElement("h2");
	h2.id = "lobbyText";
	h2.className = "text-center";
	h2.textContent = "Join lobby!";
	$pageContentCodeBlock[0].appendChild(h2);
	// joinLobbyContainer div
	let joinLobbyContainer = document.createElement("div");
	joinLobbyContainer.id = "joinLobbyContainer";
	// container-sm div
	let containersm = document.createElement("div");
	containersm.className = "container-sm";
	// create input container name
	let inputgroupName = document.createElement("div");
	inputgroupName.className = "input-group mb-3";
	// create input name
	let inputName = document.createElement("input");
	inputName.className = "form-control";
	inputName.id = "name";
	inputName.placeholder = "name";
	// create input container name
	let inputgroupLobbyId = document.createElement("div");
	inputgroupLobbyId.className = "input-group mb-3";
	// create input name
	let inputLobbyId = document.createElement("input");
	inputLobbyId.className = "form-control";
	inputLobbyId.id = "id";
	inputLobbyId.type = "number";
	inputLobbyId.placeholder = "Lobby ID";
	// spanbefore lobby id
	let inputgroupLobbyIdSpan = document.createElement("span");
	inputgroupLobbyIdSpan.className = "input-group-text";
	inputgroupLobbyIdSpan.textContent = "#";
	// create input container join
	let inputgroupLobbyButton = document.createElement("div");
	inputgroupLobbyButton.className = "input-group mb-3";
	// create button join
	let joinButton = document.createElement("button");
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
export function lobbyPreGameHTML() {
	clearHtml();
	// surrounding div around lobbyPreGame
	let lobbyPreGame = document.createElement("div");
	lobbyPreGame.id = "lobbyPreGame";
	lobbyPreGame.className = "containter";
	// surrounding div for row
	let row = document.createElement("div");
	row.className = "row";

	// playerList Container
	let playerListContainer = document.createElement("div");
	playerListContainer.id = "playerListContainer";
	playerListContainer.className = "col";
	// playerList ul
	let playerList = document.createElement("ul");
	playerList.id = "playerList";
	playerList.className = "list-group";
	// list-group-item active li
	let playerListItem = document.createElement("li");
	playerListItem.textContent = "Players: ";
	playerListItem.className = "list-group-item active";
	//append them to the row
	playerList.appendChild(playerListItem);
	playerListContainer.appendChild(playerList);
	row.appendChild(playerListContainer);

	// message Container
	let messageContainer = document.createElement("div");
	messageContainer.className = "col-6";
	// message div
	let messageList = document.createElement("div");
	messageList.id = "msgs";
	messageList.className = "container";
	// row around textbox
	let rowTextBox = document.createElement("div");
	rowTextBox.className = "row";
	// message input
	let messageInput = document.createElement("input");
	messageInput.className = "form-control col-sm";
	messageInput.id = "msg";
	messageInput.placeholder = "Message";
	// message button
	let messageButton = document.createElement("button");
	messageButton.className = "btn btn-primary col-2";
	messageButton.id = "send";
	messageButton.textContent = "Send";
	// append them to the row
	rowTextBox.appendChild(messageInput);
	rowTextBox.appendChild(messageButton);
	messageList.appendChild(rowTextBox);
	messageContainer.appendChild(messageList);
	row.appendChild(messageContainer);

	// game list div
	let gameListDiv = document.createElement("div");
	gameListDiv.className = "col";
	// ready button
	let readyButton = document.createElement("button");
	readyButton.className = "btn btn-primary";
	readyButton.id = "ready";
	readyButton.textContent = "Ready!";
	// game list
	let gameList = document.createElement("div");
	gameList.className = "accordion";
	gameList.id = "gameList";
	// append them to the row
	gameListDiv.appendChild(readyButton);
	gameListDiv.appendChild(gameList);
	row.appendChild(gameListDiv);

	lobbyPreGame.appendChild(row);
	$pageContentCodeBlock[0].appendChild(lobbyPreGame);
}
export function informationPageHTML() {
	clearHtml();
	let h2 = document.createElement("h2");
	h2.id = "lobbyText";
	h2.className = "text-center";
	h2.textContent = "informationPage";
	$pageContentCodeBlock[0].appendChild(h2);
}
export function lobbyInGameHTML() {
	clearHtml();
	let gameBlock = document.createElement("div");
	gameBlock.id = "game";
	gameBlock.className = "game";
	$pageContentCodeBlock[0].appendChild(gameBlock);
}
export function homePageHTML() {
	clearHtml();
	let h2 = document.createElement("h2");
	h2.id = "lobbyText";
	h2.className = "text-center";
	h2.textContent = "HOME PAGE";
	$pageContentCodeBlock[0].appendChild(h2);
}

export function seroundingDivAccordion(title, desc) {
	const $gameList = $("#gameList");
	//increase accordionNumber
	accordionNumber++;
	// accordion Item list
	let accordionItem = document.createElement("div");
	accordionItem.className = "accordion-item";
	// accordion header
	let headerH2 = document.createElement("h2");
	headerH2.id = "heading" + accordionNumber;
	headerH2.className = "accordion-header";
	// accordion header button
	let headerButton = document.createElement("button");
	headerButton.id = "heading" + accordionNumber;
	headerButton.type = "button";
	headerButton.className = "accordion-button collapsed";
	headerButton.setAttribute("data-bs-target", "#collapse" + accordionNumber);
	headerButton.setAttribute("data-bs-toggle", "collapse");
	headerButton.setAttribute("aria-expanded", "true");
	headerButton.setAttribute("aria-controls", "collapse" + accordionNumber);
	headerButton.textContent = title;
	// accordion-collapse body
	let accordionCollapseBody = document.createElement("div");
	accordionCollapseBody.id = "collapse" + accordionNumber;
	accordionCollapseBody.className = "accordion-collapse collapse";
	accordionCollapseBody.setAttribute("aria-labelledby", "heading" + accordionNumber);
	accordionCollapseBody.setAttribute("data-bs-parent", "accordionExample");
	// accordion-collapse inner div for body
	let accordionBody = document.createElement("div");
	accordionBody.className = "accordion-body";
	// accordion body content
	let accordionBodyP = document.createElement("p");
	accordionBodyP.textContent = desc;
	// head
	headerH2.appendChild(headerButton);
	accordionItem.appendChild(headerH2);
	// body
	accordionBody.appendChild(accordionBodyP);
	accordionCollapseBody.appendChild(accordionBody);
	accordionItem.appendChild(accordionCollapseBody);
	$gameList[0].appendChild(accordionItem);
}
