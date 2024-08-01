const socket = io();
//doing this line of code will send requets to the server.

//emit a event
//socket.io  --> start listening to an event emitted from the server.

const chess = new Chess();
const boardElement = document.querySelector(".chessboard");

//game at the start

let draggedPiece = null;
let sourceSqure = null;
let playerRole = null;

const renderBoard = () => {
	const board = chess.board();
	boardElement.innerHTML = "";
};
const handleMove = () => {};
const getPieceUnicode = () => {};
