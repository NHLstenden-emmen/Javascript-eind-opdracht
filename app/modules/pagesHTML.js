const $pageContentCodeBlock = $("#main");

function clearHtml() {
	$pageContentCodeBlock.empty(); // clear images
}
export function joinLobbyContainerHTML() {
	clearHtml();
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
export function lobbyPreGameHTML() {
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
}
export function informationPageHTML() {
	clearHtml();
	var h2 = document.createElement("h2");
	h2.id = "lobbyText";
	h2.className = "text-center";
	h2.textContent = "informationPage";
	$pageContentCodeBlock[0].appendChild(h2);
}
export function homePageHTML() {
	clearHtml();
	var h2 = document.createElement("h2");
	h2.id = "lobbyText";
	h2.className = "text-center";
	h2.textContent = "HOME PAGE";
	$pageContentCodeBlock[0].appendChild(h2);
}

export function seroundingDivAccordion(title, desc) {
	const $gameList = $("#gameList");
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

	$gameList[0].appendChild(h2);
}
