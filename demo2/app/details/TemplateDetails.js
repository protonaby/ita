export class TemplateDetails {

    static getDetailsTemplate(pet) {
        return `<div class="ui modal">
                    <i class="close icon"></i>
                    <div class="header capitalize">
                        ${pet.breed} ${pet.species}
                    </div>
                    <div class="image content">
                        <div class="ui medium image">
                             <img src="${pet.image}">
                        </div>
                        <div class="description capitalize">
                            <div>Species: ${pet.species}</div>
                            <div>Breed: ${pet.breed}</div>
                            <div>Gender: ${pet.gender}</div>
                            <div>Weight: ${pet.weight} kg</div>
                            <div>Age: ${pet.age}</div>
                            <div>Color: ${pet.color}</div>
                            <div>Sterile: ${pet.is_sterile ? 'yes' : 'no'}</div>
                            <div>Hair: ${pet.hair}</div>
                            <div>Price: $${pet.price}</div>
                        </div>
                    </div>
                    <div class="actions">
                        <div class="ui black deny button">
                            Close
                        </div>
                        <div class="ui positive right labeled icon button">
                            Add to cart
                            <i class="checkmark icon"></i>
                        </div>
                    </div>
                </div>`;
    }
}
