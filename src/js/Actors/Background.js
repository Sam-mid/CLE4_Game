import { Actor, Camera, CollisionType, Input, Vector, Scene, Direction, Shape } from "excalibur";
import {Resources} from "../resources"

export class Background extends Actor{

    onInitialize(engine){
        this.graphics.use(Resources.Map.toSprite())
    }
}