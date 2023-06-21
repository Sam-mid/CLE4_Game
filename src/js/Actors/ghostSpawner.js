import { Actor, CollisionType, Input, Vector, Shape, Random, Timer } from "excalibur";
import { Resources } from "../resources";
import { Ghost} from "./Ghost.js";

export class GhostSpawner extends Actor {

    constructor() {
        super();

        this.random = new Random(10000)
    }

    onInitialize(engine) {
        this.timer = new Timer({
            fcn: () => this.spawn(engine),
            interval: 1000,
            repeats: true
        })
        engine.currentScene.add(this.timer)
        this.timer.start()

    }

    spawn(engine) {
        console.log("spawn")

        const ghost = new Ghost(
            this.random.integer(0, 0),
            this.random.integer(0, 0)
        )
        engine.currentScene.add(ghost)
    }

}