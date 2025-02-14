import { serverConfigs } from "../../utils";

/**
 * Defines a Tank.
 *
 * @export
 * @class Tank
 */
export class Tank {
	public x: number;
	public y: number;
	public x2: number;
	public y2: number;
	public sid: number;
	public health: number;
	public speed: number;

	/**
	 * Creates an instance of Tank.
	 * @param {number} sid
	 * @memberof Tank
	 */
	constructor(sid: number) {
		this.sid = sid;
		this.health = serverConfigs.defaultTankHealth;
		this.speed = serverConfigs.playerDefaultSpeed;
	}
}

