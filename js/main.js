const engWord = document.getElementById('eng'),
    ukrWord = document.getElementById('ukr'),
    inputs = document.getElementsByClassName('input'),
    addBtn = document.getElementById('add-word__btn'),
    table = document.getElementById('table');

let words, deleteBtn;

localStorage.length < 1 ? words = [] : words = JSON.parse(localStorage.getItem('words'));

table.innerHTML = `
    <tr class="tr">
    <td class="eng-word">Слово</td>
    <td class="eng-word"> - </td>
    <td class="eng-word">Переклад</td>
    <td ></td>
    <td ></td>
    </tr>
`

const addWordToTable = index => {
    table.innerHTML += `
    <tr class="tr">
        <td class="eng-word">${words[index].english}</td>
        <td class="eng-word"> - </td>
        <td class="ukr-word" contenteditable="false">${words[index].ukrainian}</td>
        <td><button class="btn-table" id="edit-word__btn">Редагувати</button></td>
        <td><button class="btn-table btn-delete" id="delete-word__btn">Видалити</button></td>
    </tr>
    `
}
words.forEach((element, i) => {
    addWordToTable(i);
})

function CreateWord(english, ukrainian) {
    this.english = english;
    this.ukrainian = ukrainian;
}

addBtn.addEventListener('click', () => {
    if (
        engWord.value.length < 1 ||
        ukrWord.value.length < 1 ||
        !isNaN(engWord.value) ||
        !isNaN(ukrWord.value)
    ) {
        for (let key of inputs) {
            key.classList.add('error');
        }
    } else {
        for (let key of inputs) {
            key.classList.remove('error');
        }
        words.push(new CreateWord(engWord.value, ukrWord.value));
        localStorage.setItem('words', JSON.stringify(words));
        addWordToTable(words.length - 1);
        engWord.value = null;
        ukrWord.value = null;
        addEvenDelete();
    }
});
const DeleteWord = e => {
    const rowIndex = e.target.parentNode.parentNode.rowIndex;
    e.target.parentNode.parentNode.parentNode.remove();
    words.splice(rowIndex, 1);
    localStorage.removeItem('words');
    localStorage.setItem('words', JSON.stringify(words));
}

const addEvenDelete = () => {
    if (words.length > 0) {
        deleteBtn = document.querySelectorAll('.btn-delete');
        for (let btn of deleteBtn) {
            btn.addEventListener('click', e => {
                DeleteWord(e);
            })
        }
    }
}

addEvenDelete();