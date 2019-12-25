export class TemplateCards {
    static getPetTemplate(pet) {
        return `<div class="ui centered card">
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
                        <div class="ui basic blue button">Details</div>
                      </div>
                    </div>
                </div>`;
    }

    static getNavigationButtonsTemplate(maxPage) {
        return `<div class="ui main text container">
                    <div class="ui center aligned grid">
                      <div class="column">
                        <button class="ui labeled disabled icon button btn_prev">
                          <i class="left arrow icon"></i>
                          Previous
                        </button>
                        <div class="currentPage">1 of ${maxPage} </div>
                        <button class="ui right labeled icon button btn_next">
                          <i class="right arrow icon"></i>
                          Next
                        </button>
                      </div>
                    </div>
                  </div>`;
    }
}
