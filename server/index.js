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

app.listen(9998);
