import {ViewHeader} from './ViewHeader.js';

export class ControllerHeader {

    constructor({notify}) {
        this.view = new ViewHeader(this.keyUpInSearchInput.bind(this));
        this.notify = notify;
    }

    keyUpInSearchInput() {
        this.notify('new-search', this.view.search);
    }
}
