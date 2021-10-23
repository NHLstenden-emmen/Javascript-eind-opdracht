const socket = io('ws://localhost:8080');

var lobby;

$('#msgs').hide();

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

socket.on("message", (data) => {
    $('#msgs').prepend(`<p>${sanitizeString(data.username)}: ${sanitizeString(data.msg)}</p>`);
});

socket.on("lobbyChange", lobby => {
    this.lobby = lobby;
    // Hide join lobby input fields
    $('#joinLobbyContainer').hide();
    $('#msgs').show();
    $('#lobbyText').text(`Lobby: ${sanitizeString(this.lobby)}`);
});

function joinLobby(lobbyID, username) {
    socket.emit('joinLobby', {lobbyID, username});
}

const sanitizeString = (str) => {
	str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "");
	return str.trim();
}