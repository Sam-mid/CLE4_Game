import { Actor, Camera, CollisionType, Input, Vector, Scene, Direction, Shape } from "excalibur";
import {Resources} from "../resources"

export class WinImage extends Actor{

    constructor() {
        super({
            pos: new Vector(650, 350)
        });

        this.scale = new Vector(1.1, 1.1);
        this.graphics.use(Resources.WinScreen.toSprite())
    }
}