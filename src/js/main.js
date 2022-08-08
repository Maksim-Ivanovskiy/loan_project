import {VideoPlayer} from "./modules/index";

window.addEventListener('DOMContentLoaded', () => {
    const player = new VideoPlayer('.showUp .play', '.overlay');
    player.play();
});