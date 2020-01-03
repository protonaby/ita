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
        $('.ui.form')
          .form({
            on: 'blur',
            fields: {
              name: {
                identifier  : 'name',
                rules: [
                  {
                    type   : 'empty',
                    prompt : 'Please specify Name'
                  }
                ]
              },
              phone: {
                identifier  : 'phone',
                rules: [
                  {
                    type   : 'regExp[/^\\s*((\\+?\\s*(\\(\\s*)?3)?[\\s-]*(\\(\\s*)?8[\\s-]*)?(\\(\\s*)?0[\\s\\-\\(]*[1-9][\\s-]*\\d(\\s*\\))?([\\s-]*\\d){7}\\s*$/]',
                    prompt : 'Please specify a valid Phone Number'
                  }
                ]
              },
              address: {
                identifier  : 'address',
                rules: [
                  {
                    type   : 'empty',
                    prompt : 'Please specify Address'
                  }
                ]
              },
              email: {
                identifier  : 'email',
                rules: [
                  {
                    type   : 'email',
                    prompt : 'Please specify a valid E-mail'
                  }
                ]
              },
            }
          });
    }

    handleClickBack() {
        this.renderCart();
    }

    handleClickClose() {
        this.view.toggleCart();
    }

    renderCart(){
        this.view.renderCart(this.model.pets);
        this.view.addClickRemoveBtnsListeners(this.handleClickRemove.bind(this));
        this.view.addClickOrderBtnListener(this.handleClickOrder.bind(this));
        this.view.addClickCloseBtnListener(this.handleClickClose.bind(this));
    }
}
