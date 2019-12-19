export class ModelCards {
    //todo add favicon
    //todo emmet abbreviation
    //todo count age from birth date
    constructor() {
        // this.urlBase = 'https://yevhverb.github.io/home-tasks/15/animals_en.json';
        // this.urlBase = 'https://maksv21.github.io/softserve/demo2/database/animals_en.json';
        // this.urlBase = 'https://protonaby.github.io/ita/hw16/animals_en.json';
        this.urlBase = 'https://protonaby.github.io/ita/hw16/animals_en_general.json';
    }

    getPets() {
        return fetch(this.urlBase)
            .then(res => res.json());
    }

}