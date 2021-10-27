import * as pageContent from "./modules/pages.js";

export const socket = io("ws://localhost:8080");

$(window).on("hashchange", function (e) {
	pageContent.selectActivePage();
});
pageContent.selectActivePage();

// import the important classes
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
