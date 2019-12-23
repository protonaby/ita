import {TemplateCards} from './TemplateCards.js';

export class ViewCards {
    constructor() {
        this.domCards = document.querySelector('.cards');
        this.domHeader = document.querySelector('header');
        this.domNav = document.querySelectorAll('.navigation');
    }

    renderPets(pets) {
        this.domCards.innerHTML = pets.map(pet => {
            return TemplateCards.getPetTemplate(pet);
        }).join('');
    }

    renderHeader() {
        this.domHeader.innerHTML = TemplateCards.getHeaderTemplate();
    }

    renderNavigation(maxPage) {
        this.domNav.forEach(e => e.innerHTML = TemplateCards.getNavigationButtonsTemplate(maxPage));
    }

    addPrevNextPageListeners(prevFunc, nextFunc) {
        this.btnPrev = document.querySelectorAll('.btn_prev');
        this.btnNext = document.querySelectorAll('.btn_next');
        this.currentPage = document.querySelectorAll('.currentPage');

        this.btnPrev.forEach(e => e.addEventListener('click', prevFunc));
        this.btnNext.forEach(e => e.addEventListener('click', nextFunc));
    }
}
