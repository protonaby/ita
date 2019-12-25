export class TemplateHeader {

    static getHeaderTemplate() {
        return `<div class="ui center aligned fixed inverted menu">
                    <div class="menu">
                      <div class="item search">
                        <div class="ui transparent inverted icon input">
                          <i class="search icon"></i>
                          <input class="searchInput" placeholder="Search" type="text">
                        </div>
                      </div>
                    </div>
                  </div>`;
    }
}
