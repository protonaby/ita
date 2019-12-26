import {Publisher} from './share/Publisher.js';
import {ControllerCards} from './cards/ControllerCards.js';
import {ControllerHeader} from './menu/ControllerHeader.js';
import {ControllerPaginator} from './paginator/ControllerPaginator.js';
import {ControllerDetails} from './details/ControllerDetails.js';

const publisher = new Publisher();
const cards = new ControllerCards(publisher.methods).loadCards();
const header = new ControllerHeader(publisher.methods);
const paginator = new ControllerPaginator(publisher.methods);
const details = new ControllerDetails(publisher.methods);