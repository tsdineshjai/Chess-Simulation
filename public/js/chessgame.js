const socket = io();

//doing this line of code will send requets to the server.

socket.emit("chat message", "Halo ! I aam from Germany");
