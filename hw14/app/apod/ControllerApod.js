import {ModelApod} from './ModelApod.js';
import {ViewApod} from './ViewApod.js';

export class ControllerApod {
    constructor() {
        this.model = new ModelApod();
        this.view = new ViewApod();
        this.view.addListeners(this.handleClickSearchBtn.bind(this));
    }

    handleClickSearchBtn() {
        this.getAPOD();
    }

    getAPOD() {
        this.model.getAPOD()
            .then((apodObj) => {
                console.log(apodObj);
                this.view.renderAPOD(apodObj);
            });
    }
}