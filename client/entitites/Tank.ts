import { serverConfigs } from "../../utils";

export class Tank {
	public x: number;
	public y: number;
	public x2: number;
	public y2: number;
	public sid: number;
	public health: number;
	public speed: number;

	constructor(sid: number) {
		this.sid = sid;
		this.health = serverConfigs.defaultTankHealth;
		this.speed = serverConfigs.playerDefaultSpeed;
	}
}
