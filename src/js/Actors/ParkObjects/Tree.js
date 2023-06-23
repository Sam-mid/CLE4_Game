import { Actor, Camera, CollisionType, Input, Vector, Scene, Direction, Shape } from "excalibur";
import {Resources} from "../../resources.js"
import {ParkObjects} from "./ParkObjects.js";

export class Tree extends ParkObjects{

    constructor(){
        const circle = Shape.Circle(700);
        super({
            width: Resources.Tree.width,
            height: Resources.Tree.height,
            scale: new Vector(0.2 ,0.2),
            collider: circle,
            CollisionType: CollisionType.Fixed
        })
    }

    onInitialize(engine){
        this.graphics.use(Resources.Tree.toSprite())
    }

}