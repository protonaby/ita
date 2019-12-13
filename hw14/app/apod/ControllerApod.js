import {ModelApod} from './ModelApod.js';
import {ViewApod} from './ViewApod.js';

export class ControllerApod {
    constructor() {
        this.model = new ModelApod();
        this.view = new ViewApod();
        this.view.addListenersToday(this.handleClickLoadTodayBtn.bind(this),
            this.handleClickPrevDayBtn.bind(this),
            this.handleClickNextDayBtn.bind(this));
        this.currentDate = new Date();
    }

    handleClickLoadTodayBtn() {
        this.currentDate = new Date();
        this.getAPOD(this.currentDate);
    }
    handleClickPrevDayBtn() {
        this.currentDate.setDate(this.currentDate.getDate() - 1);
        this.getAPOD(this.currentDate);
    }
    handleClickNextDayBtn() {
        this.currentDate.setDate(this.currentDate.getDate() + 1);
        this.getAPOD(this.currentDate);
    }

    getAPOD(date) {
        this.model.getAPOD(date)
            .then((apodObj) => {
                console.log(apodObj);
                this.view.renderAPOD(apodObj);
            });
    }
}