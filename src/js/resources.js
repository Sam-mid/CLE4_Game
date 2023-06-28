import {ImageSource, Sound, Resource, Loader, SpriteSheet, Animation, range, Rectangle} from 'excalibur'
import fishImage from '../images/fish.png'
//etc
import logo from '../images/Logo.png'
import StartButton from '../images/StartButton.png'

//Ghost
import ghost from '../images/ghostsketch.png'
import ghostDamage from '../images/ghostDamage.png'
import ghost2 from '../images/ghost2.png'
import ghostHPBar from '../images/Ghost/ghosthealth.png'
    //hp bars
    import hp1 from '../images/Ghost/states/hp1.png'
    import hp2 from '../images/Ghost/states/hp2.png'
    import hp3 from '../images/Ghost/states/hp3.png'
    import hp4 from '../images/Ghost/states/hp4.png'

//Map and objects
import map from '../images/Map/placeholdermap.png'
import bench from '../images/bench.png'
import plant from '../images/plant.png'
import background from '../images/background.png';
import train from '../images/train.png';
import road from '../images/map/road.png';
import tree from '../images/map/Tree.png';
import winScreen from "../images/WinScreen.jpeg";
import lossScreen from "../images/LossScreen.jpg";

//Player
import player from '../images/GuardSprite.png'
import playersheet from '../images/Player/GuardSheet.png'
import flashlight from '../images/flashlight.png'

//sounds
import bgmusic from '../Sounds/Music.mp3'
import { Ghost } from './Actors/Ghost'

const Resources = {
    Fish: new ImageSource(fishImage),
    Background: new ImageSource(background),
    Player: new ImageSource(player),
    Player: new ImageSource(player),
    Flashlight: new ImageSource(flashlight),
    Ghost: new ImageSource(ghost),
    Map: new ImageSource(map),
    Bench: new ImageSource(bench),
    Plant: new ImageSource(plant),
    Logo: new ImageSource(logo),
    StartButton : new ImageSource(StartButton),
    Train: new ImageSource(train),
    Road: new ImageSource(road),
    Tree: new ImageSource(tree),
    WinScreen: new ImageSource(winScreen),
    LossScreen: new ImageSource(lossScreen),

    PlayerSheet: new ImageSource(playersheet),

    GhostDamage: new ImageSource(ghostDamage),
    Ghost2: new ImageSource(ghost2),
    GhostHP: new ImageSource(ghostHPBar),

    HP1: new ImageSource(hp1),
    HP2: new ImageSource(hp2),
    HP3: new ImageSource(hp3),
    HP4: new ImageSource(hp4),
}


const Sounds = {
    BGMusic: new Sound(bgmusic)

}




const ResourceLoader = new Loader([Resources.Fish, Resources.Player, Resources.Background, Resources.Flashlight, Resources.Ghost, Resources.Map, Resources.Bench, Resources.Plant, 
    Resources.Logo, Resources.StartButton, Resources.Train, Resources.Road, Resources.Tree, Resources.GhostDamage, Resources.Ghost2, Resources.GhostHP,
    Resources.HP1, Resources.HP2, Resources.HP3,  Resources.HP4, Resources.PlayerSheet,
    Resources.Logo, Resources.StartButton, Resources.Train, Resources.Road, Resources.Tree, Resources.GhostDamage, Resources.Ghost2, Resources.GhostHP, Resources.WinScreen, Resources.LossScreen,
Sounds.BGMusic])

export { Resources, ResourceLoader, Sounds}