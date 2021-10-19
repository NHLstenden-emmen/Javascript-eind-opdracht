export function gameInformation() {
	var result = {};
	$.getJSON("../games/memory/memory.json", function (data) {
		result.name = data.name;
		result.shortDesc = data.description.short;
		result.longDesc = data.description.long;
		result.gameType = data.gameType;
		result.minPlayers = data.players.min;
		result.maxPlayers = data.players.max;
		// loops trough all the rules
		var rules = {};
		for (let x in data.Rules) {
			rules[x] = data.Rules[x];
		}
		result.Rules = rules;
		// moet nog even naar gameSettings kijken
		console.log(data.gameSettings.amoundOfCards);
	}).fail(function () {
		result.name = "name";
		result.shortDesc = "short description";
		result.longDesc = "long description";
		result.gameType = "game type";
		result.minPlayers = "min players";
		result.maxPlayers = "max players";
		result.Rules = "Rules";
		result.gameSettings = "gameSettings";
	});
	return result;
}
