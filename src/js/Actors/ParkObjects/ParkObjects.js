import {Actor, Camera, CollisionType, Input, Vector, Scene, Direction, Shape} from "excalibur";
import {Resources} from "../../resources.js"
import {Bench} from "./Bench.js";

export class ParkObjects extends Actor {

    Object

    onInitialize(engine) {
    }

//waneer een instance van deze actor wordt geraakt door een andere actor registreer dan de collision
    onCollisionStart(event) {
        this.Object = event.other
        this.Object.collision = true
        console.log(this.Object.collision)
    }

}

