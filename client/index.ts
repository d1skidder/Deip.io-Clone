// ? This is the main file, where everything comes together to work as a coherent mess.

import serializer from "../serializer/serializer";
import { UTILS } from "../utils";
import draw from "./web/render/draw";
import initGL from "./web/render/init";

const distanceOf = new UTILS.DistanceOf();
const directionOf = new UTILS.DirectionOf();

console.log("ok");

export const webGLProgram = initGL();
webGLProgram.then((program) => {
	if (program) draw();
});

const ws = new WebSocket("https://nqzq53pr-8080.use.devtunnels.ms/");
ws.onopen = () => {
	ws.binaryType = "arraybuffer";

	setInterval(() => {
		ws.send(serializer.encode("MASHALLAH"), serializer.encode(1234));
		console.log(serializer.encode("MASHALLAH"), serializer.encode(1234));
	}, 3000);
};
