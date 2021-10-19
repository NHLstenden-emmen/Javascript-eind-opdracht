import { gameInformation as lobbyNameDesc } from "./modules/lobby.js";
var selectedGameInfo = lobbyNameDesc();
console.log(selectedGameInfo);
// for loop door de games folder om alle games op te halen.

// als een game is geselecteerd.
// haal uit de api lijst alle games die bestaan
import { startGame } from "../games/memory/memory.js";
// import sheet from "../games/memory/memory.css";
$("<link/>", { rel: "stylesheet", type: "text/css", href: "../games/memory/memory.css" }).appendTo("head");
// als de player ready is kan die op start klikken
startGame();
