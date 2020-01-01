import {TemplateCart} from './TemplateCart.js';

export class ViewCart {

    constructor() {
        this.domBody = document.querySelector('body');
        this.domBody.insertAdjacentHTML("afterbegin", TemplateCart.getCartTemplate());
        this.domCartPanel = document.querySelector('.cartPanel');
    }

    addClickRemoveBtnsListeners(removeFunc) {
        this.domRmoveBtns = document.querySelectorAll('.removeBtn');
        if (this.domRmoveBtns)
            this.domRmoveBtns.forEach(btn => btn.addEventListener('click', (event) => {
                removeFunc(Number(event.target.dataset.id));
            }));
    }

    renderCart(pets) {
        this.domCartPanel.innerHTML = pets.map(pet => {
            return TemplateCart.getCartItemTemplate(pet);
        }).join('');

    }

    toggleCart() {
        $('.ui.sidebar')
            .sidebar('toggle');
    }

}
