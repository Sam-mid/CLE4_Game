import { Actor, Camera, CollisionType, Input, Vector, Scene, Direction } from "excalibur";
import {Resources} from "../resources"

export class Ghost extends Actor{
   
    constructor(){
        super({
            pos: new Vector(0, 0),
            scale: new Vector(0.5, 0.5)
        })
    }
    
    onInitialize(){
        this.graphics.use(Resources.Ghost.toSprite())
    }
}