import enKeys from "./keyboardKeys/enKeys";
import KeyboardButton from "./createButton/createButton";

const rowsOrder = [
    ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Delete'],
    ['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backspace'],
    ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash', 'Search'],
    ['ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash'],
    ['ChangeLang', 'Space', 'ArrowLeft', 'ArrowRight'],
];

function createRows (rowsArray, container) {
    const keyButtons = [];  
    rowsArray.forEach(el => {
        const keyboardRow = document.createElement('div');
        keyboardRow.classList.add('keyboard__row');
        keyboardRow.append(...el.map(key => {
            const keyboardButton = new KeyboardButton(enKeys.find(elem => elem.code === key));
            const button = keyboardButton.createButton();
            keyButtons.push(button);
            return button;
        }));
        container.append(keyboardRow);
    });
}

export default function createKeyboard(method) {
    const keyboard = method('div', 'keyboard');
    const header = method('div', 'keyboard__header');
    header.insertAdjacentHTML('afterbegin', '<p class="keyboard__title">Virtual keyboard</p><span class="keyboard__close-button"></span>');
    keyboard.append(header);
    const buttonsContainer = method('div', 'buttons-container');
    createRows(rowsOrder, buttonsContainer);
    keyboard.append(buttonsContainer);
    document.querySelector('main').append(keyboard);
}

