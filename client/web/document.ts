const gameCanvas = document.getElementById("gameCanvas") as HTMLCanvasElement;

const scale = window.devicePixelRatio || 1;
gameCanvas.width = gameCanvas.clientWidth * scale;
gameCanvas.height = gameCanvas.clientHeight * scale;
gameCanvas.style.width = `${gameCanvas.clientWidth}px`;
gameCanvas.style.height = `${gameCanvas.clientHeight}px`;

export const gl = gameCanvas.getContext("webgl2", {
	antialias: true,
}) as WebGLRenderingContext;

const ext = gl.getExtension("WEBGL_multisampled_render_to_texture");
if (ext) {
	console.log("MSAA enabled!");
} else {
	console.warn("MSAA not supported!");
}

gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

document.addEventListener("keydown", () => {});

export default {
	gameCanvas: gameCanvas,
};
