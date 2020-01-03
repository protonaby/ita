export class TemplateCart {

    static getCartItemTemplate(pet) {
        return `<div class="ui raised segment">
                  <div class="ui items ">
                    <div class="ui item capitalize">
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
                      </div>
                  </div>
                </div>`
    }

    static getCartTemplate() {
        return `<div class="ui bottom sidebar overlay bg-white cartContainer">
                    <div class="ui segment bg-white">
                        <h2 class="ui center dividing aligned icon header">
                          <i class="circular shopping cart icon"></i>
                          <span class="cartHeader">Shopping Cart</span>
                        </h2>
                        <div class="cartPanel ui divided items bg-white">
                        </div>
                    </div>
                </div>`;
    }

    static getTotalCostTemplate(totalCost) {
        return `<div class="item">
                  <div class="ui fluid right aligned container">
                    <h2 class="ui header">Total cost: <span class="ui blue small header">$ ${totalCost}</span></h2>
                    <button class="ui green button orderBtn">Proceed to order</button>
                  </div>
                </div>`;
    }

    static getEmptyCartMessageTemplate() {
        return `<h3 class="ui block center aligned header">Your Shopping Cart is empty.</h3>`;
    }

    static getOrderFormTemplate() {
        return `<div class="ui container">
                  <form class="ui form">
                    <div class="field required">
                      <label>Name</label>
                      <input type="text" name="first-name" placeholder="Name">
                    </div>
                    <div class="field">
                      <label>Phone Number</label>
                      <input type="text" name="last-name" placeholder="Phone Number">
                    </div>
                    <div class="field required">
                      <label>Address</label>
                      <input type="text" name="last-name" placeholder="Address">
                    </div>
                    <div class="field required">
                      <label>Email</label>
                      <input type="text" name="last-name" placeholder="Email">
                    </div>
                      <div class="field">
                      <label>Notes</label>
                      <textarea rows="2"></textarea>
                    </div>
                    <button class="ui basic violet button orderBackBtn" type="submit">Back</button>
                    <button class="ui green button" type="submit">Submit order</button>
                  </form>
                </div>`;
    }
}
