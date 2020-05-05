export default class GetDataFromOMDb {
    constructor (func, APIkey, APIurl) {
        this.pageNumber = 1;
        this.addSlides = func;
        this.APIkey = APIkey;
        this.APIurl = APIurl
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

    getSearchResultsFromOMDB (data) {
        let OMDbRequest;
        if (data === 'next page') {
            this.pageNumber += 1;
            this.isNextPage = true;
            OMDbRequest = `${this.APIurl}s=${this.userRequest}&page=${this.pageNumber}${this.APIkey}`
        } else {
            this.pageNumber = 1;
            this.userRequest = data;
            this.isNextPage = false;
            OMDbRequest = `${this.APIurl}s=${data}${this.APIkey}`;
        }
        fetch (OMDbRequest)
            .then(response => response.json())
            .then(object => {
                const array = object.Search.filter(el => {
                    return el.Type === 'movie'
                });
                return array
            })
            .then(array => this.getRateFromOMDB(array))
            .then(array => this.addSlides(array, this.isNextPage))
            .catch(error => console.log(error));
    }
}