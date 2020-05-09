export default class KeyboardButton {
    constructor ({main, shiftMode, code, buttonHandler}) {
        this.code = code;
        this.main = main;
        this.shiftMode = shiftMode;
        if (buttonHandler) {
            this.buttonHandler = buttonHandler
        }
    }

    createButton() {
        const button = document.createElement('div');
        button.dataset.keyCode = this.code;
        if (this.buttonHandler) {
            button.addEventListener('click', this.buttonHandler.bind(this));
        } else {
            button.classList.add('key');
            button.appendChild(this.createButtonChild(this.main, 'main'));
            button.appendChild(this.createButtonChild(this.shiftMode, 'shift-mode'));
        }
        return button
    }
    createButtonChild (key, classString) {
        const p = document.createElement('p');
        p.innerText = key;
        p.classList.add(classString);
        return p;
    }
}