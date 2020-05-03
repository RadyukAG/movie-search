import Swiper from 'swiper/js/swiper.min';
import '../swiper/css/swiper.min.css';
import defaultSlidesArray from "./defaultSlidesData/defaultSlideData";

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
    // when window width is >= 480px
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

function addSlides(array) {
    mySwiper.removeAllSlides();
    array.forEach(el => {
        createSlide(el);
    });
}

addSlides(defaultSlidesArray);

const APIurl = 'http://www.omdbapi.com/?';
const APIkey = '&apikey=bd3c609';
const elements = {
    input: document.querySelector('.search-form__input'),
    searchForm: document.querySelector('.search-form'),
    clearIcon: document.querySelector('.clear-icon'),
    keyboardIcon: document.querySelector('.keyboard-icon'),
}



function getRateFromOMDB (array) {
    function requestRate (elem) {
        const rateRequest = `${APIurl}i=${elem.imdbID}${APIkey}`;
        return fetch (rateRequest)
            .then(response => response.json())
            .then(detailedMovieData => detailedMovieData.Ratings[0].Value)
            .then(async function addRate(rateString) {
                elem.rate = rateString.slice(0, -3);
                return elem;
            });
    }
    return Promise.all(array.map(el => requestRate(el)));
}

function getSearchResultsFromOMDB (data) {
    const request = `${APIurl}s=${data}${APIkey}`;
    fetch (request)
        .then(response => response.json())
        .then(object => object.Search)
        .then(array => getRateFromOMDB(array))
        .then(array => addSlides(array))
        .catch(error => console.log(error));
}

async function formSubmitHandler(e) {
    e.preventDefault();
    const searchRequest = elements.input.value;
    getSearchResultsFromOMDB(searchRequest);
}

elements.searchForm.addEventListener('submit', formSubmitHandler);