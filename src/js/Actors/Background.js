import { Actor, Camera, CollisionType, Input, Vector, Scene, Direction, Shape } from "excalibur";
import {Resources} from "../resources"

export class Background extends Actor{

    constructor() {
        super({
            pos: new Vector(-60, -100)
        });

        this.scale = new Vector(0.7, 0.7);
        this.graphics.use(Resources.Background.toSprite())
    }
}