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

    addListener(detFunc) {
        this.btnsDetails = document.querySelectorAll('.dtlsBtn');
        this.btnsDetails.forEach(btn => btn.addEventListener('click', () => {
            detFunc(Number(btn.dataset.id));
        }));
    }
}
