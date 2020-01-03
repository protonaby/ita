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
        let cartHtml = '';
        if (!pets.length) {
            cartHtml = TemplateCart.getEmptyCartMessageTemplate();
        } else {
            cartHtml = pets.map(pet => {
                return TemplateCart.getCartItemTemplate(pet);
            }).join('');
            let totalCost = pets.reduce((a, b) => a + (b['price'] || 0), 0).toFixed(2);
            cartHtml += TemplateCart.getTotalCostTemplate(totalCost);
        }
        this.domCartPanel.innerHTML = cartHtml;
    }

    toggleCart() {
        $('.ui.sidebar')
            .sidebar('toggle');
    }

}
