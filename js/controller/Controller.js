import Item from "../model/Item.js";

export default class Controller {
    constructor(itemListModel, itemListView) {
        this.itemListModel = itemListModel;
        this.itemListView = itemListView;
        this.itemListModel.setOnChangeCallback((e) => this.onChangeCallback(e));
        this.itemListView.setControllerOnAddItem(this.addItem);
        this.itemListView.setControllerOnDelItem(this.delItem);
        this.initOnModelChange();

        const engWord = document.getElementById('eng'),
            ukrWord = document.getElementById('ukr'),
            inputs = document.getElementsByClassName('input'),
            addBtn = document.getElementById('add-word__btn'),
            editBtn = document.getElementById('edit-word__btn'),
            searchBtn = document.getElementById('search-word__btn'),
            deleteBtn = document.getElementById('delete-word__btn'),
            table = document.getElementById('table');

        document.querySelector('#add-word__btn').addEventListener('click', (e) => itemListView.onAddItem(e));
        document.querySelector('#edit-word__btn').editEventListener('click', (e) => itemListView.onEditItem(e));
        document.querySelector('#delete-word__btn').deleteEventListener('click', (e) => itemListView.onDeleteItem(e));
        document.querySelector('#see-dict__btn').seeEventListener('click', (e) => itemListView.onSeeItem(e));
    }
    onChangeCallback() {
        document.querySelector('#table').innerHTML = this.itemListView.toHtml();
    }

    addItem(english, ukrainian) {
        let item = new Item(english, ukrainian);
        this.itemListModel.add(item);
    }

    delItem(id) {
        this.itemListModel.delete(id);
    }

    initOnModelChange() {
        let handler = {
            set: (obj, prop, val) => {
                obj[prop] = val;
                document.querySelector('#table').innerHTML = this.itemListView.toHtml();
                return true;
            }
        }
        this.itemListModel.items = new Proxy(this.itemListModel.items, handler);
    }
}