const input = document.querySelector('.search-form__input');
function moveCursorTo(pos) {
    input.selectionStart = pos;
    input.selectionEnd = pos;
}

function Backspace () {
    const {value, selectionStart, selectionEnd} = input;
    if (selectionStart === selectionEnd) {
        input.value = `${value.slice(0, selectionStart - 1)}${value.slice(selectionEnd)}`;
        moveCursorTo(selectionStart - 1);
    } else {
        inputField.value = `${value.slice(0, selectionStart)}${value.slice(selectionEnd)}`;
        moveCursorTo(selectionStart);
    }
};

function Delete () {
    const {value, selectionStar, selectionEnd} = input;
    if (selectionStar === selectionEnd) {
        input.value = `${value.slice(0, selectionStar)}${value.slice(selectionStar + 1)}`;
        input.value.selectionStart = selectionStar;
    } else {
        input.value = `${value.slice(0, selectionStar)}${value.slice(selectionEnd)}`;
        moveCursorTo(selectionStar);
    } 
}

spaceEffect() {
    this.specButtons[this.specButtonsElements[32]].classList.add('active');
    const {value: value, selectionStart: start, selectionEnd: end} = this.inputField;
    this.inputField.value = `${value.slice(0, start)}\xa0${value.slice(end)}`;
    this.moveCursorTo(start+1);
}
leftArrowEffect() {
    this.specButtons[this.specButtonsElements[37]].classList.add('active');
    const {selectionStart: start} = this.inputField;
    this.inputField.focus();
    if (start > 0) {
    this.moveCursorTo(start-1);
    } else {
        return
    }
}
rightArrowEffect() {
    this.specButtons[this.specButtonsElements[39]].classList.add('active');
    const {selectionStart: start, value: value} = this.inputField;
    this.inputField.focus();
    if (start < value.length) {
    this.moveCursorTo(start+1);
    } else {
        return
    }
}
upArrowEffect() {
    this.specButtons[this.specButtonsElements[38]].classList.add('active');
    this.moveCursorTo(0);
}
downArrowEffect() {
    this.specButtons[this.specButtonsElements[40]].classList.add('active');
    const value = this.inputField.value;
    this.moveCursorTo(value.length);
}

export {Backspace, Delete}