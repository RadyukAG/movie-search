import '../swiper/css/swiper.min.css';
import GetDataFromOMDb from './getRateFromOMDb/GetDataFromOmdb';
import getTranslation from './translateRequest/translateRequest';
import createKeyboard from './virtualKeyboard/index';
import {Shift} from './virtualKeyboard/buttonHandlers/buttonHandlers';
import createElement from './createElement/createElement';
import addSlides from './addSlides/addSlides';
import mySwiper from './createSwiper/createSwiper';

import '../css/normalize.css';
import '../css/style.css';

createKeyboard(createElement);
const elements = {
    input: document.querySelector('.search-form__input'),
    searchForm: document.querySelector('.search-form'),
    clearIcon: document.querySelector('.clear-icon'),
    keyboardIcon: document.querySelector('.keyboard-icon'),
    slides: document.getElementsByClassName('swiper-slide'),
    swiperWrapper: document.querySelector('.swiper-wrapper'),
    loadingIcon: document.querySelector('.loading-icon'),
    message: document.querySelector('.info-lane p'),
    showWatchlist: document.querySelector('.show-watchlist-button'),
    keyboard: document.querySelector('.keyboard'),
    shift: document.querySelector('[data-code="ShiftLeft"]'),
    mySwiper,
}
elements.keyboard.classList.add('hidden');
const keyButtons = document.querySelectorAll('[data-key-code]');
const specButtons = document.querySelectorAll('[data-code]');
const getDataFromOMDb = new GetDataFromOMDb (elements, getTranslation);
function clearInput () {
    elements.input.value = '';
    elements.input.focus();
}

function formSubmitHandler(e) {
    e.preventDefault();
    const searchRequest = elements.input.value;
    elements.mySwiper.on('slideChange', getDataFromOMDb.loadNextTenSlides.bind(getDataFromOMDb));
    getDataFromOMDb.getSearchResultsFromOMDB(searchRequest);
}

function showWatchlist () {
    let watchlist = JSON.parse(localStorage.getItem('watchlist'));
    if (!watchlist || watchlist.length < 1){
        elements.message.innerText = 'Your watchlist is empty!';
        return;
    }
    watchlist = watchlist.filter((el, i, arr) => {
        const elStr = JSON.stringify(el);
        return i === arr.findIndex(elem => JSON.stringify(elem) === elStr)
    });
    elements.message.innerText = 'This is your watchlist!';
    elements.input.value = '';
    elements.mySwiper.off('slideChange', getDataFromOMDb.loadNextTenSlides.bind(getDataFromOMDb));
    addSlides(watchlist, false, elements);
}

function toggleKeyboard () {
    elements.keyboard.classList.toggle('hidden');
}

function shiftMode (e) {
    let target;
    if (e.target) {
        target = e.target.dataset.code === 'ShiftLeft' ? e.target : e.target.closest('div');
    } else {
        target = e;
    }
    const isShift = target.classList.contains('active');
    if(!isShift) {
        keyButtons.forEach(el => {
            el.querySelector('.main').classList.remove('hidden');
            el.querySelector('.shift-mode').classList.add('hidden');
        });
    }
    else {
        keyButtons.forEach(el => {
            el.querySelector('.shift-mode').classList.remove('hidden');
            el.querySelector('.main').classList.add('hidden');
        });
    }
}

shiftMode(elements.shift);
elements.keyboard.addEventListener('click', e => {
    if (e.target.dataset.keyCode || e.target.closest('div').dataset.keyCode) {
        elements.input.value += e.target.innerText;
    }
});

elements.searchForm.addEventListener('submit', formSubmitHandler);
elements.mySwiper.on('slideChange', getDataFromOMDb.loadNextTenSlides.bind(getDataFromOMDb));
elements.showWatchlist.addEventListener('click', showWatchlist);
elements.clearIcon.addEventListener('click', clearInput);
elements.keyboardIcon.addEventListener('click', toggleKeyboard);
elements.shift.addEventListener('click', shiftMode);

document.onkeydown = e => {
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        Shift(elements.shift);
        shiftMode(elements.shift);
    }
    let button = Array.prototype.find.call(keyButtons, (el => el.dataset.keyCode === e.code));
    if (!button) {
        button = Array.prototype.find.call(specButtons, (el => el.dataset.code === e.code));
    }
    button.classList.add('active');
    console.log(button);
}

document.onkeyup = e => {
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        elements.shift.classList.remove('active');
        shiftMode(elements.shift);
    }
    
    console.log(e.code)
    let button = Array.prototype.find.call(keyButtons, (el => el.dataset.keyCode === e.code));
    if (!button) {
        button = Array.prototype.find.call(specButtons, (el => el.dataset.code === e.code));
    }
    button.classList.remove('active');
}
