export class TemplateNews {
    getPetTemplate(pet) {
        return `<div class="ui card">
            <div class="image">
              <img src="${pet.image}">
            </div>
            <div class="content">
                <a class="header">${pet.breed}</a>
                <div class="meta">
                  <span class="date">${pet.species} ${pet.gender}</span>
                </div>
                <div class="description">
                  Age: 1 year
                </div>
            </div>
            <div class="extra content">
                <a>
                <i class="user icon"></i>
                  Price: $${pet.price}
                </a>
            </div>
        </div>`
    }
}
