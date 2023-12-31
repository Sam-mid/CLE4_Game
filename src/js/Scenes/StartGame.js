import { Actor, CollisionType, Input, Scene, Sound, Vector } from "excalibur";
import { Logo } from "../Logo.js";
import {StartButton} from "../StartButton.js";
import {ResourceLoader} from "../resources.js";

//background
import bgmusic from "../../Sounds/menu.mp3"
import {Background} from "../Actors/Background.js";
import {Train} from "../Actors/train.js";


export class StartGame extends Scene{

    onInitialize(engine) {

        const background = new Background()
        background.pos  = new Vector(0,450)
        this.add(background)

        const logo = new Logo()
        this.add(logo)

        const startButton = new StartButton()
        this.add(startButton)
        ResourceLoader.backgroundColor = "#393d3c"


    }


    onActivate(){
        this.menumusic = new Audio(bgmusic)
        this.menumusic.loop = true
        this.menumusic.play()
        this.menumusic.volume = 0.3
    }

    onDeactivate(){
        this.menumusic.pause()
    }
}