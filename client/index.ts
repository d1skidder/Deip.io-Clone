// ? This is the main file, where everything comes together to work as a coherent mess.

import { UTILS } from "../utils";
import draw from "./web/render/draw";
import initGL from "./web/render/init";

const distanceOf = new UTILS.DistanceOf();
const directionOf = new UTILS.DirectionOf();

console.log("ok");
initGL();
draw();
