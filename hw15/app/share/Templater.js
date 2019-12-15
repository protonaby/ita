export class Templater {
    constructor(url) {
        if (!!Templater.instance) {
            return Templater.instance;
        }

        Templater.instance = this;

        this.url = url;
        this.templateStr = '';
        this.getTemplate();

        return this;
    }

    getTemplate() {
        fetch(this.url).then(prom => prom.text())
            .then(txt => this.templateStr = txt)
            .then(() => console.log(this.templateStr));
    }

    getHTML(data) {
        let str = this.templateStr;
        data.forEach(ob => {
            str = str.replace(new RegExp(`{{${ob.name}}}`, 'g'), ob.value);
        });

        return str;
    }

}