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

}
