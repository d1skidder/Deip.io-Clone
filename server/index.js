const express = require("express");
const path = require("node:path");
const app = express();
const WebSocket = require("ws");
const serializer = require("../serializer/serializer.js");

const Server = new WebSocket.Server({ port: 8080 });
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, `../${req.url}`));
});

//* Configure WebSocket Server
Server.on("connection", async (stream) => {
	stream.on("open", () => {

	})

	stream.on("message", async (data) => {
		console.log(serializer.default.decode(data));
	});

	stream.on("close", () => {});

	stream.on("error", (err) => {
		console.error(err);
	});
});

app.listen(9998);
