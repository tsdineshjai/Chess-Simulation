const express = require("express");
const socket = require("socket.io");
const http = require("node:http");
const { Chess } = require("chess.js");
const path = require("path");

const app = express();
const server = http.createServer(app);

const io = socket(server);

const chess = new Chess();

let players = {};

let currentPlayer = "W";

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
	res.render("index", { title: "Chess Game" });
});

server.listen(3000, () => {
	console.log(`ypu are listening on port 3000`);
});

io.on("connection", function (uniqueSocket) {
	console.log("connected");
});

io.on("connection", (socket) => {
	socket.on("chat message", (msg) => {
		console.log("Thank you i have received the message: " + msg);
	});
});

/* 
const io = socket(server);

This line initializes Socket.io and binds it to the HTTP server (server). 
Socket.io will now be able to handle WebSocket connections and other real-time communication on the same server that is handling HTTP requests. */

/* 
const server = http.createServer(app);

In summary, the code creates an Express application to handle HTTP requests, then creates an HTTP server that 
uses this Express application, and finally integrates Socket.io for real-time communication on the same server. 
This approach simplifies the development of applications that require both traditional web functionality and 
real-time features.
Here, you are creating an HTTP server using the built-in http module. The createServer method takes the 
Express application (app) as an argument. This means that the HTTP server will use the Express application 
to handle incoming HTTP requests. When a request is made to the server, the Express application will handle 
it according to the routes and middleware defined in app.
*/

/* 
app.set("view engine", "ejs");

app.set("view engine", "ejs"): This line sets the template engine for the Express application to EJS (Embedded JavaScript). 
The view engine is responsible for rendering views (HTML pages) that are returned to the client. 
By setting the view engine to EJS, you can use EJS syntax in your view files to dynamically generate HTML content.
EJS allows you to embed JavaScript code within your HTML to generate dynamic content. 
For example, you can use loops, conditionals, and other JavaScript features within your EJS templates.


app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(...)): This line configures the Express application to serve static files. Static files include assets like images, CSS files, 
JavaScript files, and other files that do not change dynamically.
express.static(path.join(__dirname, "public")): The express.static middleware serves static files from the directory specified. 
The path.join(__dirname, "public") part constructs an absolute path to the public directory in your project. 
The __dirname variable represents the directory where the current script is located, and path.join is used to ensure the path is constructed correctly 
regardless of the operating system.
*/
