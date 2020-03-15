export default class ItemView {
    constructor(itemModel) {
        this.itemModel = itemModel;
    }

    toHtml() {
        return `
            <tr class ="tr">
                <td class="eng-word">
                    ${this.itemModel.english}
                </td>
                <td class="eng-word">
                ${this.itemModel.ukrainian}
                </td>
            </tr>`;
    }
}