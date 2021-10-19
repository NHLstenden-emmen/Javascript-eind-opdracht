let turn = "red";
let victory = false;
let board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
updateBoard();

function updateBoard() {
	var $info = $("#info");
	$("#board").html("");
	$info.html("");
	board.forEach(renderBlock);
	$(".game").on("click", function () {
		play(parseInt(this.id));
	});
	let vic = checkVictory();
	if (vic === "red" || vic === "blue") {
		$info.append(`${vic} won!`);
		victory = true;
	} else {
		$info.append(`<p>${turn}'s turn.</p>`);
		$info.append(`<div class="${turn} game"></div>`);
	}
}

function checkVictory() {
	let index = 0;
	let bCount = 0;
	let rCount = 0;

	// Horizontal
	while (index < board.length) {
		bCount = 0;
		rCount = 0;
		for (let i = 0; i < 7; i++) {
			if (bCount === 3) {
				return "blue";
			}
			if (rCount === 3) {
				return "red";
			}
			if (board[index] !== 0) {
				if (board[index] === board[index + 1]) {
					if (board[index] === 1) {
						rCount++;
					} else {
						bCount++;
					}
				} else {
					bCount = 0;
					rCount = 0;
				}
			}
			index++;
		}
	}
	// Vertical
	bCount = 0;
	rCount = 0;
	for (let i = 0; i < 7; i++) {
		for (let j = 0; j < 5; j++) {
			if (board[i + j * 7] !== 0) {
				if (board[i + j * 7] === board[i + j * 7 + 7]) {
					if (board[i + j * 7] === 1) {
						rCount++;
					} else {
						bCount++;
					}
					if (bCount === 3) {
						return "blue";
					}
					if (rCount === 3) {
						return "red";
					}
				} else {
					bCount = 0;
					rCount = 0;
				}
			}
		}
	}

	// Diagonal -
	index = 0;
	while (index < board.length - 7) {
		bCount = 0;
		rCount = 0;
		if (board[index] !== 0) {
			if (board[index] === board[index + 8] && getX(index) === getX(index + 8) - 1) {
				if (board[index + 8] === board[index + 16] && getX(index + 8) === getX(index + 16) - 1) {
					if (board[index + 16] === board[index + 24] && getX(index + 16) === getX(index + 24) - 1) {
						if (board[index] === 1) {
							return "red";
						} else {
							return "blue";
						}
					}
				}
			}
		}

		index++;
	}
	// Diagonal +
	index = 0;
	while (index < board.length - 7) {
		bCount = 0;
		rCount = 0;
		if (board[index] !== 0) {
			if (board[index] === board[index + 6] && getX(index) === getX(index + 6) + 1) {
				if (board[index + 6] === board[index + 12] && getX(index + 6) === getX(index + 12) + 1) {
					if (board[index + 12] === board[index + 18] && getX(index + 12) === getX(index + 18) + 1) {
						if (board[index] === 1) {
							return "red";
						} else {
							return "blue";
						}
					}
				}
			}
		}
		index++;
	}
}

function resetBoard() {
	board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	victory = false;
}

function renderBlock(item, index, arr) {
	const color = findColor(item);
	$("#board").append(`<div id="${index}" class="${color} game"></div>`);
}

function play(index) {
	if (victory) {
		return;
	}
	let turnInt = 2;
	if (turn === "red") {
		turnInt = 1;
	}
	if (insertOnX(getX(index), turnInt)) {
		if (turn === "red") {
			turn = "blue";
		} else {
			turn = "red";
		}
	}
	updateBoard();
}

function insertOnX(x, turnInt) {
	let index = 35 + x;
	while (board[index] !== 0 && index > -1) {
		index = index - 7;
	}
	if (index < 0) {
		return false;
	}
	board[index] = turnInt;
	return true;
}

function getX(index) {
	let xIndex = 0;
	let row = [0, 7, 14, 21, 28, 35];
	while (xIndex <= 7) {
		if ($.inArray(index, row) !== -1) {
			return xIndex;
		}
		row = increaseOne(row);
		xIndex++;
	}
	return -1;
}

function increaseOne(arr) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i] + 1;
	}
	return arr;
}

function findColor(item) {
	switch (item) {
		case 0:
			return "black";
		case 1:
			return "red";
		case 2:
			return "blue";
	}
}

$(function () {
	$("button#reset").on("click", function () {
		resetBoard();
		updateBoard();
	});
});
