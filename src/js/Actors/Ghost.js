import { Actor, Camera, CollisionType, Input, Vector, Scene, Direction, Shape, Timer } from "excalibur";
import {Resources} from "../resources"
import { Game } from "../game";
import { FlashLight } from "./Flashlight";

export class Ghost extends Actor{

    HEALTH = 20 
    DAMAGE = FlashLight.DAMAGE


   
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
        console.log('ok')
    }

    takeDamage(){
        // console.log('dealing damage')
        // console.log(this.DAMAGE)


        // this.HEALTH -= this.DAMAGE
        // this.HEALTH = Math.max(0, this.HEALTH)
        // this.HEALTH = Math.min(20, this.HEALTH)


        // if (this.HEALTH === 0){
        //     clearInterval(interval)
        //     this.kill()
        // }
        // // if(this.HEALTH > 0){
        // //     this.HEALTH -= DAMAGE
        // //     console.log(this.HEALTH)
        // //  } else if (this.HEALTH === 0){
        // //     this.kill()
        // //      console.log('killed ghost')
        // //      clearInterval(interval)
        // // }
        
    }
}