import {TemplateCards} from './TemplateCards.js';

export class ViewCards {
    constructor() {
        this.domCards = document.querySelector('.cards');
    }

    renderPets(pets) {
        this.domCards.innerHTML = pets.map(pet => {
            return TemplateCards.getPetTemplate(pet);
        }).join('');
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
}
