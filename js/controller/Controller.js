export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.initOnModelChange();
        document.querySelector('#addButton').addEventListener('click', (e) => this.addWord(e));
        document.querySelector('#getWordUkrInput').addEventListener('keyup', (e) => this.keyUpInInput(e));
        document.querySelector('#getWordEngInput').addEventListener('keyup', (e) => this.keyUpInInput(e));
        document.querySelector('#main-table').addEventListener('click', (e) => this.changeWord(e));
    }

    addWord(e) {
        let ukr = document.querySelector('#getWordUkrInput').value;
        let eng = document.querySelector('#getWordEngInput').value;
        if (ukr === "") {
            this.view.setInputUkrText("Слово");
            return;
        }
        if (eng === "") {
            this.view.setInputEngText("Translate");
            return;
        }
        this.model.addWord(ukr, eng);
    }

    keyUpInInput(event) {
        if (event.keyCode === 13) {
            this.addWord(event);
        }
    }

    changeWord(e) {
        e = e || window.event;
        let target = e.target || e.srcElement;
        let id = target.name;
        if (target.tagName == 'INPUT') {
            this.model.clickCheckbox(id);
            this.view.showAllWords(this.model.words);
        } else if (target.id == 'delButton') {
            this.model.deleteWord(id);
        } else if (target.id == 'editButtonEng') {
            let newText = this.view.getText("");
            this.model.editWordEng(id, newText);
            this.view.showAllWords(this.model.words);
        } else if (target.id == 'editButtonUkr') {
            let newText = this.view.getText("");
            this.model.editWordUkr(id, newText);
            this.view.showAllWords(this.model.words);
        }
    }

    initOnModelChange() {
        let handler = {
            set: (obj, prop, val) => {
                obj[prop] = val;
                this.model.rewriteId();
                this.view.showAllWords(this.model.words);
                this.view.clearInputEng();
                this.view.clearInputUkr();
                return true;
            }
        }
        this.model.words = new Proxy(this.model.words, handler);
    }

}