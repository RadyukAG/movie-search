import ruKeys from '../keyboardKeys/ruKeys';
import enKeys from '../keyboardKeys/enKeys';

const input = document.querySelector('.search-form__input');

function moveCursorTo(pos) {
    input.selectionStart = pos;
    input.selectionEnd = pos;
};

function Backspace () {
    input.focus();
    const {value, selectionStart, selectionEnd} = input;
    if (selectionStart === 0) {
        return
    }
    if (selectionStart === selectionEnd) {
        input.value = `${value.slice(0, selectionStart - 1)}${value.slice(selectionEnd)}`;
        moveCursorTo(selectionStart - 1);
    } else {
        input.value = `${value.slice(0, selectionStart)}${value.slice(selectionEnd)}`;
        moveCursorTo(selectionStart);
    }
    input.focus();
};

function Delete () {
    input.focus();
    const {value, selectionStart, selectionEnd} = input;
    if (selectionStart === value.length) {
        return
    }
    if (selectionStart === selectionEnd) {
        input.value = `${value.slice(0, selectionStart)}${value.slice(selectionStart + 1)}`;
        moveCursorTo(selectionStart);
    } else {
        input.value = `${value.slice(0, selectionStart)}${value.slice(selectionEnd)}`;
        moveCursorTo(selectionStart);
    }
};

function Space () {
    const {value, selectionStart, selectionEnd} = input;
    input.value = `${value.slice(0, selectionStart)}\xa0${value.slice(selectionEnd)}`;
    moveCursorTo(selectionStart + 1);
    input.focus();
};

function ArrowLeft() {
    const {selectionStart} = input;
    input.focus();
    if (selectionStart > 0) {
        moveCursorTo(selectionStart - 1);
    }
    input.focus();
};

function ArrowRight() {
    const {selectionStart, value} = input;
    input.focus();
    if (selectionStart < value.length) {
    moveCursorTo(selectionStart + 1);
    }
    input.focus(); 
};

function Shift (e) {
    let target;
    if (e.dataset && e.dataset.code === 'ShiftLeft') {
        target = e;
    } else {
        target = e.target.tagName === 'div' ? e.target : e.target.closest('div');
    }
    target.classList.toggle('active');
}

function ChangeLang (e) {
    const target = e.target.tagName === 'div' ? e.target : e.target.closest('div');
    target.dataset.lang = target.dataset.lang === 'ru' ? 'en' : 'ru';
    const keyButtons = document.querySelectorAll('[data-key-code]');
    const keysArray = target.dataset.lang === 'ru' ? ruKeys : enKeys;
    keyButtons.forEach(el => {
        const {main, shiftMode} = keysArray.find(elem => elem.code === el.dataset.keyCode);
        el.querySelector('.main').innerText = main;
        el.querySelector('.shift-mode').innerText = shiftMode;
    })

}

function Search () {
    document.querySelector('.search-form .button').click();
}

export {Backspace, Delete, Shift, Space, ArrowRight, ArrowLeft, ChangeLang, Search}