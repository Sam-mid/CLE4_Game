import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Room } from './Scenes/Room'

export class Game extends Engine {

    constructor() {
        super({ 
            viewport: {width:1280, height:720},
            resolution:{width: 1280, height: 720},
            antialiasing:false
         })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")




        //Add scenes to the game
        //this.addScene ('Startmenu', new StartMenu)
        this.addScene ('Room', new Room)


        //Load first Scene
        this.goToScene('Room')


        this.showDebug(true)
    }
}

new Game()
