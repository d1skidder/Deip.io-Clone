import { gl } from "../document";

export default function initGL() {
	if (!gl) {
		alert(
			"Your browser does not support WEBGL, consider upgrading or changing browsers.",
		);
	}

	gl.enable(gl.BLEND);
	gl.enable(gl.SCISSOR_TEST);
}


console.log("lol");
