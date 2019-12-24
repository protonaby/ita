import {ModelCards} from './ModelCards.js';
import {ViewCards} from './ViewCards.js';

export class ControllerCards {
    constructor() {
        this.model = new ModelCards();
        this.view = new ViewCards();
        this.currentPage = 0;
        this.pageSize = 10;
        this.totalPages = 0;
    }

    loadPage() {
        this.model.loadPets()
            .then(() => {
                this.totalPages = Math.ceil(this.model.totalPets / this.pageSize);
                this.getPetsByCount(this.currentPage, this.pageSize);
                this.view.renderHeader();
                this.view.renderNavigation(this.totalPages);
                this.addListeners();
            });
    }

    addListeners() {
        this.view.addListeners(
            this.handleClickPrevPageBtn.bind(this),
            this.handleClickNextPageBtn.bind(this),
            this.handleKeyUpInSearchInput.bind(this));
    }

    getPetsByCount(start, count, search) {
        this.view.renderPets(this.model.getPetsByCount(start, count, search));
    }

    handleClickPrevPageBtn() {
        if (this.currentPage < 1) return;
        this.currentPage--;
        this.updatePets();
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    handleClickNextPageBtn() {
        if (this.currentPage > this.totalPages - 2) return;
        this.currentPage++;
        this.updatePets();
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    handleKeyUpInSearchInput() {
        this.currentPage = 0;
        this.updatePets();
    }

    updatePets() {
        this.getPetsByCount(this.currentPage * this.pageSize, this.pageSize, this.view.search);
        this.totalPages = Math.ceil(this.model.totalPets / this.pageSize);
        this.view.updatePaginator(this.currentPage, this.totalPages);
    }
}
