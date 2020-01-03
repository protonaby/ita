export class TemplateHeader {

    static getHeaderTemplate() {
        return `<div class="ui fixed inverted menu flexWrap">
                  <div class="header item menu category brand" data-category="">Pet Shop</div>
                  <div class="item category" data-category="cat">Cats</div>
                  <div class="item category" data-category="dog">Dogs</div>
                  <div class="item category" data-category="bird">Birds</div>
                  <div class="item category" data-category="fish">Fish</div>
                  <div class="right menu">
                  <div class="item search">
                    <div class="ui transparent inverted left icon input">
                      <i class="search icon"></i>
                      <input class="searchInput" placeholder="Search" type="text">
                    </div>
                  </div>
                  <div class="item">
                    <div class="ui small green circular horizontal label petsInCart">0</div>
                    <i class="big shopping cart cartBtn icon"></i>
                  </div>
                  </div>
                </div>`;
    }
}
