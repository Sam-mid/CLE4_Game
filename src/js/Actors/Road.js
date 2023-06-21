import { Actor, Camera, CollisionType, Input, Vector, Scene, Direction, Shape } from "excalibur";
import {Resources} from "../resources"

export class Road extends Actor{

    constructor() {
        super({
            pos: new Vector(0, 0)
        });

        this.scale = new Vector(3, 3);
        this.graphics.use(Resources.Road.toSprite())
    }
}