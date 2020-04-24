import {statisticTableHead, statistics} from '../mainData/mainData';

export default class Router {
    constructor(routes, elementsObject) {
        this.routes = routes;
        Object.assign(this, elementsObject);
        const {route} = this.routes[0].route;
        window.history.pushState({route}, route, route);
        this.pushHistory({href: '#/'});
        this.changeStateListener();
        this.navigationLinks[0].classList.add('selected');
    }

    pushHistory (target) {
        const route = target.href.match(/#\/\w*$/)[0];
        let pageData;
        this.routes.forEach (el => {
            if (el.route === route) {
                document.title = el.name;
                pageData = el.data;
            }
        });
        this.mainContainer.innerHTML = '';
        let method;

        switch (route) {
            case '#/': 
                method = this.createMainCard.bind(this);
                this.createCards(pageData, method);
                break;
            case '#/statistics':
                method = this.createStatisticsPage.bind(this);
                method(pageData);
                break;
            default:
                method = this.createThematicCard.bind(this);
                this.createCards(pageData, method);
                break;       
        }
        window.history.pushState({route}, `${route}`, route);
        Array.prototype.forEach.call(this.navigationLinks, (el) => {
            const href = el.firstChild.href.match(/#\/\w*$/)[0];
            if (href === route) {
                el.classList.add('selected')
            } else {
                el.classList.remove('selected')
            }
        });
        if (this.burgerButton.classList.contains('burger-button_active')) {
            this.burgerButton.classList.remove('burger-button_active');
            this.navigationList.classList.remove('navigation-list_open');
        }
    }


    createCards (data, method) {
        data.forEach (el => {
            const card = method(el);
            this.mainContainer.append(card);
        });
    }

    createMainCard (obj) {
        const mainCard = document.createElement('a');
        mainCard.classList.add('main-card');
        const mainCardImage = document.createElement('img');
        mainCardImage.classList.add('main-card__image');
        mainCardImage.src = obj.source;
        mainCard.setAttribute('href', obj.route);
        mainCard.addEventListener ('click', (e) => {
            e.preventDefault();
            const target = e.target.closest('a')
            this.pushHistory(target);          
            return true;
        })
        mainCard.append(mainCardImage);
        mainCard.append(obj.title);
        return mainCard;
    }

    createThematicCard (obj) {
        const card = document.createElement('div');
        card.classList.add('category-card');
        const cardInner = document.createElement('div');
        cardInner.classList.add('category-card__inner');
        const front = document.createElement('div');
        const frontTitle = document.createElement('p');
        frontTitle.innerText = obj.title;
        const frontImage = document.createElement('img');
        frontImage.src = obj.source;
        frontImage.classList.add('category-card__image');
        const arrows = document.createElement('span');
        arrows.classList.add('category-card__arrows');
        front.append(frontImage);
        front.append(frontTitle);
        front.append(arrows);
        front.classList.add('category-card__front');
        cardInner.append(front);
        const back = document.createElement('div');
        const backTitle = document.createElement('p');
        backTitle.innerText = obj.russianTitle;
        const backImage = document.createElement('img');
        backImage.classList.add('category-card__image');
        backImage.src = obj.source;
        back.append(backImage);
        back.append(backTitle);
        back.classList.add('category-card__back');
        cardInner.append(back);
        card.addEventListener('mouseleave', () => {
            cardInner.classList.remove('category-card__inner_rotate')
        });
        card.append(cardInner);
        const audio = document.createElement('audio');
        const source = document.createElement('source');
        source.src = obj.audio;
        audio.append(source);
        card.append(audio);
        arrows.addEventListener('click', e => {
            e.target.closest('.category-card__inner').classList.toggle('category-card__inner_rotate');
        });
        cardInner.addEventListener('click', () => {
            if (localStorage.getItem('mode') === 'play') {
                return;
            }
            const trains = localStorage.getItem(`${JSON.stringify(obj)} trains`) ? localStorage.getItem(`${JSON.stringify(obj)} trains`) : 0; 
            localStorage.setItem(`${JSON.stringify(obj)} trains`, parseInt(trains, 10) + 1);
            audio.play();
        })
        return card;
    }

    createStatisticsPage() {
        const table = document.createElement('table');
        this.mainContainer.append(table);
        table.classList.add('statistic-table');
        const header = table.createTHead();
        const headerRow = header.insertRow(0);
        statisticTableHead.forEach((el, i) => {
            const cell = headerRow.insertCell(i);
            cell.innerText = el;
        });
        const tbody = document.createElement('tbody');
        statistics.forEach((el) => {
            const row = document.createElement('tr');
            const categoryCell = row.insertCell(0);
            categoryCell.innerText = el.category; 
            const wordCell = row.insertCell(1);
            wordCell.innerText = el.title;
            const translationCell = row.insertCell(2);
            translationCell.innerText = el.russianTitle;
            const trainsCell = row.insertCell(3);
            trainsCell.innerText = localStorage.getItem(`${JSON.stringify(el)} trains`) ? localStorage.getItem(`${JSON.stringify(el)} trains`) : 0;
            const correctAnswersCell = row.insertCell(4);
            correctAnswersCell.innerText = localStorage.getItem(`${el.russianTitle} correct answers`) ? localStorage.getItem(`${el.russianTitle} correct answers`) : 0;
            const mistakesCell = row.insertCell(5);
            mistakesCell.innerText = localStorage.getItem(`${el.russianTitle} mistakes`) ? localStorage.getItem(`${el.russianTitle} mistakes`) : 0;
            const mistakesPercentCell = row.insertCell(6);
            const mistakes = parseInt(mistakesCell.innerText, 10);
            const correctAnswers = parseInt(correctAnswersCell.innerText, 10);
            mistakesPercentCell.innerText = (mistakes + correctAnswers) ? Math.round(100 / (mistakes + correctAnswers) * mistakes) : 0;
            tbody.appendChild(row);
        });
        table.append(tbody);
        this.mainContainer.append(table);
    }

    changeStateListener() {
        window.addEventListener('popstate', e => {
            if (e.state === null) {
                return
            }
            const {route} = e.state;
            this.pushHistory({href: `${route}`});
        });
    }
}