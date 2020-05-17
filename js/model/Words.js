export default class Dictionary {
    constructor(id, ukr, eng) {
        this.id = id;
        this.ukr = ukr;
        this.eng = eng;
    }

    toHTML() {
        let textUkr = `<p class = "text">${this.ukr}</p>`;
        let textEng = `<p class = "text">${this.eng}</p>`;
        let delButton = `<button id = "delButton" name = ${this.id}>Delete</button>`;
        let editButtonUkr = `<button id = "editButtonUkr" name = ${this.id}>Edit</button>`;
        let editButtonEng = `<button id = "editButtonEng" name = ${this.id}>Edit</button>`;

        return `<tr><td>${this.id}</td><td>${textUkr}</td><td>${editButtonUkr}</td></td><td>${textEng}</td><td>${editButtonEng}</td><td>${delButton}</td></tr>`;
    }
}