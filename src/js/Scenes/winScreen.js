import { Actor, CollisionType, Input, Scene, Sound, Vector } from "excalibur";
import { Logo } from "../Logo.js";
import {StartButton} from "../StartButton.js";
import {ResourceLoader} from "../resources.js";
import {WinImage} from "../Actors/winImage.js";

export class winScreen extends Scene{

    onInitialize(engine) {

        const winImage = new WinImage()
        this.add(winImage)


    }

}