export class ViewApod {
    constructor() {
        this.domApod = document.querySelector('.apod');
        this.btnToday = document.querySelector('.btn__today');
        this.btnPrev = document.querySelector('.btn__prev');
        this.btnNext = document.querySelector('.btn__next');
    }

    renderAPOD(apod) {
        this.domApod.innerHTML = this.prepareApodArticle(apod);
    }

    prepareApodArticle(article) {
        return `<div class="card mb-3" style="width: 60rem;">
        <img src="${article.url}" class="card-img-top max-height-200" alt="${article.title}">
        <div class="card-body">
          <h5 class="card-title">${article.title}</h5>
          <p class="card-text">${article.explanation}</p>
          <a href="${article.hdurl}" class="btn btn-primary">Go to HD version</a>
        </div>
      </div>`;
    }

    addListenersToday(todayFunc, prevFunc, nextFunc) {
        this.btnToday.addEventListener('click', todayFunc);
        this.btnPrev.addEventListener('click', prevFunc);
        this.btnNext.addEventListener('click', nextFunc);
    }

}