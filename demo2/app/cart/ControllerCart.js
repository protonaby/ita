import {ViewCart} from './ViewCart.js';
import {ModelCart} from "./ModelCart.js";

export class ControllerCart {

    constructor({subscribe, notify}) {
        this.view = new ViewCart();
        this.model = new ModelCart();
        this.notify = notify;
        this.subscribe = subscribe;
        this.subscribe('click-cart', this.toggleCart.bind(this));
        this.subscribe('click-buy-pet', this.handleBuyPet.bind(this));
        this.subscribe('click-cancel-buy-pet', this.handleCancelBuyPet.bind(this));
    }

    handleBuyPet(pet) {
        this.model.addPet(pet);
    }

    handleCancelBuyPet(pet) {
        this.model.removePet(pet.id);
    }

    toggleCart() {
        this.renderCart();
        this.view.toggleCart();
    }

    handleClickRemove(id) {
        this.notify('pet-updated', id);
        this.notify('click-cancel-buy-pet', this.model.getPet(id));
        this.model.removePet(id);
        this.renderCart();
    }

    handleClickOrder() {
        this.view.renderOrderForm();
        this.view.addClickBackBtnListener(this.handleClickBack.bind(this));
    }

    handleClickBack() {
        this.renderCart();
    }

    renderCart(){
        this.view.renderCart(this.model.pets);
        this.view.addClickRemoveBtnsListeners(this.handleClickRemove.bind(this));
        this.view.addClickOrderBtnListener(this.handleClickOrder.bind(this));
    }
}
