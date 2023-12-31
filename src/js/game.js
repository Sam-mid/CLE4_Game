import '../css/style.css'
import { Actor, Engine, Vector, Color } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Room } from './Scenes/Room'
import { StartGame } from './Scenes/StartGame.js'
import {winScreen} from "./Scenes/winScreen.js";
import {lossScreen} from "./Scenes/lossSreen.js";

export class Game extends Engine {

    constructor() {
        super({ 
            viewport: {width:1664, height:936},
            resolution:{width: 1280, height: 720},
            antialiasing:false,
            backgroundColor: Color.Black,
         })
        this.start(ResourceLoader).then(() => this.startGame())
        ResourceLoader.suppressPlayButton = true
        ResourceLoader.backgroundColor = "#393d3c"
    }

    startGame() {
        console.log("start de game!")


        //Add scenes to the game
        //this.addScene ('Startmenu', new StartMenu)
        this.addScene('StartGame', new StartGame)
        this.addScene ('Room', new Room)
        this.addScene ('winScreen', new winScreen)
        this.addScene('lossScreen', new lossScreen)



        //Load first Scene
        this.goToScene('StartGame')


       //this.showDebug(true)
    }
}

new Game()
