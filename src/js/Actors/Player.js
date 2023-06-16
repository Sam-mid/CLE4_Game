import { Actor, Camera, CollisionType, Input, Vector, Scene, Direction, Shape } from "excalibur";
import {Resources} from "../resources"
import { FlashLight } from "./Flashlight";

export class Player extends Actor{

    ROTATION_SPEED = 0.03
    isItemAdded = false
    ITEM

    const


    constructor(x, y){
        
     const circle = Shape.Circle(55)
    super({
        pos: new Vector(x, y),  
            scale: new Vector(0.8, 0.8),
            rotation: 0.90,
            CollisionType: CollisionType.Active,
            collider: circle
        })

    }

    onInitialize(engine){
        this.game = engine
        this.graphics.use(Resources.Player.toSprite())
        
    }


    
    onPreUpdate(engine){
        this.movement(engine)

        if(engine.input.keyboard.wasPressed(Input.Keys.Space)){
            this.useFlashLight()

        }


    }

    movement(engine){
                
       
        let speed = 0;
        
        
        //Handles forward movement
        if (
        engine.input.keyboard.isHeld(Input.Keys.W) ||
        engine.input.keyboard.isHeld(Input.Keys.Up)
        ){
            speed = 400;
        }

        if (
            engine.input.keyboard.isHeld(Input.Keys.S) ||
            engine.input.keyboard.isHeld(Input.Keys.Down)
            ){
                speed = -150;
            }

        //Handles the roatation of the player
        if (
        engine.input.keyboard.isHeld(Input.Keys.D) ||
        engine.input.keyboard.isHeld(Input.Keys.Right)
        ){
            this.rotation += this.ROTATION_SPEED
        }

        if (
        engine.input.keyboard.isHeld(Input.Keys.A) ||
        engine.input.keyboard.isHeld(Input.Keys.Left)
        ){
            this.rotation -= this.ROTATION_SPEED
        }

        if (engine.input.keyboard.isHeld(Input.Keys.ShiftLeft)){
            speed = 550
        }

        let direction = new Vector(
            Math.cos(this.rotation) * speed,
            Math.sin(this.rotation) * speed
          );
        
        this.vel = direction;

    }


    useFlashLight() {
        if(!this.isItemAdded) {
            this.isItemAdded = true
            this.ITEM = new FlashLight()
            this.addChild(this.ITEM)
        }else if(this.isItemAdded){
            this.removeChild(this.ITEM)
            this.isItemAdded = false
            console.log('Flashlight removed')

        }
    }

}