import {Actor, CollisionType, Input, Vector, Shape, Timer, GraphicsGroup, pixelSnapEpsilon, Color} from "excalibur";
import {Resources} from "../../resources";

export class ParkMeter extends Actor{
    constructor(){
        super({
            pos: new Vector(200, 200),
            width: 200,
            height: 500,
            color: Color.Blue

        })
    }

    onInitialize(){
        
    }
}