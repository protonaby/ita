import {Publisher} from './share/Publisher.js';
import {ControllerCards} from './cards/ControllerCards.js';
import {ControllerHeader} from './menu/ControllerHeader.js';

const publisher = new Publisher();
const cards = new ControllerCards(publisher.methods).loadPage();
const menu = new ControllerHeader(publisher.methods);