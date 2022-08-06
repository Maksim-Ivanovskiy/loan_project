import {Slider, slider} from "./modules/index";


window.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider('.page', '.next');
    slider.render();
});