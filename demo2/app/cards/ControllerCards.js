import {ModelCards} from './ModelCards.js';
import {ViewCards} from './ViewCards.js';

export class ControllerCards {
    constructor({subscribe}) {
        this.model = new ModelCards();
        this.view = new ViewCards();
        this.subscribe = subscribe;
        this.subscribe('new-search', this.getPetsBySearch.bind(this));
        this.currentPage = 0;
        this.pageSize = 10;
        this.totalPages = 0;
        this.search = "";
    }

    loadPage() {
        this.model.loadPets()
            .then(() => {
                this.totalPages = Math.ceil(this.model.totalPets / this.pageSize);
                this.getPetsByCount(this.currentPage, this.pageSize);
                this.view.renderNavigation(this.totalPages);
                this.addListeners();
            });
        return this;
    }

    addListeners() {
        this.view.addListeners(
            this.handleClickPrevPageBtn.bind(this),
            this.handleClickNextPageBtn.bind(this));
    }

    getPetsByCount(start, count, search) {
        this.view.renderPets(this.model.getPetsByCount(start, count, search));
    }

    handleClickPrevPageBtn() {
        if (this.currentPage < 1) return;
        this.currentPage--;
        this.updatePets();
    }

    handleClickNextPageBtn() {
        if (this.currentPage > this.totalPages - 2) return;
        this.currentPage++;
        this.updatePets();
    }

    getPetsBySearch(search) {
        this.currentPage = 0;
        this.search = search;
        this.updatePets();
    }

    updatePets() {
        this.getPetsByCount(this.currentPage * this.pageSize, this.pageSize, this.search);
        this.totalPages = Math.ceil(this.model.totalPets / this.pageSize);
        this.view.updatePaginator(this.currentPage, this.totalPages);
    }
}
