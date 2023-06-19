import { Actor, CollisionType, Input, Vector, Shape, } from "excalibur";
import { Resources } from "./resources.js";

export class Logo extends Actor {

    constructor() {
        super({
            pos: new Vector(0, 0)
        });

        this.scale = new Vector(0.3, 0.3);
        this.pos = new Vector(650, 200)
        this.graphics.use(Resources.Logo.toSprite())
    }

}