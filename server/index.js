const express = require("express");
const path = require("node:path");
const app = express();
const WebSocket = require("ws");

const Server = new WebSocket.Server({ port: 8080 });

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, `../${req.url}`));
});

//* Configure WebSocket Server
Server.on("connection", async (stream) => {
	stream.addEventListener("onopen", () => {});

	stream.addEventListener("onmessage", async (event) => {
		const data = event.data;
	});

	stream.addEventListener("onclose", () => {});

	stream.addEventListener("onerror", (err) => {
		console.error(err);
	});
});

app.listen(9998);
