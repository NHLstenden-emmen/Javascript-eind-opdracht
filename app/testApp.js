const socket = io('ws://localhost:8080');

var lobby;

$('#join').on('click', function() {
    lobbyID = $('#id').val();
    username = $('#name').val();
    joinLobby(lobbyID, username);
});

$('#send').on('click', function() {
    msg = $('#msg').val();
    socket.emit('message', msg);
    $('#msg').val('');
});

socket.on("message", (data, a) => {
    console.log(data);
    console.log(a);
    $('#msgs').prepend(`<p>${data.username}: ${data.msg}</p>`);
});

socket.on("lobbyChange", lobby => {
    this.lobby = lobby;
    refreshLobbyHeader();
});

function joinLobby(lobbyID, username) {
    socket.emit('joinLobby', {lobbyID, username});
    // Hide join lobby input fields
    $('#lobby').html('');
}

function refreshLobbyHeader() {
    $('#lobbyText').text(`Lobby: ${lobby}`);
}