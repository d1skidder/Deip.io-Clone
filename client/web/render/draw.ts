import { UTILS } from "../../../utils";
import { gl } from "../document";

// TODO: make rendering system using webgl
export default function draw() {
	// * Lerping Action!
	// TODO: Change to something more efficient perhaps?

	const background = UTILS.convertHEXToRGB("#cdcdcc");
	gl.clearColor(background[0], background[1], background[2], 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);

	//* Overlay
	/*
	const color = UTILS.convertHEXToRGB("#000046");
	gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	gl.clearColor(color[0], color[1], color[2], 0.35);
	gl.clear(gl.COLOR_BUFFER_BIT);
	*/

	requestAnimationFrame(draw);
}
