import {Templater} from '../share/Templater.js';

export class ViewApod {
    constructor() {
        this.domApod = document.querySelector('.apod');
        this.btnToday = document.querySelector('.btn__today');
        this.btnPrev = document.querySelector('.btn__prev');
        this.btnNext = document.querySelector('.btn__next');
        this.templater = new Templater('./app/apod/templateNews.dp180');
    }

    renderAPOD(apod) {
        this.domApod.innerHTML = this.prepareApodArticle(apod);
    }

    prepareApodArticle(article) {
        return this.templater.getHTML(this.prepareArticleData(article));
    }

    prepareArticleData(article) {
        return Object.entries(article).map(el => {
            return {
                name: el[0],
                value: el[1]
            };
        });
    }

    addListenersToday(todayFunc, prevFunc, nextFunc) {
        this.btnToday.addEventListener('click', todayFunc);
        this.btnPrev.addEventListener('click', prevFunc);
        this.btnNext.addEventListener('click', nextFunc);
    }

}