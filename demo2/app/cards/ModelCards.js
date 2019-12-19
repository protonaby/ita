export class ModelCards {

    constructor() {
        // this.urlBase = 'https://yevhverb.github.io/home-tasks/15/animals_en.json';
        // this.urlBase = 'https://maksv21.github.io/softserve/task15/animals_en.json';
        this.urlBase = 'https://protonaby.github.io/ita/hw16/animals_en.json';
    }

    getPets() {
        return fetch(this.urlBase)
            .then(res => res.json());
    }

}