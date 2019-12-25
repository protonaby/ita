import {TemplateHeader} from './TemplateHeader.js';

export class ViewHeader {

    constructor(keyListener) {
        this.renderMenu();
        this.addListeners(keyListener);
    }

    renderMenu() {
        this.domHeader = document.querySelector('header');
        this.domHeader.innerHTML = TemplateHeader.getHeaderTemplate();
        this.inputSearch = document.querySelector('.searchInput');
    }

    addListeners(searchFunc) {
        this.inputSearch.addEventListener('keyup', searchFunc);
    }

    get search() {
        return document.querySelector('.searchInput').value;
    }

}
