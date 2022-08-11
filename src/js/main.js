import { ShowInfo, Download } from "./modules/index";

window.addEventListener('DOMContentLoaded', () => {

    new ShowInfo('.plus__content').init();

    new Download('.download').init();

});