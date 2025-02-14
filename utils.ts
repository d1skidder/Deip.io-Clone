/*export default {
	getDistance: (a, b) => {
		return Math.hypot(b[1] - a[1], b[0] - a[0]);
	},
};

export enum serverConfigs {
	devURL = "wss://localhost:9990",
	updateRate = 1e3 / 9,
	playerDecelerationRatio = 0.993,
	playerDefaultSpeed = 60,
	defaultTankHealth = 100,
}
*/

import type { Shape } from "./shared/entitites/Shape";
import type { Tank } from "./shared/entitites/Tank";

// ? First time using namespaces, help?!
export namespace UTILS {
	export interface GameGeometry {
		objects(first: Shape, second: Shape): number;
		tanks(first: Tank, second: Tank): number;
		tankToObject(first: Tank, second: Shape): number;
	}

	// TODO: Implement a more efficient method of distance calculations where accuracy is not of highest priority.
	// TODO: Implement a custom method for each for custom coordinate pairs.
	export class DistanceOf implements GameGeometry {
		objects(first: Shape, second: Shape): number {
			return Math.hypot(second.y - first.y, second.x - first.x);
		}

		tanks(first: Tank, second: Tank): number {
			return Math.hypot(second.y2 - first.y2, second.x2 - first.x2);
		}

		tankToObject(first: Tank, second: Shape): number {
			return Math.hypot(second.y - first.y2, second.x - first.x2);
		}
	}

	export class DirectionOf implements GameGeometry {
		objects(first: Shape, second: Shape): number {
			return Math.atan2(second.y - first.y, second.x - first.x);
		}

		tanks(first: Tank, second: Tank): number {
			return Math.atan2(second.y2 - first.y2, second.x2 - first.x2);
		}

		tankToObject(first: Tank, second: Shape): number {
			return Math.atan2(second.y - first.y2, second.x - first.x2);
		}
	}
}
