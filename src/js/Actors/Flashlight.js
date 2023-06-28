import {Actor, CollisionType, Graphic, Input, Scene, Sound, Vector, Timer} from "excalibur";
import {Resources} from "../resources";
import {Ghost} from "./Ghost";

export class FlashLight extends Actor {
    canDamage = false
    isColliding = false
    DAMAGE = 5
    canSeeHp = false

    constructor() {
        super({
            pos: new Vector(250, 0),
            width: 220,
            height: Resources.Flashlight.height,
            CollisionType: CollisionType.Active,

        })
    }

    onInitialize(engine) {
        //Handle Flashlight look
        this.game = engine
        this.graphics.use(Resources.Flashlight.toSprite())
        this.graphics.opacity = 0.4


    }

    onPreUpdate(){
                //Handle Flashlight Damage
                this.on('collisionstart', (event) => {
                    if(event.other instanceof Ghost){
                        this.isColliding = true
                        this.canDamage = true
                        this.canSeeHp = true
                        event.other.startDamage()
                        event.other.handleDamage(this.DAMAGE,this.canSeeHp)
                    }
                })
        
        
                this.on('collisionend', (event) => {
                    if(event.other instanceof Ghost){
                        this.isColliding = false
                        this.canDamage = false
                        event.other.stopDamage()
                    }
                })
    }





}