import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import fishImage from '../images/fish.png'
import player from '../images/GuardSprite.png'
import flashlight from '../images/flashlightsketch.png'
import ghost from '../images/ghostsketch.png'

const Resources = {
    Fish: new ImageSource(fishImage),
    Player: new ImageSource(player),
    Flashlight: new ImageSource(flashlight),
    Ghost: new ImageSource(ghost)
}


const Sounds = {

}


const ResourceLoader = new Loader([Resources.Fish, Resources.Player, Resources.Flashlight, Resources.Ghost])

export { Resources, ResourceLoader }