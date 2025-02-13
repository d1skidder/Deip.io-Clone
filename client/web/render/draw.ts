import { gl } from "../document";

// TODO: make rendering system using webgl
export default function draw() {
	gl.enable(gl.SCISSOR_TEST);
	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);

	requestAnimationFrame(draw);
}

draw();
