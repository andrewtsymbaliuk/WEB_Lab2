export default class View {
    constructor() {}

    showAllWords(words) {
        if (words.length == 0) {
            document.querySelector("#main-table").innerHTML = "<tr><td><p class = \"text\">Тут будуть збережені слова</p></td></tr>";
            return;
        }

        let tableHtmlText = "<tr class = \"text\"><th>№</th><th>Слово</th><th></th><th>Переклад</th></tr>";
        for (let i = 0; i < words.length; i++) {
            tableHtmlText += words[i].toHTML();
        }
        document.querySelector("#main-table").innerHTML = tableHtmlText;
    }

    clearInputUkr() {
        document.getElementById('getWordUkrInput').value = "";
    }

    setInputUkrText(text) {
        document.getElementById('getWordUkrInput').value = text;
    }

    clearInputEng() {
        document.getElementById('getWordEngInput').value = "";
    }

    setInputEngText(text) {
        document.getElementById('getWordEngInput').value = text;
    }

    printMessage(message) {
        alert(message);
    }

    getText(message) {
        return prompt(message);
    }
}