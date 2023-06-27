import { Actor, CollisionType, Input, Scene, Sound, Vector } from "excalibur";
import { Logo } from "../Logo.js";
import {StartButton} from "../StartButton.js";
import {ResourceLoader} from "../resources.js";
import {LossImage} from "../Actors/lossImage.js";

export class lossScreen extends Scene{

    onInitialize(engine) {

        const lossImage = new LossImage()
        this.add(lossImage)


    }

}