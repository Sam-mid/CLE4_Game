import { Actor, Camera, CollisionType, Input, Vector, Scene, Direction, Shape } from "excalibur";
import {Resources} from "../resources"

export class Train extends Actor{

    constructor() {
        super({
            width: Resources.Train.width,
            height: Resources.Train.height,
            pos: new Vector(0, -910),
            CollisionType: CollisionType.Active,
        });

        this.scale = new Vector(0.7, 0.7);
        this.graphics.use(Resources.Train.toSprite())
    }
}