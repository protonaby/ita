export class ViewApod {
    constructor() {
        this.domApod = document.querySelector('.apod');
        this.btnSearch = document.querySelector('.btn__search');
    }

    renderAPOD(apod) {
        let apodStr = '';
        apodStr += this.prepareApodArticle(apod);
        this.domApod.innerHTML = apodStr;
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

    addListeners(searchFunc) {
        this.btnSearch.addEventListener('click', searchFunc);
    }

}