import Swiper from 'swiper/js/swiper.min';
import '../swiper/css/swiper.min.css';
import defaultSlidesArray from "./defaultSlidesData/defaultSlideData";
import GetDataFromOMDb from './getRateFromOMDb/GetDataFromOmdb';

import '../css/normalize.css';
import '../css/style.css';

const mySwiper = new Swiper('.swiper-container', {
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
});
const APIurl = 'http://www.omdbapi.com/?';
const APIkey = '&apikey=bd3c609';
const elements = {
    input: document.querySelector('.search-form__input'),
    searchForm: document.querySelector('.search-form'),
    clearIcon: document.querySelector('.clear-icon'),
    keyboardIcon: document.querySelector('.keyboard-icon'),
    slides: document.getElementsByClassName('swiper-slide'),
    swiperWrapper: document.querySelector('.swiper-wrapper'),
}
function createSlide (obj) {
    const slideContent = document.createElement('div');
    slideContent.insertAdjacentHTML('beforeend', `<a class="swiper-slide__title" href="https://www.imdb.com/title/${obj.imdbID}/videogallery">${obj.Title}</a>`);
    slideContent.insertAdjacentHTML('beforeend', `<img class="swiper-slide__poster" src="${obj.Poster}">`);
    slideContent.insertAdjacentHTML('beforeend', `<p class="swiper-slide__year">${obj.Year}</p>`);
    slideContent.insertAdjacentHTML('beforeend', `<p class="swiper-slide__rate">${obj.rate}</p>`);
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    slide.appendChild(slideContent);
    mySwiper.appendSlide(slide);
    mySwiper.update();
}

function addSlides(array, isNextPage) {
    if (array.length < 4 && elements.swiperWrapper.style.justifyContent !== 'center') {
        elements.swiperWrapper.style.justifyContent = 'center';
    } else {
        elements.swiperWrapper.style.justifyContent = null;
    }
    if (!isNextPage) {
        mySwiper.removeAllSlides();
    }
    array.forEach(el => {
        createSlide(el);
    });
}

addSlides(defaultSlidesArray);
const getDataFromOMDb = new GetDataFromOMDb (addSlides, APIkey, APIurl);

function formSubmitHandler(e) {
    e.preventDefault();
    const searchRequest = elements.input.value;
    getDataFromOMDb.getSearchResultsFromOMDB(searchRequest);
}

elements.searchForm.addEventListener('submit', formSubmitHandler);
mySwiper.on('slideChange', function loadNextTenSlides() {
   const activeSlide = document.querySelector('.swiper-slide-active');
   console.log(Array.prototype.indexOf.call(elements.slides, activeSlide));
   if (activeSlide && elements.slides.length - Array.prototype.indexOf.call(elements.slides, activeSlide) < 7) {
    console.log('test');
    getDataFromOMDb.getSearchResultsFromOMDB('next page');
   }
});

function setDataLoadingState() {

}

function removeDataLoadingState() {
    
}