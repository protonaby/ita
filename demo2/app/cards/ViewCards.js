import { TemplateCards } from './TemplateCards.js';

export class ViewCards {
    constructor() {
        this.domCards = document.querySelector('.cards');
        this.templater = new TemplateCards();
    }

    renderPets(pets) {
        let petStr = '';
        pets.forEach(pet => {
            petStr += this.preparePetsArticle(pet);
        });
        this.domCards.innerHTML = petStr;
    }

    preparePetsArticle(article) {
        return this.templater.getPetTemplate(article);
    }
}
