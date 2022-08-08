
import {Slider, VideoPlayer} from "./modules/index";

window.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider('.page', '.next');
    slider.render();
    const player = new VideoPlayer('.showUp .play', '.overlay');
    player.play();
});