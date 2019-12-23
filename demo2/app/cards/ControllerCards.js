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
                this.getPetsByCount(this.page, this.pageSize = 10);
                this.view.renderHeader();
                this.view.renderNavigation(this.maxPage);
                this.addListeners();
            });
    }

    addListeners() {
        this.view.addPrevNextPageListeners(this.handleClickPrevPageBtn.bind(this), this.handleClickNextPageBtn.bind(this));
    }

    getPetsByCount(start, count) {
        this.view.renderPets(this.model.getPetsByCount(start, count));
    }

    handleClickPrevPageBtn() {
        if (this.page > 0) {
            this.page--;
            this.getPetsByCount(this.page * this.pageSize, this.pageSize);
            this.view.btnNext.forEach(e => e.classList.remove("disabled"));
            if (this.page === 0)
                this.view.btnPrev.forEach(e => e.classList.add("disabled"));
            this.view.currentPage.forEach(e => e.innerHTML = `${this.page + 1} of ${this.maxPage}`);
        }
    }

    handleClickNextPageBtn() {
        if (this.page < this.maxPage - 1) {
            this.page++;
            this.getPetsByCount(this.page * this.pageSize, this.pageSize);
            this.view.btnPrev.forEach(e => e.classList.remove("disabled"));
            if (this.page === this.maxPage - 1)
                this.view.btnNext.forEach(e => e.classList.add("disabled"));
            this.view.currentPage.forEach(e => e.innerHTML = `${this.page + 1} of ${this.maxPage}`);
        }
    }
}
