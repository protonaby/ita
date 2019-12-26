export class TemplateCards {

    static getPetTemplate(pet) {
        return `<div class="ui centered card capitalize">
                  <img src="${pet.image}">
                    <div class="content">
                        <a class="header">${pet.breed}</a>
                        <div class="meta">
                          <span class="date">${pet.species} ${pet.gender}</span>
                        </div>
                        <div class="description">
                          Age: ${pet.age}
                        </div>
                    </div>
                    <div class="extra content">
                        <a>
                          Price: $${pet.price}
                        </a>
                    </div>
                    <div class="extra content">
                      <div class="ui two buttons">
                        <div class="ui basic green button">Add to basket</div>
                        <div class="ui basic blue button dtlsBtn" data-id="${pet.id}">Details</div>
                      </div>
                    </div>
                </div>`;
    }
}
