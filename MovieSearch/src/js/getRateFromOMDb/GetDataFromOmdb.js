export default class GetDataFromOMDb {
    constructor (func, {APIkey, APIurl}, elements) {
        this.pageNumber = 1;
        this.addSlides = func;
        this.APIkey = APIkey;
        this.APIurl = APIurl;
        this.elements = elements;
    }

    setDataLoadingState() {
        if (this.elements.loadingIcon.classList.contains('hidden')) {
            this.elements.loadingIcon.classList.remove('hidden');
        }
        this.elements.mySwiper.allowSlideNext = false;
    }
    
    removeDataLoadingState() {
        if (!this.elements.loadingIcon.classList.contains('hidden')) {
            this.elements.loadingIcon.classList.add('hidden');
        }
        this.elements.mySwiper.allowSlideNext = true;    
    }

    getRateFromOMDB (array) {
        const requestRate = (elem) => {
            const rateRequest = `${this.APIurl}i=${elem.imdbID}${this.APIkey}`;
            return fetch (rateRequest)
                .then(response => response.json())
                .then(detailedMovieData => detailedMovieData.Ratings[0] ? detailedMovieData.Ratings[0].Value : 'N/A')
                .then(async function addRate(rateString) {
                    elem.rate = rateString.slice(0, -3);
                    return elem;
                });
        }
        return Promise.all(array.map(el => requestRate(el)));
    }

    loadNextTenSlides() {
        const activeSlide = document.querySelector('.swiper-slide-active');
        const that = this;
        if (activeSlide && that.elements.slides.length - Array.prototype.indexOf.call(that.elements.slides, activeSlide) < 10 || that.elements.slides.length < 10) {
            that.getSearchResultsFromOMDB('next page');
        }
    }

    errorHandler (error) {
        switch (error.toString()) {
            case 'Error: Movie not found!':
                this.elements.message.innerText = !this.isNextPage ? `No results for ${this.userRequest}` : 'There are all movies we found!';
                break;
            default: 
            this.elements.message.innerText = error.toString();
        }
        this.removeDataLoadingState();
        this.isNextPage = false;
    }

    translateRequest(request) {
        if 
    }

    getSearchResultsFromOMDB (request) {
        this.elements.message.innerText = '';
        let OMDbRequest = this.translateRequest(request);
        this.setDataLoadingState();
        if (OMDbRequest === 'next page') {
            this.pageNumber += 1;
            this.isNextPage = true;
            OMDbRequest = `${this.APIurl}s=${this.userRequest}&page=${this.pageNumber}${this.APIkey}`
        } else {
            this.pageNumber = 1;
            this.userRequest = OMDbRequest;
            this.isNextPage = false;
            OMDbRequest = `${this.APIurl}s=${this.userRequest}${this.APIkey}`;
        }
            fetch (OMDbRequest)
                .then(response => response.json())
                .then(object => {
                    if (object.Error) {
                        throw new Error (object.Error);
                    }
                    return object.Search.filter(el => el.Type === 'movie');
                })
                .then(array => this.getRateFromOMDB(array))
                .then(array => this.addSlides(array, this.isNextPage))
                .then(() => this.loadNextTenSlides())
                .then(() => this.removeDataLoadingState())
                .catch((error) => this.errorHandler(error))   
    }
}