import {TemplateHeader} from './TemplateHeader.js';

export class ViewHeader {

    constructor(keyListener, filterListener) {
        this.renderMenu();
        this.addListeners(keyListener, filterListener);
    }

    renderMenu() {
        this.domHeader = document.querySelector('header');
        this.domHeader.innerHTML = TemplateHeader.getHeaderTemplate();
        this.inputSearch = document.querySelector('.searchInput');
        this.filters = document.querySelectorAll('.filter');
        this.cart = document.querySelector('.petsInCart');
    }

    addListeners(searchFunc, filterFunc) {
        this.inputSearch.addEventListener('keyup', () => {
            this.resetFilterBtns();
            searchFunc();
        });
        this.filters.forEach(e => e.addEventListener('click', () => {
            this.search = "";
            this.setActiveFilterBtn(e);
            filterFunc(e.dataset.filter);
        }));
    }

    get search() {
        return document.querySelector('.searchInput').value;
    }

    set search(value) {
        return document.querySelector('.searchInput').value = value;
    }

    resetFilterBtns() {
        this.filters.forEach(e => e.classList.remove("active"));
    }

    setActiveFilterBtn(e) {
        this.filters.forEach(e => e.classList.remove("active"));
        if (!e.classList.contains("brand"))
            e.classList.add("active");
    }

    addItemToCart() {
        this.cart.innerText = Number(this.cart.innerText) + 1;
    }

    removeItemFromCart() {
        this.cart.innerText = Number(this.cart.innerText) - 1;

    }
}
