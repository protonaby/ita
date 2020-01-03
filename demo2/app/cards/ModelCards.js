export class ModelCards {
    constructor() {
        this.urlBase = 'https://protonaby.github.io/ita/hw16/animals_en_general.json';
        this.pets = 0;
        this.totalPets = 0;
    }

    loadPets() {
        return fetch(this.urlBase)
            .then(res => res.json())
            .then(res => {
                res.forEach(pet => pet.age = this.formatAge(pet.birth_date));
                res = res.sort(() => Math.random() - 0.5);
                this.pets = res;
                this.totalPets = this.pets.length;
                this.loadDataFromStorage();
                return res;
            });
    }

    loadDataFromStorage() {
        let petsInStorage = JSON.parse(sessionStorage.getItem('cart-storage')) || [];
        petsInStorage.forEach(p => {
            let pet = this.getPet(p.id);
            pet.inCart = true;
        });
    }

    getPetsByCount(start = 0, count = 10, search = "") {
        if (search.length === 0) {
            this.totalPets = this.pets.length;
            return this.pets.slice(start, start + count);
        } else {
            let searchResult = this.pets.filter(p =>
                p.species.toLowerCase().includes(search.toLowerCase())
                || p.breed.toLowerCase().includes(search.toLowerCase()));
            this.totalPets = searchResult.length;
            return searchResult.slice(start, start + count);
        }
    }

    getPet(id) {
        return this.pets.find(p => p.id === id);
    }

    formatAge(birthdayDate) {
        let age = moment.duration(moment(new Date()).diff(moment(birthdayDate)));
        let s = '';
        if (age.years() > 0)
            s += age.years() + ' years ';
        if (age.months() > 0)
            s += age.months() + ' months ';
        if (age.days() > 0)
            s += age.days() + ' days';
        return s;
    }

    togglePetInCart(id) {
        let pet = this.pets.find(p => p.id === id);
        pet.inCart = !pet.inCart;
    }

    isPetInCart(id) {
        return this.pets.find(p => p.id === id).inCart;
    }

    removeAllFromCart() {
        this.pets.forEach(pet => pet.inCart = false);
    }
}