import { gl } from "../document";
import createProgram from "./gl/createProgram";

// TODO: Link shaders to respective files in "glsl/"
const vertexShaderSource = `
attribute vec2 a_position;
void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`;
const fragmentShaderSource = `
precision mediump float;
uniform vec4 u_color;
void main() {
    gl_FragColor = u_color;
}
`;

export default function initGL() {
	if (!gl) {
		alert(
			"Your browser does not support WebGL, consider upgrading or changing browsers.",
		);
	}

	gl.enable(gl.BLEND);
	gl.enable(gl.SCISSOR_TEST);

	const program = createProgram(vertexShaderSource, fragmentShaderSource);
	gl.useProgram(program);
}

console.log("lol");
