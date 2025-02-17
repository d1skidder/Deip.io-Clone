import { webGLProgram } from "../..";
import { UTILS } from "../../../utils";
import { gl } from "../document";
import createLineVertices from "./gl/createLineVertices";
import { getUColorLocation } from "./init";
import renderCircle from "./util/renderCircle";

let ang = 0;

// TODO: make rendering system using webgl
export default async function draw() {
	gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

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

	//! WORKS, DRAWS TRIANGLE
	/*
	const uAngleLocation = gl.getUniformLocation(glProgram, "u_angle");

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
	*/

	const buffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	gl.bufferData(gl.ARRAY_BUFFER, renderCircle(0.2, 64), gl.STATIC_DRAW);

	const positionAttributeLocation = gl.getAttribLocation(
		glProgram,
		"a_position",
	);
	gl.enableVertexAttribArray(positionAttributeLocation);
	gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);
	

	//! extract to one time call
	const positionLoc = gl.getAttribLocation(glProgram, "a_position");
	const vLoc = gl.getAttribLocation(glProgram, "a_v");
	const baseColorLoc = gl.getUniformLocation(glProgram, "u_baseColor");
	const borderColorLoc = gl.getUniformLocation(glProgram, "u_borderColor");
	const borderSizeLoc = gl.getUniformLocation(glProgram, "u_borderSize");

	gl.uniform4fv(baseColorLoc, [1, 0, 0, 1]);
	gl.uniform4fv(borderColorLoc, [0, 0, 0, 1]);

	const t = Date.now() * 0.001;
	gl.uniform1f(borderSizeLoc, Math.sin(t) * 0.5 + 0.5);

	gl.clearColor(1.0, 1.0, 1.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);

	gl.drawArrays(gl.TRIANGLE_FAN, 0, renderCircle(2, 64).length / 2);

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
