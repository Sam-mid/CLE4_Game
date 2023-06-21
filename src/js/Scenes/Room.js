import { Actor, CollisionType, Input, Scene, Sound, Vector } from "excalibur";
import { Player } from "../Actors/Player";
import { FlashLight } from "../Actors/Flashlight";
import { Ghost } from "../Actors/Ghost";
import { Background } from "../Actors/Background";
import { Bench } from "../Actors/ParkObjects/Bench.js";
import {Plant} from "../Actors/ParkObjects/Plant.js";
import {Train} from "../Actors/train.js";
import {ParkObjects} from "../Actors/ParkObjects/ParkObjects.js";
import { Wall } from "../Actors/Mapcollision/Wall.js";
import {GhostSpawner} from "../Actors/ghostSpawner.js";


export class Room extends Scene{

    parkObjects = []

    onInitialize(engine){
        console.log('Room loaded')
        
        //Map
        let background = new Background()
        this.add(background)

        let train = new Train()
        this.add(train)



        let bench = new Bench()
        this.add(bench)

        let plant = new Plant()
        this.add(plant)

        this.parkObjects.push(bench)
        this.parkObjects.push(plant)



        //placeholder walls
        //Ik heb het voor nu in de scene geregeld, als dit beter kan update mij -Jerrel 

            // //linker muur 
            // let leftwall = new Wall(-1405,-575,-1405,570)
            // this.add(leftwall)

            // //rechter muur
            // let rightwall = new Wall(1533,-633,1547,645)
            // this.add(rightwall)

            //top wall
            let topwall = new Wall(-1405, -575, 1533, -633)
            this.add(topwall)

            //lower wall
            let lowerwall = new Wall(-1405,570,1533, 645)
            this.add(lowerwall)

        //Add player to the game
        let player = new Player(0, 0)
        this.add(player)

        //add test ghost
        let ghost = new Ghost()
        this.add(ghost)
        ghost.moveToNearest(this.parkObjects)

        let ghost2 = new Ghost()
        this.add(ghost2)
        ghost2.position = new Vector(400, 500)
        ghost2.moveToNearest(this.parkObjects)


       // let ghostSpawner = new GhostSpawner()
        //this.add(ghostSpawner)

        //Camera follow
        this.camera.strategy.elasticToActor(player, 0.05, 0,5)



    }
}