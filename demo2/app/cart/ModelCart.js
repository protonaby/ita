export class ModelCart {
    constructor() {
        this.pets = JSON.parse(sessionStorage.getItem('cart-storage')) || [];
    }

    getPet(id) {
        return this.pets.find(p => p.id === id);
    }

    addPet(pet) {
        this.pets.push(pet);
        this.updateSessionStorage();
    }

    removePet(id) {
        this.pets = this.pets.filter(p => p.id !== id);
        this.updateSessionStorage();
    }

    updateSessionStorage() {
        sessionStorage.setItem('cart-storage', JSON.stringify(this.pets));
    }
}