import { TemplateNews } from './TemplateNews.js';

export class ViewNews {
    constructor() {
        this.domNews = document.querySelector('.news');
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
        return this.templater.getPetTemplate(article);
    }
}
