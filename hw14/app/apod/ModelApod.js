export class ModelApod {
    constructor() {
        this.apiKey = 'DEMO_KEY';
        this.link = `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}&date=`;
    }

    getAPOD(date = new Date()) {
        date = date.toJSON().slice(0, 10);
        return fetch(this.link + date)
            .then(data => {
                return data.json()
            });
    }


}