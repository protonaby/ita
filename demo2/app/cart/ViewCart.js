import {TemplateCart} from './TemplateCart.js';

export class ViewCart {

    constructor() {
        this.domBody = document.querySelector('body');
        this.domBody.insertAdjacentHTML("afterbegin", TemplateCart.getCartTemplate());
    }

    renderCart() {
        $('.ui.sidebar')
            .sidebar('toggle');
    }

}
