import Swiper from '../swiper/js/swiper.min';
import '../swiper/css/swiper.min.css';
import defaultSlidesArray from "./defaultSlidesData/defaultSlideData";
import GetDataFromOMDb from './getRateFromOMDb/GetDataFromOmdb';
import getTranslation from './translateRequest/translateRequest';
// import createKeyboard from './virtualKeyboard/index';

import '../css/normalize.css';
import '../css/style.css';
// import { pseudoRandomBytes } from 'crypto';

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
    mySwiper: new Swiper('.swiper-container', {
        slidesPerView: 3,
        freeMode: true,
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
       breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        850: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        1100: {
            slidesPerView: 4,
            spaceBetween: 20,
        }
      }
    }),
}
function createElement(tag, className) {
    const element = document.createElement(tag);
    element.classList.add(className);
    return element;
}
const createPoster = src => {
    return new Promise(resolve => {
        const poster = createElement('img', 'swiper-slide__poster');
        poster.onerror = () => {
            poster.src = '../img/no-poster.png';
            resolve(poster);
        }
        poster.onload = () => resolve(poster)
        poster.src = src});
}

function addToOrRemoveFromWatchlist(e) {
    const slide = e.target.closest('div');
    const slideObject = {};
    slideObject.Poster = slide.querySelector('.swiper-slide__poster').src;
    slideObject.imdbID = slide.querySelector('.swiper-slide__title').href.slice(27, -13);
    slideObject.Title = slide.querySelector('.swiper-slide__title').innerText;
    slideObject.Year = slide.querySelector('.swiper-slide__year').innerText;
    slideObject.rate = slide.querySelector('.swiper-slide__rate').innerText;
    let watchlist = localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [];
    if (e.target.innerText === 'Add to watchlist') {
        watchlist.push(slideObject);
    } else {
        watchlist = watchlist.filter(el => el.imdbID !== slideObject.imdbID);
        const swiperSlide = e.target.closest('.swiper-slide');
        const slidesArray = document.querySelectorAll('.swiper-slide')
        const index = Array.prototype.indexOf.call(slidesArray, swiperSlide);
        elements.mySwiper.removeSlide(index);
        elements.mySwiper.update();
        elements.swiperWrapper.style.justifyContent = slidesArray.length < 4 ? 'center' : null;
        if (slidesArray.length <= 1) {
            elements.message.innerText = 'Your watchlist is empty';
        }
    }
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
}

function createWatchlistButton() {
    const button = createElement('button', 'add-to-watchlist-button');
    if (elements.message.innerText === 'This is your watchlist!') {
        button.innerText = 'Remove from watchlist';
    } else {
        button.innerText = 'Add to watchlist';
    }
    button.addEventListener('click', addToOrRemoveFromWatchlist);
    return button;   
}

async function createSlide (obj) {
    const slideContent = document.createElement('div');
    slideContent.append(await createPoster(obj.Poster));
    slideContent.insertAdjacentHTML('beforeend', `<a class="swiper-slide__title" href="https://www.imdb.com/title/${obj.imdbID}/videogallery">${obj.Title}</a>`);
    slideContent.insertAdjacentHTML('beforeend', `<p class="swiper-slide__year">Year: ${obj.Year}</p>`);
    slideContent.insertAdjacentHTML('beforeend', `<p class="swiper-slide__rate">${obj.rate}</p>`);
    slideContent.append(createWatchlistButton());
    const slide = createElement('div', 'swiper-slide');
    slide.append(slideContent);
    return slide;
}

function addSlides(array, isNextPage) {
    if (!isNextPage) {
        elements.mySwiper.removeAllSlides();
        elements.swiperWrapper.style.justifyContent = array.length < 4 ? 'center' : null;
    }
    if (array.length > 0) {
        Promise.all(array.map(el => createSlide(el)))
            .then(slides => {
                slides.forEach(el => {
                    elements.mySwiper.appendSlide(el);
                    elements.mySwiper.update();
                });
                return slides;
            })
    }
}

addSlides(defaultSlidesArray);
const getDataFromOMDb = new GetDataFromOMDb (addSlides, elements, getTranslation);
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
    addSlides(watchlist, false);
}

elements.searchForm.addEventListener('submit', formSubmitHandler);
elements.mySwiper.on('slideChange', getDataFromOMDb.loadNextTenSlides.bind(getDataFromOMDb));
elements.showWatchlist.addEventListener('click', showWatchlist);
elements.clearIcon.addEventListener('click', clearInput);
// createKeyboard(createElement);
