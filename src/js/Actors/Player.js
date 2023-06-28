import { Actor, Camera, CollisionType, Input, Vector, Scene, Direction, Shape, SpriteSheet } from "excalibur";
import {Resources} from "../resources"
import { FlashLight } from "./Flashlight";
import { Wall } from "./Mapcollision/Wall";

export class Player extends Actor{

    //Spritesheet
    Idle
    FlashOn
    GuardSheet



    //Player stats
    ROTATION_SPEED = 0.05
    isItemAdded = false
    ITEM
    previousPos = new Vector(0, 0);



    constructor(x, y){
        
     const circle = Shape.Circle(55)


    super({
        pos: new Vector(x, y),  
            scale: new Vector(0.8, 0.8),
            rotation: 0.90,
            CollisionType: CollisionType.Active,
            collider: circle
        })
        this.GuardSheet = SpriteSheet.fromImageSource({
            image: Resources.PlayerSheet,
            grid: {
              rows: 2,
               columns: 1,
               spriteWidth: 192,
              spriteHeight: 192
           }

             })
             this.Idle = this.GuardSheet.sprites[1]
             this.FlashOn = this.GuardSheet.sprites[0]

        
    }

    onInitialize(engine){
        this.game = engine
        this.graphics.use(this.Idle)
        this.on('precollision', (event) => {
            if (event.other instanceof Wall){
                this.pos = this.previousPos;
            }
        })
    }


    
    onPreUpdate(engine){
        this.previousPos = this.pos.clone()
        this.movement(engine)
        this.screenShortcut()

        if(engine.input.keyboard.wasPressed(Input.Keys.Space)){
            this.useFlashLight()

        }


        //get player position
        if(engine.input.keyboard.wasPressed(Input.Keys.G)){
            console.log(this.pos)

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
            this.graphics.use(this.FlashOn)
        }else if(this.isItemAdded){
            this.removeChild(this.ITEM)
            this.isItemAdded = false
            console.log('Flashlight removed')
            this.graphics.use(this.Idle)

        }
    }




    screenShortcut(){

        let leftX = -1360
        let rightX = 1490
        if(this.pos.x < leftX){
            this.pos = new Vector(rightX, this.pos.y)
        } else if( this.pos.x > rightX){
            this.pos = new Vector(leftX, this.pos.y)
        }
    }

}