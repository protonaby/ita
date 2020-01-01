export class TemplateCart {

    static getCartItemTemplate(pet) {
        return `<div class="item capitalize">
                    <img class="ui small bordered rounded image cartImg" src="${pet.image}">
                    <div class="middle aligned content">
                    <div class="header">${pet.breed} ${pet.species}</div>
                    <div class="meta">
                      <span>Age: ${pet.age}</span>
                      <span> ${pet.gender}</span>
                    </div>
                    <div class="header">$${pet.price}</div>
                    <div class="extra">
                      <div class="ui right floated red basic button removeBtn" data-id="${pet.id}">
                        Remove from cart
                      </div>
                    </div>
                    </div>
                </div>`
    }

    static getCartTemplate() {
        return `<div class="ui bottom sidebar overlay bg-white cartContainer">
                    <div class="ui inverted segment bg-white">
                        <div class="cartPanel ui divided items bg-white">
                        </div>
                    </div>
                </div>`;
    }
}
