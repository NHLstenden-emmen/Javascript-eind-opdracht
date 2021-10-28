import * as pageContent from "./modules/pages.js";

export const socket = io("ws://localhost:8080");

$(window).on("hashchange", function (e) {
	pageContent.selectActivePage();
});
pageContent.selectActivePage();
