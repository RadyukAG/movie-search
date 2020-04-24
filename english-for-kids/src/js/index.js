import {routes} from './mainData/mainData';
import Router from './router/router';
import GameMode from './gameMode/gameMode';
import '../css/style.css';
import '../css/normalize';

const statusObject = {
    activePage: 'main',
    mode: 'train'
}
localStorage.setItem('mode', statusObject.mode);
const elements = {
    mainContainer: document.querySelector('.main-container'),
    navigationList: document.querySelector('.navigation-list'),
    burgerButton: document.querySelector('.burger-button'),
    navigationLinks: document.getElementsByClassName('navigation-list__item'),
    switcher: document.querySelector('.switch input')
}
const gameMode = new GameMode (elements);
class RouterGameMode extends Router {
    pushHistory(target) {
        super.pushHistory(target);
        const route = target.href.match(/#\/\w*$/)[0]
        if (localStorage.getItem('mode') === 'play' && route !== '#/' && route !== '#/statistics') {
            gameMode.init();
        }
    }        
}
const router = new RouterGameMode (routes, elements, statusObject);
Array.prototype.forEach.call(elements.navigationLinks, el => {
    el.firstChild.addEventListener('click', e => {
        elements.burgerButton.classList.toggle('burger-button_active');
        elements.navigationList.classList.toggle('navigation-list_open');
        router.pushHistory(e.target);
        gameMode.check();
    });
});
elements.burgerButton.addEventListener('click', e => {
    const target = (e.target.tagName === 'DIV') ? e.target : e.target.closest('div');
    target.classList.toggle('burger-button_active');
    elements.navigationList.classList.toggle('navigation-list_open');
});
elements.switcher.addEventListener('click', () => {
    statusObject.mode = statusObject.mode === 'train' ? 'play' : 'train';
    localStorage.setItem('mode', statusObject.mode);
    gameMode.check();
});

