import { gameInformation as lobbyNameDesc } from "./modules/lobby.js";
import { selectActivePage } from "./modules/pages.js";

$(window).on("hashchange", function (e) {
	selectActivePage();
});

// var selectedGameInfo = lobbyNameDesc();
// console.log(selectedGameInfo);

// 	import { startGame } from "../games/memory/memory.js";
// 	$("<link/>", { rel: "stylesheet", type: "text/css", href: "../games/memory/memory.css" }).appendTo("head");
// 	startGame();
