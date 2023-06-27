import { Actor, Camera, CollisionType, Input, Vector, Scene, Direction, Shape } from "excalibur";
import {Resources} from "../resources"

export class LossImage extends Actor{

    constructor() {
        super({
            pos: new Vector(600, 350)
        });

        this.scale = new Vector(1.1, 1.1);
        this.graphics.use(Resources.LossScreen.toSprite())
    }
}