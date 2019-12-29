import {TemplateDetails} from './TemplateDetails.js';

export class ViewDetails {

    constructor() {
        this.domDetails = document.querySelector('.details');
    }

    renderDetails(pet) {
        this.domDetails.innerHTML = TemplateDetails.getDetailsTemplate(pet);
        $('.ui.modal').modal('show')
            .modal('setting', 'onHidden', () => {
            const el = document.querySelector('.ui.dimmer.modals.page');
            el.parentNode.removeChild(el);
        });
    }

    addBuyPetListener(buyPetFunc) {
        this.btnBuyPet = document.querySelector('.dtlsBuyPetBtn');
        this.btnBuyPet.addEventListener('click', () => {
            this.btnBuyPet.classList.toggle('basic');
            this.btnBuyPet.innerText = this.btnBuyPet.innerText === 'Add to cart' ? 'In cart' : 'Add to cart';
            buyPetFunc(Number(this.btnBuyPet.dataset.id));
        });
    }


}
