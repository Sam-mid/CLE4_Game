import {Actor, CollisionType, Input, Vector, Shape, Timer, GraphicsGroup, pixelSnapEpsilon} from "excalibur";
import {Resources} from "../resources";
import {GhostSpawner} from "./ghostSpawner.js";
import { HPBAR } from "./ghost/Ghosthealthbar";


export class Ghost extends Actor {
    HEALTH
    ParkObjects
    livePoints = 20
<<<<<<< HEAD
    seeHP

=======
    randomSpriteIndex = Math.floor(Math.random() * 2);
>>>>>>> cad8fc6b49ada8f0d6fd9d358da0e0b600ae3cf2

    constructor() {
        const circle = Shape.Circle(700);
        super({
            scale: new Vector(0.06, 0.06),
            collider: circle,
            collisionType: CollisionType.Active,
        });

    }

    //when moving, look towards the target


    moveToNearest(array) {
        let target = this.findNearest(array)
        this.actions.meet(target, 100)
    }




    findNearest(array) {
        // loop through all objects
        for (let obs of array) {
            //choose a randome nummber in out the array
            let random = Math.floor(Math.random() * array.length)
            console.log(`the random number is ${random}`)

            return array[random]
        }
    }

    onInitialize(engine) {
        this.game = engine
        this.graphics.opacity = 0.7
        // choose between one of the two sprites for the ghost
        // Randomly choose between two sprites
        if (this.randomSpriteIndex === 0) {
            this.graphics.use(Resources.Ghost.toSprite());
        } else {
            this.graphics.use(Resources.Ghost2.toSprite());
        }
    }


    handleDamage(itemDAMAGE, canSeeHP) {
        //itemDAMAGE heeft de waarde gekregen van Flashlight, wil je dit veranderen check het daar
        this.showHP(canSeeHP)

        //Inplaats van timer rekent hij nu per 40 frames
        let frameCount = 0

        this.game.currentScene.engine.onPostUpdate = () => {
            frameCount++;

            // 40 staat voor dat het per 40 frames damage uitvoert, hoe hoger hoe langzamer
            if (frameCount % 80 === 0 && this.shouldApplyDamage) {
                this.applyDamage(itemDAMAGE)
                
            }
        }
    }

    applyDamage(itemDAMAGE) {
        
        //livePoints is meegekregen voor de geest atm is het 20
        //check handle damage voor info over itemDAMAGE
        this.livePoints -= itemDAMAGE
        console.log(this.livePoints)

        this.livePoints = Math.max(0, this.livePoints)
        this.livePoints = Math.min(20, this.livePoints)

        let tik = this.livePoints
        this.HEALTH.updateHealth(tik)


        if (this.livePoints === 0 && this.active) {
            this.shouldApplyDamage = false
            this.game.currentScene.updateScore()
            this.HEALTH = new HPBAR

            if (!this.isKilled()) {
                console.log(this.livePoints)
                this.kill()
            }

            
        }

    }

    handleDeath(){
        this.kill()
        this.game.currentScene.updateScore()
        console.log(this.livePoints)
    }


    //Wanneer de licht van de Item niet op de geest zit wordt dit uitgevoerd
    stopDamage() {
        this.shouldApplyDamage = false
        if (this.randomSpriteIndex === 0) {
            this.graphics.use(Resources.Ghost.toSprite());
        } else {
            this.graphics.use(Resources.Ghost2.toSprite());
        }
    }

    //Wanneer de licht van de Item op de geest zit wordt dit uitgevoerd
    startDamage() {
        this.shouldApplyDamage = true
        this.graphics.use(Resources.GhostDamage.toSprite());


    }

    showHP(){
        if(!this.seeHP) {
            this.seeHP = true
            this.HEALTH = new HPBAR
            this.addChild(this.HEALTH)
        }else if(this.seeHP){
            this.removeChild(this.HEALTH)
            this.seeHP = false


        }
    }

}