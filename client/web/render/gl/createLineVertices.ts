export default function createLineVertices(
	start: [number, number],
	end: [number, number],
	width: number,
): Float32Array {
	const direction: number[] = [end[1] - start[1], start[0] - end[0]];
	const length: number = Math.sqrt(
		direction[0] * direction[0] + direction[1] * direction[1],
	);
	const normal: number[] = [
		(width * direction[0]) / length,
		(width * direction[1]) / length,
	];

	return new Float32Array([
		start[0] - normal[0],
		start[1] - normal[1],
		end[0] - normal[0],
		end[1] - normal[1],
		start[0] + normal[0],
		start[1] + normal[1],
		end[0] + normal[0],
		end[1] + normal[1],
	]);
}
