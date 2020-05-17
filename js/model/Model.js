import Dictionary from "./Words.js"
export default class Model {
    constructor() {
        this.words = [];
    }

    addWord(ukr, eng) {
        let id = (this.words.length == 0 ? 1 : this.words[this.words.length - 1].id + 1);
        let word = new Dictionary(id, ukr, eng);
        this.words.push(word);
    }

    deleteWord(id) {
        const wordIndex = this.words.findIndex((word) => parseInt(word.id) === parseInt(id));
        this.words.splice(wordIndex, 1);
    }

    editWordEng(id, newText) {
        const wordIndex = this.words.findIndex((word) => parseInt(word.id) === parseInt(id));
        this.words[wordIndex].eng = newText;
    }

    editWordUkr(id, newText) {
        const wordIndex = this.words.findIndex((word) => parseInt(word.id) === parseInt(id));
        this.words[wordIndex].ukr = newText;
    }

    rewriteId() {
        for (let i = 0; i < this.words.length; i++) {
            this.words[i].id = i + 1;
        }
    }
}