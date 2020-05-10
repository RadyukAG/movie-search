import enKeys from "./keyboardKeys/enKeys";
import ruKeys from "./keyboardKeys/ruKeys";
import KeyboardButton from "./createButton/createButton";

/*
class Keyboard {
    constructor () {
    }
    addMainElementAndClasses () {
        const virtualKeyboardClass = '.virtual-keyboard {margin: 0 auto; display: flex; flex-wrap: wrap; width: 900px}';
        const letterDigitClass = '.letter-digit {margin: 5px 5px 20px 5px; width: 50px; height: 50px; display: flex; color: #ffffff; font-size: 14px; line-height: 14px; background-color: #A0A0A0; box-shadow: 0 5px #666; cursor: pointer}';
        const specialClass = '.special {margin: 5px; width: 95px; height: 50px; display: flex; color: #ffffff; font-size: 14px; line-height: 14px; background-color: #000000; flex-shrink: 2; box-shadow: 0 5px #666; cursor: pointer;}';
        const activeButtonClass = '.active {background-color: #00BFFF; transform: translateY(4px); box-shadow: 0 1px #666}}';
        const specialButtonClass = '.special-button {background: #303030}';
        const altClass = '.main-alt {margin: auto}';
        const rusClass = '.rus {margin: auto}';
        const rusAltClass = '.rus-alt {margin: auto}';
        const main = '.main {margin: auto}';
        const specialContent = '.special-content {margin: auto}';
        const hidden = '.hidden {display: none}';
        const infoClass = '.info {display: block; width: 500px; margin: 50px auto 0 auto; font-size: 14px;}'
        const inputFieldClass = '.input-field {display: block; margin: 0 auto 30px auto; width: 900px; min-height: 200px}';
        const arrowUpClass = '.arrow-up {display: inline-block; width: 24px; height: 24px; margin: auto; background: url(img/triangle.png) no-repeat 0 0;}'
        const arrowDownClass = '.arrow-down {display: inline-block; width: 24px; height: 24px; margin: auto; background: url(img/triangle.png) no-repeat 0 0; transform: rotate(180deg)}'
        const arrowLeftClass = '.arrow-left {display: inline-block; width: 24px; height: 24px; margin: auto; background: url(img/triangle.png) no-repeat 0 0; transform: rotate(270deg)}'
        const arrowRightClass = '.arrow-right {display: inline-block; width: 24px; height: 24px; margin: auto; background: url(img/triangle.png) no-repeat 0 0; transform: rotate(90deg)}'
        this.inputField = document.createElement('textarea');
        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = `${hidden} ${altClass} ${rusAltClass} ${virtualKeyboardClass} ${letterDigitClass} ${specialClass} ${activeButtonClass} ${specialButtonClass} ${main} ${specialContent} ${arrowUpClass}`;
        style.innerHTML += `${rusClass} ${inputFieldClass} ${arrowDownClass} ${arrowLeftClass} ${arrowRightClass} ${infoClass}`;
        const head = document.querySelector('head');
        this.inputField.classList.add('input-field');
        head.append(style);
        const body = document.querySelector('body');
        this.virtualKeyboard = document.createElement('div');
        this.virtualKeyboard.className = 'virtual-keyboard';
        const info = document.createElement('span');
        info.innerHTML = '<p>Клавиатура создана на Windows 7. \nСмена языка - alt + shift.</p>';
        info.classList.add ('info');
        body.append(this.inputField);
        body.append(this.virtualKeyboard);
        body.append(info);
    }

    createElemCollections() {
        this.sortByMain = {};
        this.mainElements = document.getElementsByClassName('main');
        for (let i = 0; i < this.mainElements.length; i++) {
            this.sortByMain[this.mainElements[i].innerText] = i;
        }
        this.sortByAlt = {}
        this.altElements = document.getElementsByClassName('main-alt');
        for (let i = 0; i < this.altElements.length; i++) {
            this.sortByAlt[this.altElements[i].innerText] = i;
        }
        this.sortByRus = {};
        this.rusElements = document.getElementsByClassName('rus');
        for (let i = 0; i < this.rusElements.length; i++) {
            this.sortByRus[this.rusElements[i].innerText] = i;
        }
        this.sortByRusAlt = {};
        this.rusAltElements = document.getElementsByClassName('rus-alt');
        for (let i = 0; i < this.rusAltElements.length; i++) {
            this.sortByRusAlt[this.rusAltElements[i].innerText] = i;
        }
        this.specButtons = document.getElementsByClassName('special');
        this.specButtonsElements = {};
        for (let i = 0; i < this.specButtons.length; i++) {
            this.specButtonsElements[this.specButtons[i].dataset.keyCode] = i;
        }
        if (localStorage.getItem('langRus') != null) {
            this.langRus = localStorage.getItem('langRus')
        } else {
            this.langRus = 'false';
        }

        if (this.langRus === 'true') {
            for (let i = 0; i < this.mainElements.length; i++) {
                this.mainElements[i].classList.add('hidden');
            }
        } else {
            for (let i = 0; i < this.rusElements.length; i++) {
                this.rusElements[i].classList.add('hidden');
            }
        }
        this.digitsNLetters = document.getElementsByClassName('letter-digit');
        for (let i = 0; i < this.altElements.length; i++) {
            this.altElements[i].classList.add('hidden');
        }
        for (let i = 0; i < this.rusAltElements.length; i++) {
            this.rusAltElements[i].classList.add('hidden');
        }
        this.capsLock = false;
        this.shift = false;
        this.alt = false;
        document.addEventListener('keydown', this.pressButton.bind(this));
        document.addEventListener('keyup', this.buttonUp.bind(this));
        document.addEventListener('mousedown', this.mouseDown.bind(this));
        document.addEventListener('mouseup', this.mouseUp.bind(this));
    }    
    setElemStyle (style) {
        this.style = style;
    }
    createElem(name, altName, rusName, altRusName, mainClass = 'main', data) {
        let newButton = document.createElement('div');
        newButton.className = this.style;
        if (data) {
            [newButton.dataset.keyCode, newButton.dataset.name] = data;
        }
        newButton.innerHTML = `<p class='${mainClass}'>${name}</p>`;
        if (altName) {
        newButton.innerHTML += `<p class='main-alt'>${altName}</p>`;
        } 
        if (rusName) {
            newButton.innerHTML += `<p class="rus">${rusName}</p>`;
        }
        if (altRusName) {
            newButton.innerHTML += `<p class="rus-alt">${altRusName}</p>`;
        }
        this.button = newButton;
    }
    setElemWidth(n) {
        this.button.style.width = n + 'px';
    }
    placeButton() {
        this.virtualKeyboard.append(this.button);
    }
    mouseDown(e) {
        e.preventDefault();
        let button;
        if (e.target.tagName === 'P') {
            if (e.target.closest('div')) {
                button = e.target.closest('div');
            } else {return}
        } else if (e.target.classList.contains('letter-digit') || e.target.classList.contains('special')){
            button = e.target;
        } else {
            return
        }
        const obj = {};
        button.classList.add('active');
        obj.key = button.dataset.name ? button.dataset.name : button.innerText;
        obj.keyCode = button.dataset.keyCode;
        this.pressButton(obj);
    }
    mouseUp(e) {
        let button;
        if (e.target.tagName === 'P') {
            if (e.target.closest('div')) {
                button = e.target.closest('div');
            } else {return}
        } else if (e.target.classList.contains('letter-digit') || e.target.classList.contains('special')){
            button = e.target;
        } else {
            return
        }
        button.classList.remove('active');
        const obj = {};
        obj.key = button.dataset.name ? button.dataset.name : button.innerText;
        obj.keyCode = button.dataset.keyCode;
        this.buttonUp(obj);
    }
    pressButton(e) {
        !e.preventDefault ? false : e.preventDefault();
        this.inputField.focus();
        const char = e.key;
        const keyCode = e.keyCode;
        if (this.langRus === 'true') {
            this.mainSort = this.sortByRus;
            this.altSort = this.sortByRusAlt;
        } else {
            this.mainSort = this.sortByMain;
            this.altSort = this.sortByAlt;
        }
        if (char.length > 1 || char === ' ') {
            if (e.code) {
                this.specButtonEffect(keyCode, e.code);
            } else {
                this.specButtonEffect(keyCode, char);
            }
        } else {
            switch (true) {
                case this.capsLock && this.shift:
                    this.digitsNLetters[this.mainSort[char]].classList.add('active');
                    this.inputField.value += this.digitsNLetters[this.mainSort[char]].innerText;    
                    break;
                case this.capsLock:
                    this.digitsNLetters[this.mainSort[char.toLowerCase()]].classList.add('active');
                    this.inputField.value += this.digitsNLetters[this.mainSort[char.toLowerCase()]].innerText.toUpperCase();
                    break;
                case this.shift:
                    this.digitsNLetters[this.altSort[char]].classList.add('active');
                    this.inputField.value += this.digitsNLetters[this.altSort[char]].innerText
                    break;
                default:
                    if (this.digitsNLetters[this.mainSort[char]]) {
                        this.digitsNLetters[this.mainSort[char]].classList.add('active');
                        this.inputField.value += this.digitsNLetters[this.mainSort[char]].innerText;
                    } else {
                        return
                    }   
            }
        }
    }

    moveCursorTo(pos) {
        this.inputField.selectionStart = pos;
        this.inputField.selectionEnd = pos;
    }
    tabEffect() {
        this.specButtons[this.specButtonsElements[9]].classList.add('active')
        const {value: value, selectionStart: start, selectionEnd: end} = this.inputField;
        this.inputField.value = `${value.slice(0, start)}\t${value.slice(end)}`;
        this.moveCursorTo(start+1);
    }
    enterEffect() {
        this.specButtons[this.specButtonsElements[13]].classList.add('active');
        const {value: value, selectionStart: start, selectionEnd: end} = this.inputField;
        this.inputField.value = `${value.slice(0, start)}\n${value.slice(end)}`;
        this.moveCursorTo(start+1);
    }
    capsLockEffect() {
        if (this.capsLock) {
            this.capsLock = false;
            this.specButtons[this.specButtonsElements[20]].style.backgroundColor = null;
        } else {
            this.capsLock = true;
            this.specButtons[this.specButtonsElements[20]].style.backgroundColor = '#90EE90';
        }
    }
    rightShiftEffect() {
        this.shift = true;
        if (this.alt) {
            this.changeLang();
        }
        this.specButtons[this.specButtonsElements[10000]].classList.add('active');
        this.shiftModeOn()
    }
    leftShiftEffect() {
        this.shift = true;
        if (this.alt) {
            this.changeLang();
        }
        this.specButtons[this.specButtonsElements[16]].classList.add('active');
        this.shiftModeOn()
    }
    shiftModeOn() {
        if (this.langRus === 'true') {
            for (let i = 0; i < this.rusElements.length; i++) {
                this.rusElements[i].classList.add('hidden');
            }
            for (let i = 0; i < this.rusAltElements.length; i++) {
                this.rusAltElements[i].classList.remove('hidden');
            }
        } else {
            for (let i = 0; i < this.altElements.length; i++) {
                this.altElements[i].classList.remove('hidden');
            }
            for (let i = 0; i < this.mainElements.length; i++) {
                this.mainElements[i].classList.add('hidden');
            }
        }
    }
    shiftModeOff() {
        if (this.langRus === 'true') {
            for (let i = 0; i < this.rusElements.length; i++) {
                this.rusElements[i].classList.remove('hidden');
            }
            for (let i = 0; i < this.rusAltElements.length; i++) {
                this.rusAltElements[i].classList.add('hidden');
            }
        } else {
            for (let i = 0; i < this.altElements.length; i++) {
                this.altElements[i].classList.add('hidden');
            }
            for (let i = 0; i < this.mainElements.length; i++) {
                this.mainElements[i].classList.remove('hidden');
            }
        }
    }


    changeLang() {
        this.langRus = this.langRus === 'true' ? 'false' : 'true';
        localStorage.setItem('langRus', this.langRus);
        if (this.langRus === 'true') {
            for (let i = 0; i < this.mainElements.length; i++) {
                this.mainElements[i].classList.add('hidden');
            }
            for (let i = 0; i < this.rusElements.length; i++) {
                this.rusElements[i].classList.remove('hidden');
            }
            for (let i = 0; i < this.altElements.length; i++) {
                this.altElements[i].classList.add('hidden');
            }
        } else {
            for (let i = 0; i < this.mainElements.length; i++) {
                this.mainElements[i].classList.remove('hidden');
            }
            for (let i = 0; i < this.rusElements.length; i++) {
                this.rusElements[i].classList.add('hidden');
            }
            for (let i = 0; i < this.rusAltElements.length; i++) {
                this.rusAltElements[i].classList.add('hidden');
            }
        }
    }

*/

const rowsOrder = [
    ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Delete'],
    ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backspace'],
    ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash', 'Enter'],
    ['ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
    ['ControlLeft', 'Win', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'],
  ];

export default function createKeyboard(method) {
    const keyboard = method('div', 'keyboard');
    const header = method('div', 'keyboard__header');
    header.insertAdjacentHTML('afterbegin', '<p class="keyboard__title">Virtual keyboard</p><span class="keyboard__close-button"></span>');
   // header.insertAdjacentElement('beforeend', '');
    keyboard.append(header);
    const buttonsContainer = method('div', 'buttons-container');
    createRows(rowsOrder, buttonsContainer);
    keyboard.append(buttonsContainer);
}

function createRows (rowsArray, container) {
    const keyButtons = [];  
    rowsArray.forEach(el => {
        const keyboardRow = document.createElement('div');
        keyboardRow.classList.add('keyboard__row');
        keyboardRow.append(...el.map(key => {
            console.log(enKeys);
            const keyboardButton = new KeyboardButton(enKeys.find(elem => elem.code === key));
            const button = keyboardButton.createButton();
            keyButtons.push();
            return button;
        }));
        container.append(keyboardRow);
    });
}
