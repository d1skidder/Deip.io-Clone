import type { Tank } from "./Tank";

/**
 * Defines the structure of a Shape.
 *
 * @export
 * @class Shape
 */
export class Shape {
    public sid: number;
    public x: number;
    public y: number;
    public size: number;
    public type: number;
    public spriteURL: string;

    /**
     * Creates an instance of Shape.
     * @param {number} sid
     * @param {number} x
     * @param {number} y
     * @param {number} size
     * @param {number} type
     * @memberof Shape
     */
    constructor(sid: number, x: number, y: number, size: number, type: number) {
        this.sid = sid;
        this.x = x;
        this.y = y;
        this.size = size;
        this.type = type;
    }

    checkCollision(other: Tank) {
        // TODO: Implement collision checking with all polygon types in the game.
    }
}