import { ModelNews } from './ModelNews.js';
import { ViewNews } from './ViewNews.js';

export class ControllerNews {
    constructor() {
        this.model = new ModelNews();
        this.view = new ViewNews();
    }

    getPets() {
        this.model.getPets()
            .then(newsObj => this.view.renderPets(newsObj));

    }
}
