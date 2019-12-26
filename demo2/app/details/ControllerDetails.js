import {ModelDetails} from './ModelDetails.js';
import {ViewDetails} from './ViewDetails.js';

export class ControllerDetails {

    constructor({subscribe, notify}) {
        this.model = new ModelDetails();
        this.view = new ViewDetails();
        this.subscribe = subscribe;
        this.notify = notify;
        this.subscribe('click-details', this.displayDetails.bind(this));
    }

    displayDetails(pet){
        this.view.renderDetails(pet);
    }

}
