export default class Item {
    constructor(english, ukrainian) {
        this.id = Math.round(Math.random() * 100000).toString();
        this.english = english;
        this.ukrainian = ukrainian;
        this.onChangeCallback = null;
        return this.initOnModelChange();
    }



    setOnChangeCallback() {
        this.onChangeCallback = onChangeCallback;
    }

    initOnModelChange() {
        let handler = {
            set: (obj, prop, val) => {
                obj[prop] = val;
                if (this.onChangeCallback) this.onChangeCallback(this);
                return true;
            }
        }
        return new Proxy(this, handler);
    }
}