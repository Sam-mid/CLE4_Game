import { Actor, CollisionType, Input, Vector, Shape, } from "excalibur";
import { Resources } from "./resources.js";

export class StartButton extends Actor {

    constructor() {
        super({
            width: Resources.StartButton.width,
            height: Resources.StartButton.height,
        });

        this.scale = new Vector(0.2, 0.2);
        this.pos = new Vector(650, 600)
        this.graphics.use(Resources.StartButton.toSprite())
    }

    onInitialize(engine) {
        this.engine = engine;
        this.on('pointerup', () => {
            this.resetGame();
        });
    }

    resetGame() {
        this.engine.goToScene('Room');
    }
}