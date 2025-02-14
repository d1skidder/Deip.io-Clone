import { Tank } from "./Tank";

/**
 * Defines Wall.
 *
 * @export
 * @class Wall
 */
export class Wall {
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    public type: number;

    /**
     * Creates an instance of Wall.
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     * @memberof Wall
     */
    constructor(x:number, y:number, w:number, h:number) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }

    /**
     * Checks if there is a collision between a tank and a wall.
     * TODO: Allow for other entities (e.g. shapes).
     * TODO: Account for Tank size (scale).
     *
     * @param {Tank} other
     * @return {boolean} 
     * @memberof Wall
     */
    checkCollision(other: Tank): boolean {
        if((other.x2 >= this.x && other.x2 <= this.x + this.width) && (other.y2 <= this.y && other.y2 >= this.y + this.height)) return true;
        return false;
    }
}