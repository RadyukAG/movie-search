import createElement from '../createElement/createElement';
import mySwiper from '../createSwiper/createSwiper';
import '../../img/no-poster.png';

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
        mySwiper.removeSlide(index);
        mySwiper.update();
        document.querySelector('.swiperWrapper').style.justifyContent = slidesArray.length < 4 ? 'center' : null;
        if (slidesArray.length <= 1) {
            document.querySelector('.info-lane p').innerText = 'Your watchlist is empty';
        }
    }
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
}

function createWatchlistButton() {
    const button = createElement('button', 'add-to-watchlist-button');
    button.innerText = document.querySelector('.info-lane p').innerText === 'This is your watchlist!' ? 'Remove from watchlist' : 'Add to watchlist';
    button.addEventListener('click', addToOrRemoveFromWatchlist);
    return button;   
}

const createPoster = src => {
    return new Promise(resolve => {
        const poster = createElement('img', 'swiper-slide__poster');
        if (src.match(/N\/A/)) {
            src = './img/no-poster.png'
        }
        poster.src = src;
        poster.onerror = () => {
            poster.src = './img/no-poster.png';
            resolve(poster);
        }
        poster.onload = () => resolve(poster)});
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

export default function addSlides(dataArray, isNextPage, elements) {
    if (!isNextPage) {
        elements.mySwiper.removeAllSlides();
        elements.swiperWrapper.style.justifyContent = dataArray.length < 4 ? 'center' : null;
    }
    if (dataArray.length) {
        Promise.all(dataArray.map(el => createSlide(el)))
            .then(slides => {
                slides.forEach(el => {
                    elements.mySwiper.appendSlide(el);
                    elements.mySwiper.update();
                });
                return slides;
            })
    }
}