import { Actor, Camera, CollisionType, Input, Vector, Scene, Direction, Shape } from "excalibur";
import {Resources} from "../../resources.js"
import {ParkObjects} from "./ParkObjects.js";

export class Bench extends ParkObjects{

    constructor(){
        super({
            width: Resources.Bench.width,
            height: Resources.Bench.height,
            pos: new Vector(700, 300),
            scale: new Vector(0.4, 0.4),
            CollisionType: CollisionType.Fixed
        })
    }

    onInitialize(engine){
        let sprite = Resources.Bench.toSprite()
        sprite.flipVertical = true
        this.graphics.use(sprite)
    }
}