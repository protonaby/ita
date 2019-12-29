export class TemplateHeader {

    static getHeaderTemplate() {
        return `<div class="ui fixed inverted menu flexWrap">
                  <div class="header item menu filter brand" data-filter="">Pet Shop</div>
                  <div class="item filter" data-filter="cat">Cats</div>
                  <div class="item filter" data-filter="dog">Dogs</div>
                  <div class="item filter" data-filter="bird">Birds</div>
                  <div class="item filter" data-filter="fish">Fish</div>
                  <div class="right menu">
                  <div class="item search">
                    <div class="ui transparent inverted left icon input">
                      <i class="search icon"></i>
                      <input class="searchInput" placeholder="Search" type="text">
                    </div>
                  </div>
                  </div>
                </div>`;
    }
}
