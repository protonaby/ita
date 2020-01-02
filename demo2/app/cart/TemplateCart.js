export class TemplateCart {

    static getCartItemTemplate(pet) {
        return `<div class="item capitalize">
                    <img class="ui small bordered rounded image cartImg" src="${pet.image}">
                    <div class="middle aligned content">
                    <div class="header">${pet.breed} ${pet.species}</div>
                    <div class="meta">
                      <span>Age: ${pet.age}</span>
                      <span>Gender: ${pet.gender}</span>
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
                    <div class="ui segment bg-white">
                        <h2 class="ui center dividing aligned icon header">
                          <i class="circular shopping cart icon"></i>
                          Shopping Cart
                        </h2>
                        <div class="cartPanel ui divided items bg-white">
                        </div>
                    </div>
                </div>`;
    }

    static getEmptyCartMessageTemplate() {
        return `<h3 class="ui block center aligned header">Your Shopping Cart is empty.</h3>`;
    }
}
