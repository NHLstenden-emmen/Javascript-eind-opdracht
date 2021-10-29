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
export function lobbyInGameHTML() {
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
	let gameLocation = document.createElement("div");
	gameLocation.className = "col-6";
	gameLocation.id = "game";
	row.appendChild(gameLocation);

	// message box
	let messageList = document.createElement("div");
	messageList.className = "col";
	// message chat
	let messages = document.createElement("div");
	messages.id = "msgs";
	messages.className = "container";
	// row around textbox
	let messageBox = document.createElement("div");
	messageBox.className = "row";
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
	messageBox.appendChild(messageInput);
	messageBox.appendChild(messageButton);
	messageList.appendChild(messages);
	messageList.appendChild(messageBox);
	row.appendChild(messageList);

	lobbyPreGame.appendChild(row);
	$pageContentCodeBlock[0].appendChild(lobbyPreGame);
}
export function informationPageHTML() {
	clearHtml();
	let pageDesign = `<div class="Rules col-lg-8 mx-auto p-3 py-md-5">
			<main>
				<h1>Gamen met Gerjan</h1>
				<p class="fs-5 col-md-8">This is a gaming platform where you can play games with Gerjan or with other friends. You can also create your own game and add it to the platform.</p>
				<hr class="col-3 col-md-2 mb-5" />
				<div class="row g-5">
					<div class="col-md-6">
						<h2>Just play a game.</h2>
						<p>You can go to a <a href="#lobby">Lobby</a> to join or create a game lobby. </p>
						<p>There are two types of games the first is a Score based game, the other one is a multiplayer game.</p>
					</div>
					<div class="col-md-6">
						<h2>Create your own game.</h2>
						<p>There are a few rules you have to keep in mind when you make a game.</p>
						<ul>
							<li>Css file with the styling.</li>
							<li>Javascript file with the whole game inside of it.</li>
							<li>Json according to the json template.</li>
						</ul>
						<div class="accordion" id="accordionPanelsStayOpenExample">
							<div class="accordion-item">
								<h2 class="accordion-header" id="panelsStayOpen-headingOne">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne"> Javascript </button>
								</h2>
								<div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
									<div class="accordion-body"> Coming soon!
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="panelsStayOpen-headingTwo">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo"> CSS and JSON  </button>
								</h2>
								<div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
									<div class="accordion-body"> Coming soon!
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="panelsStayOpen-headingThree">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree"> Upload </button>
								</h2>
								<div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
									<div class="accordion-body"> Coming soon!
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>`;
	$pageContentCodeBlock[0].innerHTML = pageDesign;
}
export function homePageHTML() {
	clearHtml();
	let pageDesign = 
	`<div class="Rules col-lg-8 mx-auto p-3 py-md-5">
	<main>
		<h1>Gamen met Gerjan</h1>
		<p class="fs-5 col-md-8">What's up gamers!</p>
		<hr class="col-3 col-md-2 mb-5" />
		<div class="row g-5">
			<div class="col-md-6">
				<h2>Just play a game.</h2>
				<p>Just do it. Join a <a href="#lobby">Lobby.</a></p>
				<p>Real gamers game on gamen met gerjan. Its a site. The best site yes.</p>
				<p>This amazing site was created by Kevin Smulders and Jeffrey Roossien. We both like spaghetti.</p> 
				<img class="img-fluid" src="https://img.youtube.com/vi/T56X53xRvhM/maxresdefault.jpg" alt="super mario irl">
			</div>
			
		</div>
	</main>
</div>`;
	$pageContentCodeBlock[0].innerHTML = pageDesign;
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
