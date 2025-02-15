import { gl } from "../../document";
import compileShader from "./compileShader";

// biome-ignore lint/suspicious/noExplicitAny: TODO for later
export default function createProgram(vertex: string, frag: string): WebGLProgram | null {
	// remove the : WebGLShader | null if any problems arise (probably is the cause)
	const vertexShader: WebGLShader | null = compileShader(vertex, gl.VERTEX_SHADER);
	const fragShader: WebGLShader | null = compileShader(frag, gl.FRAGMENT_SHADER);

	if (!vertexShader || !fragShader) {
		alert("Error compiling WebGL Shaders!");
		return null;
	}

	const program: WebGLProgram = gl.createProgram();
	gl.attachShader(program, vertexShader);
	gl.attachShader(program, fragShader);

	// ? Link the program to the WebGL application.
	gl.linkProgram(program);

	if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        alert("Failed to link WebGL program together!");
		console.error("ERROR linking program", gl.getProgramInfoLog(program));
		gl.deleteProgram(program);
		return null;
	}

    return program;
}
