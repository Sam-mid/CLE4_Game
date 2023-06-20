import { Actor, Input, Random, Vector, clamp, Timer, EdgeCollider, CollisionType } from "excalibur"
import { Resources } from "../../resources"


export class Wall extends Actor {
    constructor(startX, startY, endX, endY) {
        super()

        this._setName('wall')

        this.pos = new Vector(0, 0)

        const box = new EdgeCollider({
            begin: new Vector(startX, startY),
            end: new Vector(endX, endY),
        })
        this.collider.set(box);
        this.body.collisionType = CollisionType.Fixed;


    }
}