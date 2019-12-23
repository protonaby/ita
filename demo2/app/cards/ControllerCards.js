import {ModelCards} from './ModelCards.js';
import {ViewCards} from './ViewCards.js';

export class ControllerCards {
    constructor() {
        this.model = new ModelCards();
        this.view = new ViewCards();
        this.page = 0;
        this.pageSize = 10;
    }

    loadPage() {
        this.model.getPets()
            .then(() => {
                this.maxPage = Math.ceil(this.model.totalSize / this.pageSize);
                this.getPetsByCount(this.page, this.pageSize);
                this.view.renderHeader();
                this.view.renderNavigation(this.maxPage);
                this.addListeners();
            });
    }

    addListeners() {
        this.view.addListeners(this.handleClickPrevPageBtn.bind(this),
            this.handleClickNextPageBtn.bind(this),
            this.handleSearchInputReturnPress.bind(this));
    }

    getPetsByCount(start, count, search) {
        this.view.renderPets(this.model.getPetsByCount(start, count, search));
    }

    handleClickPrevPageBtn() {
        if (this.page > 0) {
            this.page--;
            this.getPetsByCount(this.page * this.pageSize, this.pageSize, this.view.searchInput.value);
            this.view.btnNext.forEach(e => e.classList.remove("disabled"));
            if (this.page === 0)
                this.view.btnPrev.forEach(e => e.classList.add("disabled"));
            this.view.currentPage.forEach(e => e.innerHTML = `${this.page + 1} of ${this.maxPage}`);
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    }

    handleClickNextPageBtn() {
        if (this.page < this.maxPage - 1) {
            this.page++;
            this.getPetsByCount(this.page * this.pageSize, this.pageSize, this.view.searchInput.value);
            this.view.btnPrev.forEach(e => e.classList.remove("disabled"));
            if (this.page === this.maxPage - 1)
                this.view.btnNext.forEach(e => e.classList.add("disabled"));
            this.view.currentPage.forEach(e => e.innerHTML = `${this.page + 1} of ${this.maxPage}`);
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    }

    handleSearchInputReturnPress(event) {
        event.preventDefault();
        let searchQuery = this.view.searchInput.value;
        this.page = 0;
        this.getPetsByCount(this.page, this.pageSize, searchQuery);
        this.maxPage = Math.ceil(this.model.totalSize / this.pageSize);
        this.view.currentPage.forEach(e => e.innerHTML = `${this.page + 1} of ${this.maxPage}`);
        this.view.btnPrev.forEach(e => e.classList.add("disabled"));
        if (this.maxPage !== 1) {
            this.view.btnNext.forEach(e => e.classList.remove("disabled"));
            this.view.btnNext.forEach(e => e.classList.add("enabled"));
        } else {
            this.view.btnNext.forEach(e => e.classList.remove("enabled"));
            this.view.btnNext.forEach(e => e.classList.add("disabled"));
        }
    }
}
