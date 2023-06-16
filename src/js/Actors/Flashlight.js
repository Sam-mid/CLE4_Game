import { Actor, CollisionType, Graphic, Input, Scene, Sound, Vector } from "excalibur";
import { Resources } from "../resources";
import { Ghost } from "./Ghost";

export class FlashLight extends Actor{

    DAMAGE =  5

    constructor() {
        super({
            pos: new Vector(250, 0), 
            width: 200,
            height: Resources.Flashlight.height,
            CollisionType: CollisionType.Active,
            
        })
    }

    onInitialize(engine){
        this.graphics.use(Resources.Flashlight.toSprite())
        this.graphics.opacity =  0.5
        this.on('collisionstart', (event) => {
            this.dealDamage(event)
        })
    }

    onPreUpdate(){

    }

    dealDamage(event){
        if (event.other instanceof Ghost){
            event.other.hitByFlashlight()

        }
    }



}