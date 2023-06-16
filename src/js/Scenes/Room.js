import { Actor, CollisionType, Input, Scene, Sound, Vector } from "excalibur";
import { Player } from "../Actors/Player";
import { FlashLight } from "../Actors/Flashlight";
import { Ghost } from "../Actors/Ghost";
import { Background } from "../Actors/Background";

export class Room extends Scene{
    onInitialize(engine){
        console.log('Room loaded')
        //Map
        let background = new Background()
        this.add(background)

        //Add player to the game
        let player = new Player(0, 0)
        this.add(player)

        //add test ghost
        let ghost = new Ghost
        this.add(ghost)

        //Camera follow
        this.camera.strategy.elasticToActor(player, 0.05, 0,5)
        
    }
    

}