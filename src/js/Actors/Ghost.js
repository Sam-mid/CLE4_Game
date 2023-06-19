import { Actor, CollisionType, Input, Vector, Shape, } from "excalibur";
import { Resources } from "../resources";

export class Ghost extends Actor {
    HEALTH = 20;
    interval;
    targetActor; // Reference to the target actor

    constructor() {
        const circle = Shape.Circle(55);
        super({
            pos: new Vector(0, 0),
            scale: new Vector(0.5, 0.5),
            collider: circle,
            collisionType: CollisionType.Active,
        });
    }

    onInitialize() {
        this.graphics.use(Resources.Ghost.toSprite());
    }

    hitByFlashlight(DAMAGE) {
        console.log(`The flashlight gives ${DAMAGE}`);
        clearInterval(this.interval); // Clear any existing interval
        this.interval = setInterval(() => {
            this.updateHealthBar(DAMAGE);
        }, 500);
    }

    updateHealthBar(DAMAGE) {
        this.takeDamage(DAMAGE);
    }

    takeDamage(DAMAGE) {
        console.log(`Ghost: the amount taken is ${DAMAGE}`);
        console.log(`Ghost: The current health is ${this.HEALTH}`);

        this.HEALTH -= DAMAGE;
        console.log(this.HEALTH);

        this.HEALTH = Math.max(0, this.HEALTH);
        this.HEALTH = Math.min(20, this.HEALTH);

        if (this.HEALTH === 0) {
            this.kill();
            clearInterval(this.interval);
        }
    }
    8
}