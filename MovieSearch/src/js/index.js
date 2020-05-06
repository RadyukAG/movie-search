import Swiper from '../swiper/js/swiper.min';
import '../swiper/css/swiper.min.css';
import defaultSlidesArray from "./defaultSlidesData/defaultSlideData";
import GetDataFromOMDb from './getRateFromOMDb/GetDataFromOmdb';
import getTranslation from './translateRequest/translateRequest';

import '../css/normalize.css';
import '../css/style.css';

const elements = {
    input: document.querySelector('.search-form__input'),
    searchForm: document.querySelector('.search-form'),
    clearIcon: document.querySelector('.clear-icon'),
    keyboardIcon: document.querySelector('.keyboard-icon'),
    slides: document.getElementsByClassName('swiper-slide'),
    swiperWrapper: document.querySelector('.swiper-wrapper'),
    loadingIcon: document.querySelector('.loading-icon'),
    message: document.querySelector('.info-lane p'),
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
function loadPosterImage(img, src) {
    img.src = src;
    img.onload
}
async function createSlide (obj) {
    const slideContent = document.createElement('div');
    slideContent.insertAdjacentHTML('beforeend', `<a class="swiper-slide__title" href="https://www.imdb.com/title/${obj.imdbID}/videogallery">${obj.Title}</a>`);
   // const poster = document.createElement('img');
   // poster.classList.add('swiper-slide__poster');
   // poster.src = obj.Poster === 'N/a' ? 'src/img/no-poster.jpg' : await loadPosterImage(poster, obj.Poster);
    slideContent.insertAdjacentHTML('beforeend', `<img class="swiper-slide__poster" src="${obj.Poster}">`);
    slideContent.insertAdjacentHTML('beforeend', `<p class="swiper-slide__year">Year: ${obj.Year}</p>`);
    slideContent.insertAdjacentHTML('beforeend', `<p class="swiper-slide__rate">${obj.rate}</p>`);
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    slide.appendChild(slideContent);
    elements.mySwiper.appendSlide(slide);
    elements.mySwiper.update();
}

function addSlides(array, isNextPage) {
    if (!isNextPage) {
        elements.mySwiper.removeAllSlides();
        if (array.length < 4 && elements.swiperWrapper.style.justifyContent !== 'center') {
            elements.swiperWrapper.style.justifyContent = 'center';
        } else {
            elements.swiperWrapper.style.justifyContent = null;
        }
    }
    if (array.length > 0) {
        array.forEach(el => {
            createSlide(el);
        });
    }
}

addSlides(defaultSlidesArray);
const getDataFromOMDb = new GetDataFromOMDb (addSlides, elements, getTranslation);

function formSubmitHandler(e) {
    e.preventDefault();
    const searchRequest = elements.input.value;
    getDataFromOMDb.getSearchResultsFromOMDB(searchRequest);
}

elements.searchForm.addEventListener('submit', formSubmitHandler);
elements.mySwiper.on('slideChange', getDataFromOMDb.loadNextTenSlides.bind(getDataFromOMDb));

