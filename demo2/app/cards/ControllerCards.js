import { ModelCards } from './ModelCards.js';
import { ViewCards } from './ViewCards.js';

export class ControllerCards {
    constructor() {
        this.model = new ModelCards();
        this.view = new ViewCards();
    }

    getPets() {
        this.model.getPets()
            .then(petObj => this.view.renderPets(petObj));

    }
}
