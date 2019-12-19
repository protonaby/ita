import { TemplateNews } from './TemplateNews.js';

export class ViewNews {
    constructor() {
        this.domNews = document.querySelector('.news');
        this.btnSearch = document.querySelector('.btn__search');
        this.templater = new TemplateNews();
    }

    renderPets(news) {
        let newsStr = '';
        news.forEach(nws => {
            newsStr += this.preparePetsArticle(nws);
        });
        this.domNews.innerHTML = newsStr;
    }

    preparePetsArticle(article) {
        return this.templater.getNewsTemplate(article);
    }
}
