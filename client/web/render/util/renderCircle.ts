import { gl } from "../../document";

const aspectRatio = gl.canvas.width / gl.canvas.height;

// TODO: Make this actually render the circle, rather then return float point coordinates.
export default function renderCircle(radius: number, segments: number): Float32Array {
    const vertices: number[] = [];

    for (let i = 0; i < segments; i++) {
        const angle = Math.PI * 2 * i / segments;
        vertices.push(radius * Math.cos(angle) / aspectRatio, radius * Math.sin(angle));
    }

    return new Float32Array(vertices);
}