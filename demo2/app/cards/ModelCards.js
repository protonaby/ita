export class ModelCards {
    //todo emmet abbreviation
    constructor() {
        // this.urlBase = 'https://yevhverb.github.io/home-tasks/15/animals_en.json';
        // this.urlBase = 'https://maksv21.github.io/softserve/demo2/database/animals_en.json';
        // this.urlBase = 'https://protonaby.github.io/ita/hw16/animals_en.json';
        this.urlBase = 'https://protonaby.github.io/ita/hw16/animals_en_general.json';
    }

    getPets() {
        return fetch(this.urlBase)
            .then(res => res.json())
            .then(res => {
                res.forEach(pet => pet.age = this.formatAge(pet.birth_date));
                return res;
            });
    }

    formatAge(birthdayDate) {
        return ((Date.now() - birthdayDate)/ 1000 / 60 / 60 / 24 / 365).toFixed(1) + ' years';
    }

}