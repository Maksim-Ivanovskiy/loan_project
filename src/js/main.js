import { Difference } from "./modules/index";

window.addEventListener('DOMContentLoaded', () => {
    
    new Difference('.officerold', '.officernew', '.officer__card-item').init();

});