import {ViewCart} from './ViewCart.js';

export class ControllerCart {

    constructor({subscribe, notify}) {
        this.view = new ViewCart();
        this.notify = notify;
        this.subscribe = subscribe;
        this.subscribe('click-cart', this.toggleCart.bind(this));
    }

    toggleCart() {
        this.view.renderCart();
    }
}
