import { ImageSource, Sound, Resource, Loader, SpriteSheet, Animation, range } from 'excalibur'
import fishImage from '../images/fish.png'
import player from '../images/GuardSprite.png'
import flashlight from '../images/flashlight.png'
import ghost from '../images/ghostsketch.png'
import map from '../images/Map/placeholdermap.png'
import bench from '../images/bench.png'
import plant from '../images/plant.png'


const Resources = {
    Fish: new ImageSource(fishImage),
    Player: new ImageSource(player),
    Flashlight: new ImageSource(flashlight),
    Ghost: new ImageSource(ghost),
    Map: new ImageSource(map),
    Bench: new ImageSource(bench),
    Plant: new ImageSource(plant)
}


const Sounds = {

}

const ResourceLoader = new Loader([Resources.Fish, Resources.Player, Resources.Flashlight, Resources.Ghost, Resources.Map, Resources.Bench, Resources.Plant])

export { Resources, ResourceLoader}