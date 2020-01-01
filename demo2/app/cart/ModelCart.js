export class ModelCart {
    constructor() {
        this.pets = [];
    }

    getPet(id){
        return this.pets.find(p => p.id === id);
    }

    removePet(id) {
        this.pets = this.pets.filter(p => p.id !== id);
    }
}