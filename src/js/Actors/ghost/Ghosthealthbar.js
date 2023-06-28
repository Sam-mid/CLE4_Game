import {Actor, CollisionType, Graphic, Input, Scene, Sound, Vector, Timer, ImageSource, SpriteSheet, Animation, range, Engine, AnimationStrategy} from "excalibur";
import {Resources} from "../../resources.js"
import HPsheetimg from '../../../images/Ghost/ghosthealth.png'






export class HPBAR extends Actor {
//check for updates

isDamaged = false

//sprites for healthbar
    fullhealth
    HPstate2
    HPstate3
    HPstate4
    HoldHp

    currentHealth

    test

    HPBARsheet
 
    constructor(){
        super({
            scale: new Vector(60,60),
            pos: new Vector(0, -1000)
        })

        this.HPBARsheet = SpriteSheet.fromImageSource({
            image: Resources.GhostHP,
            grid: {
              rows: 1,
               columns: 4,
               spriteWidth: 24,
              spriteHeight: 4
           }
       })

       this.fullhealth = this.HPBARsheet.sprites[0]
       this.HPstate2 = this.HPBARsheet.sprites[1]
       this.HPstate3 = this.HPBARsheet.sprites[2]
       this.HPstate4 = this.HPBARsheet.sprites[3]

       this.currentHealth = this.HPBARsheet.sprites[0]

    }
    

    
    onInitialize(){
   // this.graphics.use(this.fullhealth)
   console.log(this.currentHealth)
    let useHealth = this.updateHealth()
    this.graphics.use(useHealth)

    }   

    updateHealth(tik){
        this.HoldHp = tik
        console.log(this.HoldHp)


        this.graphics.use(this.fullhealth)
        if(this.HoldHp === 20 || this.HoldHp === undefined){
            this.graphics.use(this.fullhealth)
            return this.currentHealth = this.graphics.use(this.fullhealth)
        }else if(this.HoldHp === 15){
            this.graphics.use(this.HPstate2)
            return this.currentHealth = this.graphics.use(this.HPstate2)
        }else if(this.HoldHp === 10){
            this.graphics.use(this.HPstate3)
            return this.currentHealth = this.graphics.use(this.HPstate3)
        }else if(this.HoldHp === 5 ){
            this.graphics.use(this.HPstate4)
            return this.currentHealth = this.graphics.use(this.HPstate4)
        }
        
        if(this.HoldHp === this.undefined){
            this.ShowCurrentHP()

        }

    }

    ShowCurrentHP(){
        this.graphics.use(this.currentHealth)
    }
}