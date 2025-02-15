import { webGLProgram } from "../..";
import { UTILS } from "../../../utils";
import { gl } from "../document";
import createLineVertices from "./gl/createLineVertices";
import { getUColorLocation } from "./init";

let ang = 0;

// TODO: make rendering system using webgl
export default async function draw() {
	const glProgram = await webGLProgram;

	//? Action!
	// TODO: Change to something more efficient perhaps?

	const background = UTILS.convertHEXToRGB("#cdcdcc");
	//gl.clearColor(background[0], background[1], background[2], 1.0);
	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);

	//* Overlay
	/*
	const color = UTILS.convertHEXToRGB("#000046");
	gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	gl.clearColor(color[0], color[1], color[2], 0.35);
	gl.clear(gl.COLOR_BUFFER_BIT);
	*/

	const uAngleLocation = gl.getUniformLocation(glProgram, "u_angle");

	console.log(uAngleLocation)
	ang += 0.01;
	gl.uniform1f(uAngleLocation, ang);

	//! This draws a red triangle.
	
	const vertices = new Float32Array([
        -0.5, -0.5, //left
        0.5, -0.5, //right
        0.0, 0.5, //top
    ]);
    
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
	gl.uniform4f(getUColorLocation(), 1.0, 0.0, 0.0, 1.0); // rgba
	
	const location = gl.getAttribLocation(glProgram, "a_position");
	gl.enableVertexAttribArray(location);
	gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	gl.vertexAttribPointer(location, 2, gl.FLOAT, false, 0, 0);

	gl.drawArrays(gl.TRIANGLES, 0, 3);
	


	/*
	const location = gl.getAttribLocation(webGLProgram, "a_position");
	gl.enableVertexAttribArray(location);
	gl.vertexAttribPointer(location, 2, gl.FLOAT, false, 0, 0);

	const lineVertices: Float32Array = createLineVertices(
		[-0.8, 0.0],
		[0.8, 0.0],
		5
	);
	const lineBuffer: WebGLBuffer = gl.createBuffer();

	gl.bindBuffer(gl.ARRAY_BUFFER, lineBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, lineVertices, gl.STATIC_DRAW);
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
	*/
	

	requestAnimationFrame(draw);
}
