export class TemplateNews {
    getNewsTemplate(pet) {
        return `<div class="card mb-3" style="width: 18rem;">
        <img src="${pet.image}" class="card-img-top" alt="${pet.species}">
        <div class="card-body">
            <h5 class="card-title">${pet.breed}</h5>
            <p class="card-text">${pet.gender}</p>
            <p class="card-text">${pet.price}</p>
        </div>
    </div>`;
    }
}