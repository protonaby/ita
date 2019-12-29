import {ModelCards} from './ModelCards.js';
import {ViewCards} from './ViewCards.js';

export class ControllerCards {

    constructor({subscribe, notify}) {
        this.model = new ModelCards();
        this.view = new ViewCards();
        this.subscribe = subscribe;
        this.notify = notify;
        this.subscribe('new-search', this.loadCardsBySearch.bind(this));
        this.subscribe('click-prev', this.loadPrevPage.bind(this));
        this.subscribe('click-next', this.loadNextPage.bind(this));
        this.subscribe('click-filter', this.loadCardsBySearch.bind(this));
        this.subscribe('pet-updated', this.handlePetUpdated.bind(this));
        this.currentPage = 0;
        this.pageSize = 10;
        this.search = "";
    }

    get totalPages() {
        return Math.ceil(this.model.totalPets / this.pageSize);
    }

    loadCards() {
        this.model.loadPets().then(() => {
            this.renderPets();
        });
        return this;
    }

    loadNextPage() {
        if (this.currentPage > this.totalPages - 2) return;
        this.currentPage++;
        this.renderPets();
    }

    loadPrevPage() {
        if (this.currentPage < 1) return;
        this.currentPage--;
        this.renderPets();
    }

    loadCardsBySearch(search) {
        this.currentPage = 0;
        this.search = search;
        this.renderPets();
    }

    renderPets() {
        const pets = this.model.getPetsByCount(this.currentPage * this.pageSize, this.pageSize, this.search);
        this.view.renderPets(pets);
        this.addListeners();
        this.notify('cards-loaded', {currentPage: this.currentPage, totalPages: this.totalPages});
    }

    addListeners() {
        this.view.addDetailsListener(this.handleClickDetails.bind(this));
        this.view.addBuyPetListener(this.handleClickBuyPet.bind(this));
    }

    handleClickDetails(id) {
        this.notify('click-details', this.model.getPet(id));
    }

    handleClickBuyPet(id) {
        let pet = this.model.getPet(id);
        pet.inCart = !pet.inCart;
        if (pet.inCart) {
            this.notify('click-buy-pet', pet);
        } else
            this.notify('click-cancel-buy-pet', pet);
    }

    handlePetUpdated(id) {
        this.view.toggleBuyPetBtn(id);
    }
}
