export default {
	getDistance: (a, b) => {
		return Math.hypot(b[1] - a[1], b[0] - a[0]);
	},
};

export enum serverConfigs {
	updateRate = 1e3 / 9,
	playerDecelerationRatio = 0.993,
	playerDefaultSpeed = 60,
	defaultTankHealth = 100,
}
