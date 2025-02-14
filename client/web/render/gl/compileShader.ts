import { gl } from "../../document";

export default function compileShader(source: string, type: number): WebGLShader | null {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert("Error compiling WebGL Shader!");

        console.error(gl.getShaderInfoLog(shader));
        
        // ? Delete shader
        gl.deleteShader(shader);
        return null;
    }

    return shader;
}