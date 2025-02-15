import { gl } from "../document";
import createProgram from "./gl/createProgram";
import initBuffers from "./gl/initBuffers";

let uColorLocation: WebGLUniformLocation | null;
export function getUColorLocation() {
    return uColorLocation;
}

export default async function initGL() {
    if (!gl) {
        alert("Your browser does not support WebGL, consider upgrading or changing browsers.");
        return null;
    }

	console.log(gl)

    gl.enable(gl.SCISSOR_TEST);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    try {
        const vertexShaderSource = await fetch("./client/web/render/glsl/vertexShader.glsl").then((resp) => resp.text());
        const fragmentShaderSource = await fetch("./client/web/render/glsl/fragShader.glsl").then((resp) => resp.text());

        const program = createProgram(vertexShaderSource, fragmentShaderSource);
        gl.useProgram(program);

        uColorLocation = gl.getUniformLocation(program, 'u_color');

        initBuffers();

        return program;
    } catch (error) {
        console.error("Failed to initialize WebGL:", error);
        return null;
    }
}