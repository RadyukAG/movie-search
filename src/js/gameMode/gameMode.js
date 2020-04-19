export default class GameMode {
    constructor (elements) {
        Object.assign(this, elements);
        this.marksBar = document.createElement('div');
        this.marksBar.classList.add('marks-bar');
    }

    check() {
        if (localStorage.getItem('mode') === 'play') {
            this.init()
        } else {
            this.changeMode()
        }
    }

    changeMode() {
        let cards = document.getElementsByClassName('category-card');
        if (cards.length > 0) {
            Array.prototype.forEach.call(cards, el => {
                el.classList.remove('game-mode');
                el.removeEventListener('click', this.rightAnswerHandler);
                el.removeEventListener('click', this.wrongAnswerHandler);
            });
            const marksBar = document.querySelector('.marks-bar');
            if(marksBar) {
                marksBar.innerHTML = '';
                marksBar.remove();
                document.querySelector('.buttons-bar').remove();
            }
        } else {
            cards = document.getElementsByClassName('main-card');
            Array.prototype.forEach.call(cards, el => {
                el.classList.remove('game-mode');
            });
        }
    }

    init () {
        this.elements = document.getElementsByClassName('category-card');
            if (this.elements.length > 0) {
                Array.prototype.forEach.call(this.elements, el => {
                    el.classList.add('game-mode');
                });
                this.createMarksBar(this.elements[0]);
                this.createButtons(this.elements);
            } else {
                this.elements = document.getElementsByClassName('main-card');
                Array.prototype.forEach.call(this.elements, el => {
                    el.classList.add('game-mode');
                });
            }
    }

    createMarksBar (element) {
        this.marksBar.innerHTML = '';
        this.mainContainer.insertBefore(this.marksBar, element);
    }
    
    createButtons() {
        if (this.mainContainer.querySelector('.buttons-bar')) {
            return;
        }
        const div = document.createElement('div');
        div.classList.add('buttons-bar');
        const stopGameButton = document.createElement('button');
        stopGameButton.classList.add('game-button');
        stopGameButton.innerText = 'Stop Game';
        stopGameButton.addEventListener('click', () => {
            this.stopGame();
        });
        div.append(stopGameButton);
        this.startGameButton = document.createElement('button');
        this.startGameButton.classList.add('game-button');
        this.startGameButton.innerText = 'Start game';
        this.startGameFunction = () => {
            this.startGameButton.removeEventListener('click', this.startGameFunction);
            this.startGameButton.innerText = '';
            this.startGameButton.classList.add('game-button_repeat');
            this.startGame(this.elements);
            this.repeatFunction = () => {
                const audio = this.activeElement.querySelector('audio');
                audio.play();
            }
            this.startGameButton.addEventListener('click', this.repeatFunction);
        }    
        this.startGameButton.addEventListener('click', this.startGameFunction);
        div.append(this.startGameButton);
        this.mainContainer.append(div);
    }

    startGame (elements) {
        if (document.querySelector('.marks-bar') === null) {
            this.createMarksBar(elements[0]);
        }
        this.wrongAnswerHandler = this.wrongAnswer.bind(this);
        this.rightAnswerHandler = this.rightAnswer.bind(this);
        Array.prototype.forEach.call(elements, el => {
            el.addEventListener ('click', this.wrongAnswerHandler);
        });    
        this.gameArray = Array.from(elements);
        this.gameArray = this.gameArray.sort( () => {
        return 0.5 - Math.random();
        });
        this.gameStep(this.gameArray)
    }

    gameStep(array) {
        if (!array.length) {
            this.finishGame();
            return
        }
        this.activeElement = array[array.length - 1];
        this.target = this.activeElement.querySelector('.category-card__back p').innerText
        this.activeElement.removeEventListener('click', this.wrongAnswerHandler);
        this.activeElement.addEventListener('click',  this.rightAnswerHandler);
        const audio = this.activeElement.querySelector('audio');
        setTimeout(() => {
            audio.play();
        }, 2000);
    }

    wrongAnswer() {
        const sound = new Audio('../../audio/game sounds/mistake.mp3');
        sound.play();
        const badMark = document.createElement('div');
        badMark.classList.add('marks-bar__bad-mark');
        this.marksBar.append(badMark);
        const value = localStorage.getItem(`${this.target} mistakes`) ? localStorage.getItem(`${this.target} mistakes`) : 0;
        localStorage.setItem(`${this.target} mistakes`, parseInt(value, 10) + 1);
    }

    rightAnswer(e) {
        const sound = new Audio('../../audio/game sounds/correct-answer.mp3');
        sound.play();
        const target = e.target.closest('.category-card');
        target.removeEventListener('click', this.rightAnswerHandler);
        target.style.opacity = 0.3;
        const key = target.querySelector('.category-card__back p').innerText;
        const value = localStorage.getItem(`${key} correct answers`) ? localStorage.getItem(`${key} correct answers`) : 0;
        localStorage.setItem(`${key} correct answers`, parseInt(value, 10) + 1);
        const goodMark = document.createElement('div');
        goodMark.classList.add('marks-bar__good-mark');
        this.marksBar.append(goodMark);
        this.gameArray.pop();
        this.gameStep(this.gameArray);
    }

    stopGame() {
        const cards = document.getElementsByClassName('category-card');
        if (cards.length > 0) {
            document.querySelector('.marks-bar').innerHTML = '';
            document.querySelector('.marks-bar').remove();
            Array.prototype.forEach.call(cards, el => {
                el.removeEventListener ('click', this.wrongAnswerHandler);
                el.removeEventListener ('click', this.rightAnswerHandler);
                el.style.opacity = null;
            }); 
        }
        this.startGameButton.addEventListener('click', this.startGameFunction);
        this.startGameButton.removeEventListener('click', this.repeatFunction);
        this.startGameButton.classList.remove('game-button_repeat');
        this.startGameButton.innerText = 'Start Game';
    }

    finishGame () {
        const marks = this.marksBar.getElementsByClassName('marks-bar__bad-mark');
        this.mainContainer.innerHTML = '';
        const link = document.createElement('a');
        link.href = '#/';
        link.classList.add('final-image');
        marks.length ? link.classList.add('final-image_loose') : link.classList.add('final-image_win');
        this.mainContainer.append(link);
        const sound = link.classList.contains('final-image_win') ? new Audio('../../audio/game sounds/win.mp3') : new Audio('../../audio/game sounds/loose.mp3')
        sound.play();
    }
}