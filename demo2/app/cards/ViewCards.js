import { TemplateCards } from './TemplateCards.js';

export class ViewCards {
    constructor() {
        this.domCards = document.querySelector('.cards');
        this.templater = new TemplateCards();
    }

    renderPets(pets) {
        let petStr = pets.map(pet =>{ return this.templater.getPetTemplate(pet);}).join('');
        this.domCards.innerHTML = petStr;
    }

    preparePetsArticle(article) {
        return this.templater.getPetTemplate(article);
    }
}
