import { Actor, Camera, CollisionType, Input, Vector, Scene, Direction } from "excalibur";
import {Resources} from "../resources"

export class Ghost extends Actor{

    Health = 20
   
    constructor(){
        super({
            pos: new Vector(0, 0),
            scale: new Vector(0.5, 0.5),
            width: Resources.Ghost.width,
            height: Resources.Ghost.height,
            CollisionType: CollisionType.Active
        })
    }
    
    onInitialize(){
        this.graphics.use(Resources.Ghost.toSprite())
    }


    hitByFlashlight(){    
        this.kill()
    }
}