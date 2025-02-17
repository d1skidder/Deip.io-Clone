const gameCanvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
export default {
	gameCanvas: gameCanvas,
};

export const gl = gameCanvas.getContext("webgl2", { antialias: true }) as WebGLRenderingContext;
const ext = gl.getExtension('WEBGL_multisampled_render_to_texture');

if(ext) {
	console.log("MSAA enabled!")
} else {
	console.warn("MSAA not supported!")
}
console.log(gl.getContextAttributes());

/*
gameCanvas.width = gameCanvas.clientWidth;
gameCanvas.height = gameCanvas.clientHeight;
*/

gameCanvas.style.width = `${gameCanvas.clientWidth}px`;
gameCanvas.style.height = `${gameCanvas.clientHeight}px`;

gl.viewport(0, 0, gameCanvas.width, gameCanvas.height);

console.log('Viewport:', gl.getParameter(gl.VIEWPORT));

