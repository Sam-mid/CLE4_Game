import { Actor, Camera, CollisionType, Input, Vector, Scene, Direction, Shape } from "excalibur";
import {Resources} from "../../resources.js"
import {ParkObjects} from "./ParkObjects.js";

export class Tree extends ParkObjects{

    constructor(){
        super({
            width: Resources.Tree.width,
            height: Resources.Tree.height,
            scale: new Vector(0.2 ,0.2),
            CollisionType: CollisionType.Fixed
        })
    }

    onInitialize(engine){
        this.graphics.use(Resources.Tree.toSprite())
    }
}