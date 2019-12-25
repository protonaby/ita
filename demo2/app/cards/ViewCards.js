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
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    renderHeader() {
        this.domHeader.innerHTML = TemplateCards.getHeaderTemplate();
    }

    renderNavigation(maxPage) {
        this.domNav.forEach(e => e.innerHTML = TemplateCards.getNavigationButtonsTemplate(maxPage));
    }

    addListeners(prevFunc, nextFunc, searchFunc) {
        this.btnsPrev = document.querySelectorAll('.btn_prev');
        this.btnsNext = document.querySelectorAll('.btn_next');
        this.inputSearch = document.querySelector('.searchInput');

        this.btnsPrev.forEach(e => e.addEventListener('click', prevFunc));
        this.btnsNext.forEach(e => e.addEventListener('click', nextFunc));
        this.inputSearch.addEventListener("keyup", searchFunc);
    }

    get search() {
        return document.querySelector('.searchInput').value;
    }

    updatePaginator(currPage, totalPages) {
        this.setPrevEnabled(currPage > 0);
        this.setNextEnabled(currPage < totalPages - 1);
        this.setCurrentPage(currPage, totalPages);
    }

    setNextEnabled(enabled = true) {
        this.btnsNext.forEach(e => e.classList.toggle("disabled", !enabled));
    }

    setPrevEnabled(enabled = true) {
        this.btnsPrev.forEach(e => e.classList.toggle("disabled", !enabled));
    }

    setCurrentPage(page, maxPage) {
        this.divsCurrentPage = document.querySelectorAll('.currentPage');
        this.divsCurrentPage.forEach(e => e.innerHTML = `${page + 1} of ${maxPage}`);
    }
}
