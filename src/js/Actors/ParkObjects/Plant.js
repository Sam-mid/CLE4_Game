import { Actor, Camera, CollisionType, Input, Vector, Scene, Direction, Shape } from "excalibur";
import {Resources} from "../../resources.js"
import {ParkObjects} from "./ParkObjects.js";

export class Plant extends ParkObjects{

    constructor(){
        super({
            width: Resources.Plant.width,
            height: Resources.Plant.height,
            pos: new Vector(500, 0),
            scale: new Vector(1 ,1),
            CollisionType: CollisionType.Fixed
        })
    }

    onInitialize(engine){
        this.graphics.use(Resources.Plant.toSprite())
    }
}