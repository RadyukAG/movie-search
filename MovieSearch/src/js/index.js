import Swiper from '../swiper/js/swiper';
import '../swiper/css/swiper.min.css';
import '../swiper/js/swiper.min';
import '../css/normalize.css';
import '../css/style.css';

const mySwiper = new Swiper('.swiper-container', {
    width: '100%',
    
});

const APIurl = 'http://www.omdbapi.com/?';
const APIkey = '&apikey=bd3c609';
const elements = {
    input: document.querySelector('.search-form__input'),
    searchForm: document.querySelector('.search-form'),
    clearIcon: document.querySelector('.clear-icon'),
    keyboardIcon: document.querySelector('.keyboard-icon'),
}

function createSlides(array) {
    const slides = document.getElementsByClassName('swiper-slide');
    Array.prototype.forEach.call(slides, (el, i) => {
        const title = el.getElementsByClassName('swiper-slide__title');
        title.value = array[i].Title;
        title.href = `https://www.imdb.com/title/${array[i].imdbID}/videogallery`;
        el.getElementsByClassName('swiper-slide__poster').src = `url(${array[i].Poster})`;
    });
}

function getRateFromOMDB(array) {
    const moviesData = array.map(el => {
        const rateRequest = `${APIurl}i=${el.imdbID}${APIkey}`;
        fetch (rateRequest)
            .then(response => response.json())
            .then(detailedMovieData => detailedMovieData.Ratings[0].Value)
            .then(function addRate(rateString) {
                el.rate = rateString.slice(0, -3);
            });
            return el
    });
    return moviesData;
}

function getSearchResultsFromOMDB (data) {
    const request = `${APIurl}s=${data}${APIkey}`;
    fetch (request)
        .then(response => response.json())
        .then(object => object.Search)
        .then(array => getRateFromOMDB(array));
}

function formSubmitHandler(e) {
    e.preventDefault();
    const searchRequest = elements.input.value;
    const moviesData = getSearchResultsFromOMDB(searchRequest);
    createSlides(moviesData);
}

elements.searchForm.addEventListener('submit', formSubmitHandler);