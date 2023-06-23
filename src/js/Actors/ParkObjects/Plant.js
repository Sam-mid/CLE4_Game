import { Actor, Camera, CollisionType, Input, Vector, Scene, Direction, Shape } from "excalibur";
import {Resources} from "../../resources.js"
import {ParkObjects} from "./ParkObjects.js";

export class Plant extends ParkObjects{

    constructor(){
        const circle = Shape.Circle(700);
        super({
            width: Resources.Plant.width,
            height: Resources.Plant.height,
            scale: new Vector(0.08 ,0.08),
            collider: circle,
            CollisionType: CollisionType.Fixed
        })
    }

    onInitialize(engine){
        this.graphics.use(Resources.Plant.toSprite())
    }
}