import {ViewHeader} from './ViewHeader.js';

export class ControllerHeader {

    constructor({subscribe, notify}) {
        this.view = new ViewHeader(this.keyUpInSearchInput.bind(this), this.clickFilter.bind(this));
        this.notify = notify;
        this.subscribe = subscribe;
        this.subscribe('click-buy-pet', this.handleBuyPet.bind(this));
        this.subscribe('click-cancel-buy-pet', this.handleCancelBuyPet.bind(this));
    }

    keyUpInSearchInput() {
        this.notify('new-search', this.view.search);
    }

    clickFilter(filter) {
        this.notify('click-filter', filter);
    }

    handleBuyPet() {
        this.view.addItemToCart();
    }

    handleCancelBuyPet() {
        this.view.removeItemFromCart();
    }
}
