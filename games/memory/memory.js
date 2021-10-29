var memoryBoard = document.getElementById("game");
var cardClass = document.getElementsByClassName("memoryImage");
var backgroundImage = "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75082/red-skip-card-clipart-sm.png";
var amoundOfCards = 1;
var showCardsTime = 2;
var fipAnother = true;
var lastCard;
var lastCardMatch;
export var score = 0;
export var endGame = false;

export function startGame() {
	giveCardsImage();
}

export function giveCardsImage() {
	memoryBoard.innerHTML = ""; // clear images
	// api https://source.unsplash.com/random/200x300?sig=1
	for (let i = 1; i <= amoundOfCards; i++) {
		var imageOne = document.createElement("img");
		var imageTwo = document.createElement("img");

		// create image
		imageOne.src = "../games/memory/images/image" + i + ".jpg";
		imageOne.id = i + "-" + 1;
		imageOne.className = "memoryImage";
		imageOne.onclick = function () {
			flipcard(i + "-" + 1);
		};

		// clone image
		imageTwo.src = "../games/memory/images/image" + i + ".jpg";
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
		thisCard.src = "../games/memory/images/image" + newNum + ".jpg";
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
	} else {
		--amoundOfCards;
	}
}

export function getScore() {
	return score;
}

export function getEndgame() {
	return endGame;
}
