import ItemView from './ItemView.js';
export default class ItemListView {
    constructor(itemListModel) {
        this.itemListModel = itemListModel;
        this.controllerOnAddItem = null;
        this.controllerOnDelItem = null;
        document.querySelector('#table').addEventListener('click', (e) => this.onClick(e));
    }


    setControllerOnAddItem(controllerOnAddItem) {
        this.controllerOnAddItem = controllerOnAddItem;
    }

    setControllerOnDelItem(controllerOnDelItem) {
        this.controllerOnDelItem = controllerOnDelItem;
    }

    setControllerOnEditItem(controllerOnDelItem) {
        this.controllerOnEditItem = controllerOnEditItem;
    }

    onClick(e) {
        if (e.target.className === 'del-button') {
            this.controllerOnDelItem(e.target.dataset.id);
            return;
        }
    }

    onAddItem(e) {
        const word = prompt('Ведіть нове слово:', '');
        this.controllerOnAddItem(word);
    }

    toHtml() {
        const itemsHtml = this.itemListModel.items.map((item) => {
            const itemView = new ItemView(item);
            return itemView.toHtml();
        }).join("");
        return `<table border="1"><tr><th>Слово</th><th>Переклад</th></tr>${itemsHtml}</table>`;
    }
}