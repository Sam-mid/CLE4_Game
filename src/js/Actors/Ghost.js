import { Actor, Camera, CollisionType, Input, Vector, Scene, Direction, Shape } from "excalibur";
import {Resources} from "../resources"

export class Ghost extends Actor{

    Health = 20
   
    constructor(){
        const circle = Shape.Circle(55)
        super({
            pos: new Vector(0, 0),
            scale: new Vector(0.5, 0.5),
            collider: circle,
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