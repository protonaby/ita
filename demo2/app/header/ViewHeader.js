import {TemplateHeader} from './TemplateHeader.js';

export class ViewHeader {

    constructor(keyListener, categoryListener) {
        this.renderMenu();
        this.addListeners(keyListener, categoryListener);
    }

    renderMenu() {
        this.domHeader = document.querySelector('header');
        this.domHeader.innerHTML = TemplateHeader.getHeaderTemplate();
        this.inputSearch = document.querySelector('.searchInput');
        this.categoryBtns = document.querySelectorAll('.category');
        this.cart = document.querySelector('.petsInCart');
    }

    addListeners(searchFunc, categoryFunc) {
        this.inputSearch.addEventListener('keyup', () => {
            this.resetCategoryBtns();
            searchFunc();
        });
        this.categoryBtns.forEach(btn => btn.addEventListener('click', () => {
            this.search = "";
            this.setActiveCategoryBtns(btn);
            categoryFunc(btn.dataset.category);
        }));
    }

    get search() {
        return document.querySelector('.searchInput').value;
    }

    set search(value) {
        return document.querySelector('.searchInput').value = value;
    }

    resetCategoryBtns() {
        this.categoryBtns.forEach(e => e.classList.remove("active"));
    }

    setActiveCategoryBtns(e) {
        this.categoryBtns.forEach(e => e.classList.remove("active"));
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
