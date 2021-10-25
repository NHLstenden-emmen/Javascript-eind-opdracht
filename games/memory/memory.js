var memoryBoard = document.getElementById("game");
var cardClass = document.getElementsByClassName("memoryImage");
var backgroundImage = "https://assets.webshop.nl/products/Shopping/8fda19e5e1f089060238a4d6e8240e03.300x300.jpeg";
var amoundOfCards = 5;
var showCardsTime = 2;
var fipAnother = true;
var lastCard;
var lastCardMatch;
export var score = 0;
export var endGame = false;

export function startGame() {
	memoryBoard.innerHTML = ""; // clear images

	// crate text
	const para = document.createElement("p");
	const text = document.createTextNode("enter a number of how many memory cards you want ");
	para.appendChild(text);
	memoryBoard.appendChild(para);
	// input the amound of cards
	var input = document.createElement("INPUT");
	input.setAttribute("type", "text");
	input.setAttribute("value", 5);
	input.id = "amoundOfCards";
	memoryBoard.appendChild(input);

	// crate text
	const paraTime = document.createElement("p");
	const textTime = document.createTextNode("how long do you want to see the cards before it starts ");
	paraTime.appendChild(textTime);
	memoryBoard.appendChild(paraTime);
	// input the amound of timne you want to see a card
	var inputTime = document.createElement("INPUT");
	inputTime.setAttribute("type", "number");
	inputTime.setAttribute("value", 2);
	inputTime.id = "watchCards";
	memoryBoard.appendChild(inputTime);

	// create start button
	var btn = document.createElement("BUTTON");
	btn.innerHTML = "Start the game";
	btn.className = "btn";
	btn.onclick = function () {
		giveCardsImage();
	};
	memoryBoard.appendChild(btn);
}

export function giveCardsImage() {
	var setAmoundOfCards = document.getElementById("amoundOfCards").value;
	var setWatchCards = document.getElementById("watchCards").value;
	if (isNaN(setAmoundOfCards) || isNaN(setWatchCards)) {
		startGame();
		return;
	} else {
		amoundOfCards = setAmoundOfCards;
		showCardsTime = setWatchCards;
	}
	memoryBoard.innerHTML = ""; // clear images
	// api https://picsum.photos/200/300?random=1
	for (let i = 1; i <= amoundOfCards; i++) {
		var imageOne = document.createElement("img");
		var imageTwo = document.createElement("img");

		// create image
		imageOne.src = "https://picsum.photos/200/300?random=" + i;
		imageOne.id = i + "-" + 1;
		imageOne.className = "memoryImage";
		imageOne.onclick = function () {
			flipcard(i + "-" + 1);
		};

		// clone image
		imageTwo.src = "https://picsum.photos/200/300?random=" + i;
		imageTwo.id = i + "-" + 2;
		imageTwo.className = "memoryImage";
		imageTwo.onclick = function () {
			flipcard(i + "-" + 2);
		};

		// append images
		memoryBoard.appendChild(imageOne);
		memoryBoard.appendChild(imageTwo);
	}
	shuffelAllCards();
	hideAllCards(showCardsTime);
}
function shuffelAllCards() {
	for (var i = memoryBoard.children.length; i >= 0; i--) {
		memoryBoard.appendChild(memoryBoard.children[(Math.random() * i) | 0]);
	}
}
export function hideAllCards(time) {
	var images = cardClass;
	// turn into mili seconds
	time = time * 1000;
	// wait before hiding the cards
	setTimeout(() => {
		for (var i = 0; i < images.length; i += 1) {
			images[i].src = backgroundImage;
		}
	}, time);
}
export function flipcard(num) {
	score++;
	var thisCard = document.getElementById(num);
	var newNum = num.substr(0, num.indexOf("-"));
	if (!thisCard.classList.contains("flip")) {
		thisCard.src = "https://picsum.photos/200/300?random=" + newNum;
		thisCard.className = "memoryImage flip";
		MatchCard(num);
	} else {
		thisCard.src = backgroundImage;
		thisCard.className = "memoryImage";
	}
}
export function MatchCard(num) {
	var thisCard = document.getElementById(num);
	var startNew = num.substr(0, num.indexOf("-"));
	var endNew = num.split("-")[1];

	// matches
	if (lastCardMatch == num) {
		fipAnother = true;
		var lastCardId = document.getElementById(lastCard);

		thisCard.onclick = function () {};
		lastCardId.onclick = function () {};

		lastCardId.className += " correct";
		thisCard.className += " correct";
		finishCheck();
	} else {
		// flip another card
		if (fipAnother == true) {
			fipAnother = false;
			lastCard = startNew + "-" + endNew;
			if (endNew == 1) {
				endNew = 2;
			} else {
				endNew = 1;
			}
			lastCardMatch = startNew + "-" + endNew;
		} else {
			var lastCardId = document.getElementById(lastCard);
			fipAnother = true;
			setTimeout(() => {
				thisCard.src = backgroundImage;
				thisCard.className = "memoryImage";

				lastCardId.src = backgroundImage;
				lastCardId.className = "memoryImage";
			}, 500);
		}
	}
	// matched the fliped card if there was another card flipt allready
}

export function finishCheck() {
	// Once all the cards are flipt finish the game
	if (amoundOfCards <= 1) {
		endGame = true;
		// finished
		var btn = document.createElement("BUTTON");
		btn.innerHTML = "Restart the game";
		btn.className = "btn";
		btn.onclick = function () {
			startGame();
		};

		memoryBoard.appendChild(btn);
	} else {
		--amoundOfCards;
	}
}
