import { Actor, CollisionType, Input, Scene, Sound, Vector } from "excalibur";
import { Resources } from "../resources";

export class FlashLight extends Actor{

    DAMAGE =  5

    constructor() {
        super({
            pos: new Vector(150, 0), 
            width: Resources.Flashlight.width,
            height: Resources.Flashlight.height,
            CollisionType: CollisionType.Active

        })
        this.v
    }

    onInitialize(engine){
        this.graphics.use(Resources.Flashlight.toSprite())
    }

    onPreUpdate(){

    }



}