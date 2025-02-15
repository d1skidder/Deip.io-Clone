import { webGLProgram } from "../..";
import { UTILS } from "../../../utils";
import { gl } from "../document";
import { getUColorLocation } from "./init";

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

	const vertices = new Float32Array([
        -0.5, -0.5, //left
        0.5, -0.5, //right
        0.0, 0.5, //top
    ]);
    
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);


	gl.uniform4f(getUColorLocation(), 1.0, 0.0, 0.0, 1.0); // rgba
	
	const location = gl.getAttribLocation(webGLProgram, "a_position");
	gl.enableVertexAttribArray(location);
	gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	gl.vertexAttribPointer(location, 2, gl.FLOAT, false, 0, 0);

	gl.drawArrays(gl.TRIANGLES, 0, 3);


	requestAnimationFrame(draw);
}
