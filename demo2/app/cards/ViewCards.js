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

    addListeners(prevFunc, nextFunc, searchFunc) {
        this.btnPrev = document.querySelectorAll('.btn_prev');
        this.btnNext = document.querySelectorAll('.btn_next');
        this.divCurrentPage = document.querySelectorAll('.currentPage');
        this.inputSearch = document.querySelector('.searchInput');

        this.btnPrev.forEach(e => e.addEventListener('click', prevFunc));
        this.btnNext.forEach(e => e.addEventListener('click', nextFunc));
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
        enabled ? this.btnNext.forEach(e => e.classList.remove("disabled"))
            : this.btnNext.forEach(e => e.classList.add("disabled"));
    }

    setPrevEnabled(enabled = true) {
        enabled ? this.btnPrev.forEach(e => e.classList.remove("disabled"))
            : this.btnPrev.forEach(e => e.classList.add("disabled"));
    }

    setCurrentPage(page, maxPage) {
        this.divCurrentPage.forEach(e => e.innerHTML = `${page + 1} of ${maxPage}`);
    }
}
