import { Actor, CollisionType, Input, Scene, Sound, Vector } from "excalibur";
import { Logo } from "../Logo.js";
import {StartButton} from "../StartButton.js";

export class StartGame extends Scene{

    onInitialize(engine) {
        const logo = new Logo()
        this.add(logo)

        const startButton = new StartButton()
        this.add(startButton)


    }

}