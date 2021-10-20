const socket = io('ws://localhost:8080');

var lobby;

$('#join').on('click', function() {
    id = $('#id').val();
    dName = $('#name').val();
    socket.emit('joinLobby', id, dName);
});

$('#send').on('click', function() {
    msg = $('#msg').val();
    socket.emit('message', msg);
});

socket.on("message", msg => {
    $('#msgs').append(`<p>${dName}: ${msg}</p>`);
});

socket.on("lobbyChange", lobby => {
    $('#lobby').text(`Lobby: ${lobby}`);
});