import {TemplateHeader} from './TemplateHeader.js';

export class ViewHeader {

    constructor(keyListener, categoryListener, cartListener) {
        this.renderMenu();
        this.addListeners(keyListener, categoryListener, cartListener);
    }

    renderMenu() {
        this.domHeader = document.querySelector('header');
        this.domHeader.innerHTML = TemplateHeader.getHeaderTemplate();
        this.inputSearch = document.querySelector('.searchInput');
        this.categoryBtns = document.querySelectorAll('.category');
        this.cartCount = document.querySelector('.petsInCart');
        this.cartBtn = document.querySelector('.cartBtn');
    }

    addListeners(searchFunc, categoryFunc, cartFunc) {
        this.inputSearch.addEventListener('keyup', () => {
            this.resetCategoryBtns();
            searchFunc();
        });
        this.categoryBtns.forEach(btn => btn.addEventListener('click', () => {
            this.search = "";
            this.setActiveCategoryBtns(btn);
            categoryFunc(btn.dataset.category);
        }));
        this.cartBtn.addEventListener('click', () => {
            cartFunc();
        });
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
        this.cartCount.innerText = Number(this.cartCount.innerText) + 1;
    }

    removeItemFromCart() {
        this.cartCount.innerText = Number(this.cartCount.innerText) - 1;
    }
}
