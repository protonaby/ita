export class ModelCards {
    constructor() {
        this.urlBase = 'https://protonaby.github.io/ita/hw16/animals_en_general.json';
        this.pets = 0;
        this.totalSize = 0;
    }

    getPets() {
        return fetch(this.urlBase)
            .then(res => res.json())
            .then(res => {
                res.forEach(pet => pet.age = this.formatAge(pet.birth_date));
                this.pets = res;
                this.totalSize = this.pets.length;
                return res;
            });
    }

    getPetsByCount(start = 0, count = 10) {
        return this.pets.slice(start, start + count);
    }

    getPetsByCountAndSearch(search, start = 0, count = 10) {
        return this.pets.filter(p =>
            p.species.toLowerCase().includes(search.toLowerCase())
            || p.breed.toLowerCase().includes(search.toLowerCase())
            || p.gender.toLowerCase().includes(search.toLowerCase()))
            .slice(start, start + count);
    }

    formatAge(birthdayDate) {
        return ((Date.now() - birthdayDate) / 1000 / 60 / 60 / 24 / 365).toFixed(1) + ' years';
    }

}