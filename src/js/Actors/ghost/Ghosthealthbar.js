import {Actor, CollisionType, Graphic, Input, Scene, Sound, Vector, Timer} from "excalibur";
import {Resources} from "../../resources.js"

export class HPBAR extends Actor {
    constructor(){
        super({
            scale: new Vector(60,60),
            pos: new Vector(0, -1000)
        })
    }
    
    onInitialize(){
        this.graphics.use(Resources.GhostHP.toSprite())
    }
}