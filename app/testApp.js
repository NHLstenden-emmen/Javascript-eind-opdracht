const socket = io('ws://localhost:8080');

var lobby;

$('#lobbyPreGame').hide();

$('#join').on('click', () => {
    lobbyID = $('#id').val();
    username = $('#name').val();
    joinLobby(lobbyID, username);
});

$('#send').on('click', () => {
    msg = $('#msg').val();
    socket.emit('message', msg);
    $('#msg').val('');
});

$('#ready').on('click', () => {
    socket.emit('toggleReady');
});

socket.on("message", (data) => {
    $('#msgs').prepend(`<p>${sanitizeString(data.username)}: ${sanitizeString(data.msg)}</p>`);
});

socket.on("playerList", (data) => {
    console.log(data);
    $('#playerList').html('<li class="list-group-item active">Players: </li>');
    data.lobby.players.forEach(player => {
        if (player.ready) {
            $('#playerList').append(`<li class="list-group-item">${player.name}: Ready!</li>`);
        } else {
            $('#playerList').append(`<li class="list-group-item">${player.name}: Not ready</li>`);
        }
    });
})

socket.on("lobbyChange", lobby => {
    this.lobby = lobby;
    // Hide join lobby input fields
    $('#joinLobbyContainer').hide();
    $('#lobbyPreGame').show();
    $('#lobbyText').text(`Lobby: ${sanitizeString(this.lobby)}`);
});

function joinLobby(lobbyID, username) {
    socket.emit('joinLobby', {lobbyID, username});
}

const sanitizeString = (str) => {
	str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "");
	return str.trim();
}