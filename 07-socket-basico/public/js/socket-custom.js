var socket = io();

// Indica conexión al servidor
socket.on("connect", function() {
  console.log("Connected to the server");
});

socket.on("disconnect", function() {
  console.log("Server disconnected");
});

// Enviar información
socket.emit(
  "sendMessage",
  {
    user: "Yuly",
    message: "Hello world"
  },
  function(response) {
    console.log("Server response: ", response);
  }
);

// Escuchar información
socket.on("sendMessage", function(message) {
  console.log("Message from server: ", message);
});
