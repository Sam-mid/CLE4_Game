import {Actor, CollisionType, Input, Scene, Sound, Timer, Vector, Label, FontUnit, Font, Color} from "excalibur";
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
import { Road } from "../Actors/Road.js";
import {Tree} from "../Actors/ParkObjects/Tree.js";

//resources
import {Resources, Sounds} from "../resources";




export class Room extends Scene{

    parkObjects = []
    score
    mylabel


    onInitialize(engine){
        console.log('Room loaded')
        
        //Map
        let road = new Road
        this.add(road)

        let background = new Background()
        this.add(background)

        let train = new Train()
        this.add(train)

        let bench = new Bench()
        this.add(bench)
        bench.pos = new Vector(1300, -250)

        let bench2 = new Bench()
        this.add(bench2)
        bench2.pos = new Vector(-600, -250)

        let plant = new Plant()
        this.add(plant)
        plant.pos = new Vector(-1200, -200)

        let plant2 = new Plant()
        this.add(plant2)
        plant2.pos = new Vector(-1300, 400)

        let tree = new Tree()
        this.add(tree)
        tree.pos = new Vector(1055, 230)

        let tree2 = new Tree()
        this.add(tree2)
        tree2.pos = new Vector(-300, 300)


        this.parkObjects.push(bench)
        this.parkObjects.push(bench2)
        this.parkObjects.push(plant)
        this.parkObjects.push(plant2)
        this.parkObjects.push(tree)
        this.parkObjects.push(tree2)


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

        let ghostSpawner = new GhostSpawner(this.parkObjects)
        this.add(ghostSpawner)
        ghostSpawner.pos = new Vector(-800,0)



        /*add test ghost
        let ghost = new Ghost()
        this.add(ghost)
        ghost.moveToNearest(this.parkObjects)

        let ghost2 = new Ghost()
        this.add(ghost2)
        ghost2.position = new Vector(400, 500)
        ghost2.moveToNearest(this.parkObjects)
        */

        //Add player to the game
        let player = new Player(0, 0)
        this.add(player)

        //Camera follow
        this.camera.strategy.elasticToActor(player, 0.05, 0,5)

        this.score = 0
        this.mylabel = new Label({
            text: `Score: ${this.score}`,
            pos: new Vector(550, 100),
            font: new Font({
                family: 'Georgia',
                size: 40,
                unit: FontUnit.px,
                color: Color.Black
            })
        })
        this.add(this.mylabel)

    }

    onPostUpdate(_engine, _delta) {
        const cameraX = this.camera.pos.x;
        const cameraY = this.camera.pos.y;
        const offsetX = 300; // X-offset van de scorelabel ten opzichte van de camera
        const offsetY = -300; // Y-offset van de scorelabel ten opzichte van de camera

// Bereken de nieuwe positie van de scorelabel gebaseerd op de camera positie
        const scoreLabelX = cameraX + offsetX;
        const scoreLabelY = cameraY + offsetY;

// Stel de nieuwe positie in voor de scorelabel
        this.mylabel.pos = new Vector(scoreLabelX, scoreLabelY);
    }

    updateScore() {
        this.score++
        this.mylabel.text = `Score: ${this.score}`
    }

    onActivate(){
        Sounds.BGMusic.loop = true
        Sounds.BGMusic.play(0.6)
    }

    onDeactivate(){
        Sounds.BGMusic.pause()
    }
}