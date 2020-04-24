import addStatistics from '../addStatistics/addStatistics';

const mainCards = [
    {source: './img/action1/draw.jpg', title: 'Actions (set A)', route: '#/actionseta'},
    {source: './img/action2/play.jpg', title: 'Actions (set B)', route: '#/actionsetb'},
    {source: './img/action3/drive.jpg', title: 'Actions (set C)', route: '#/actionsetc'},
    {source: './img/adjective/big.jpg', title: 'Adjectives', route: '#/adjective'},
    {source: './img/animals1/cat.jpg', title: 'Animals (set A)', route: '#/animalseta'},
    {source: './img/animals2/frog.jpg', title: 'Animals (set B)', route: '#/animalsetb'},
    {source: './img/clothes/blouse.jpg', title: 'Clothes', route: '#/clothes'},
    {source: './img/emotion/happy.jpg', title: 'Emotions', route: '#/emotion'}
];

const actionSetA = [
    {source: './img/action1/cry.jpg', title: 'cry', russianTitle: 'плакать', audio: './audio/action1/cry.mp3', category: 'Action (Set A)'},
    {source: './img/action1/dance.jpg', title: 'dance', russianTitle: 'танцевать', audio: './audio/action1/dance.mp3', category: 'Action (Set A)'},
    {source: './img/action1/dive.jpg', title: 'dive', russianTitle: 'нырять', audio: './audio/action1/dive.mp3', category: 'Action (Set A)'},
    {source: './img/action1/draw.jpg', title: 'draw', russianTitle: 'рисовать', audio: './audio/action1/draw.mp3', category: 'Action (Set A)'},
    {source: './img/action1/fish.jpg', title: 'fish', russianTitle: 'ловить рыбу', audio: './audio/action1/fish.mp3', category: 'Action (Set A)'},
    {source: './img/action1/fly.jpg', title: 'fly', russianTitle: 'летать', audio: './audio/action1/fly.mp3', category: 'Action (Set A)'},
    {source: './img/action1/hug.jpg', title: 'hug', russianTitle: 'обнимать', audio: './audio/action1/hug.mp3', category: 'Action (Set A)'},
    {source: './img/action1/jump.jpg', title: 'jump', russianTitle: 'прыгать', audio: './audio/action1/jump.mp3', category: 'Action (Set A)'},
];

const actionSetB = [
    {source: './img/action2/open.jpg', title: 'open', russianTitle: 'открывать', audio: './audio/action2/open.mp3', category: 'Action (Set B)'},
    {source: './img/action2/play.jpg', title: 'play', russianTitle: 'играть', audio: './audio/action2/play.mp3', category: 'Action (Set B)'},
    {source: './img/action2/point.jpg', title: 'point', russianTitle: 'указывать', audio: './audio/action2/point.mp3', category: 'Action (Set B)'},
    {source: './img/action2/ride.jpg', title: 'ride', russianTitle: 'ездить', audio: './audio/action2/ride.mp3', category: 'Action (Set B)'},
    {source: './img/action2/run.jpg', title: 'run', russianTitle: 'бегать', audio: './audio/action2/run.mp3', category: 'Action (Set B)'},
    {source: './img/action2/sing.jpg', title: 'sing', russianTitle: 'петь', audio: './audio/action2/sing.mp3', category: 'Action (Set B)'},
    {source: './img/action2/skip.jpg', title: 'skip', russianTitle: 'пропускать, прыгать', audio: './audio/action2/skip.mp3', category: 'Action (Set B)'},
    {source: './img/action2/swim.jpg', title: 'swim', russianTitle: 'плавать', audio: './audio/action2/swim.mp3', category: 'Action (Set B)'},
];

const actionSetC = [
    {source: './img/action3/argue.jpg', title: 'argue', russianTitle: 'спорить', audio: './audio/action3/argue.mp3', category: 'Action (Set C)'},
    {source: './img/action3/build.jpg', title: 'build', russianTitle: 'строить', audio: './audio/action3/build.mp3', category: 'Action (Set C)'},
    {source: './img/action3/carry.jpg', title: 'carry', russianTitle: 'нести', audio: './audio/action3/carry.mp3', category: 'Action (Set C)'},
    {source: './img/action3/catch.jpg', title: 'catch', russianTitle: 'ловить', audio: './audio/action3/catch.mp3', category: 'Action (Set C)'},
    {source: './img/action3/drive.jpg', title: 'drive', russianTitle: 'водить машину', audio: './audio/action3/drive.mp3', category: 'Action (Set C)'},
    {source: './img/action3/drop.jpg', title: 'drop', russianTitle: 'падать', audio: './audio/action3/drop.mp3', category: 'Action (Set C)'},
    {source: './img/action3/pull.jpg', title: 'pull', russianTitle: 'тянуть', audio: './audio/action3/pull.mp3', category: 'Action (Set C)'},
    {source: './img/action3/push.jpg', title: 'push', russianTitle: 'толкать', audio: './audio/action3/push.mp3', category: 'Action (Set C)'},
];

const adjective = [
    {source: './img/adjective/big.jpg', title: 'big', russianTitle: 'большой', audio: './audio/adjective/big.mp3', category: 'Adjective'},
    {source: './img/adjective/small.jpg', title: 'small', russianTitle: 'маленький', audio: './audio/adjective/small.mp3', category: 'Adjective'},
    {source: './img/adjective/fast.jpg', title: 'fast', russianTitle: 'быстрый', audio: './audio/adjective/fast.mp3', category: 'Adjective'},
    {source: './img/adjective/slow.jpg', title: 'slow', russianTitle: 'медленный', audio: './audio/adjective/slow.mp3', category: 'Adjective'},
    {source: './img/adjective/friendly.jpg', title: 'friendly', russianTitle: 'дружелюбный', audio: './audio/adjective/friendly.mp3', category: 'Adjective'},
    {source: './img/adjective/unfriendly.jpg', title: 'unfriendly', russianTitle: 'недружелюбный', audio: './audio/adjective/unfriendly.mp3', category: 'Adjective'},
    {source: './img/adjective/young.jpg', title: 'young', russianTitle: 'молодой', audio: './audio/adjective/young.mp3', category: 'Adjective'},
    {source: './img/adjective/old.jpg', title: 'old', russianTitle: 'старый', audio: './audio/adjective/old.mp3', category: 'Adjective'},
];

const animalSetA = [
    {source: './img/animals1/cat.jpg', title: 'cat', russianTitle: 'кот', audio: './audio/animal1/cat.mp3', category: 'Animals (Set A)'},
    {source: './img/animals1/chick.jpg', title: 'chick', russianTitle: 'цыплёнок', audio: './audio/animal1/chick.mp3', category: 'Animals (Set A)'},
    {source: './img/animals1/chicken.jpg', title: 'chicken', russianTitle: 'курица', audio: './audio/animal1/chicken.mp3', category: 'Animals (Set A)'},
    {source: './img/animals1/dog.jpg', title: 'dog', russianTitle: 'собака', audio: './audio/animal1/dog.mp3', category: 'Animals (Set A)'},
    {source: './img/animals1/horse.jpg', title: 'horse', russianTitle: 'лошадь', audio: './audio/animal1/horse.mp3', category: 'Animals (Set A)'},
    {source: './img/animals1/pig.jpg', title: 'pig', russianTitle: 'свинья', audio: './audio/animal1/pig.mp3', category: 'Animals (Set A)'},
    {source: './img/animals1/rabbit.jpg', title: 'rabbit', russianTitle: 'кролик', audio: './audio/animal1/rabbit.mp3', category: 'Animals (Set A)'},
    {source: './img/animals1/sheep.jpg', title: 'sheep', russianTitle: 'овца', audio: './audio/animal1/sheep.mp3', category: 'Animals (Set A)'},
];

const animalSetB = [
    {source: './img/animals2/bird.jpg', title: 'bird', russianTitle: 'птица', audio: './audio/animal2/bird.mp3', category: 'Animals (Set B)'},
    {source: './img/animals2/dolphin.jpg', title: 'dolphin', russianTitle: 'дельфин', audio: './audio/animal2/dolphin.mp3', category: 'Animals (Set B)'},
    {source: './img/animals2/fish.jpg', title: 'fish', russianTitle: 'рыба', audio: './audio/animal2/fish.mp3', category: 'Animals (Set B)'},
    {source: './img/animals2/frog.jpg', title: 'frog', russianTitle: 'лягушка', audio: './audio/animal2/frog.mp3', category: 'Animals (Set B)'},
    {source: './img/animals2/giraffe.jpg', title: 'giraffe', russianTitle: 'жираф', audio: './audio/animal2/giraffe.mp3', category: 'Animals (Set B)'},
    {source: './img/animals2/lion.jpg', title: 'lion', russianTitle: 'лев', audio: './audio/animal2/lion.mp3', category: 'Animals (Set B)'},
    {source: './img/animals2/mouse.jpg', title: 'mouse', russianTitle: 'мышь', audio: './audio/animal2/mouse.mp3', category: 'Animals (Set B)'},
    {source: './img/animals2/turtle.jpg', title: 'turtle', russianTitle: 'черепаха', audio: './audio/animal2/turtle.mp3', category: 'Animals (Set B)'},
];

const clothes = [
    {source: './img/clothes/blouse.jpg', title: 'blouse', russianTitle: 'блузка', audio: './audio/clothes/blouse.mp3', category: 'Clothes'},
    {source: './img/clothes/boot.jpg', title: 'boot', russianTitle: 'ботинок', audio: './audio/clothes/boot.mp3', category: 'Clothes'},
    {source: './img/clothes/coat.jpg', title: 'coat', russianTitle: 'пальто', audio: './audio/clothes/coat.mp3', category: 'Clothes'},
    {source: './img/clothes/dress.jpg', title: 'dress', russianTitle: 'платье', audio: './audio/clothes/dress.mp3', category: 'Clothes'},
    {source: './img/clothes/pants.jpg', title: 'pants', russianTitle: 'брюки', audio: './audio/clothes/pants.mp3', category: 'Clothes'},
    {source: './img/clothes/shirt.jpg', title: 'shirt', russianTitle: 'рубашка', audio: './audio/clothes/shirt.mp3', category: 'Clothes'},
    {source: './img/clothes/shoe.jpg', title: 'shoe', russianTitle: 'туфля', audio: './audio/clothes/shoe.mp3', category: 'Clothes'},
    {source: './img/clothes/skirt.jpg', title: 'skirt', russianTitle: 'юбка', audio: './audio/clothes/skirt.mp3', category: 'Clothes'},
];

const emotion = [
    {source: './img/emotion/angry.jpg', title: 'angry', russianTitle: 'сердитый', audio: './audio/emotion/angry.mp3', category: 'Emotions'},
    {source: './img/emotion/happy.jpg', title: 'happy', russianTitle: 'счастливый', audio: './audio/emotion/happy.mp3', category: 'Emotions'},
    {source: './img/emotion/laugh.jpg', title: 'laugh', russianTitle: 'смех', audio: './audio/emotion/laugh.mp3', category: 'Emotions'},
    {source: './img/emotion/sad.jpg', title: 'sad', russianTitle: 'грустный', audio: './audio/emotion/sad.mp3', category: 'Emotions'},
    {source: './img/emotion/scared.jpg', title: 'scared', russianTitle: 'испуганный', audio: './audio/emotion/scared.mp3', category: 'Emotions'},
    {source: './img/emotion/smile.jpg', title: 'smile', russianTitle: 'улыбка', audio: './audio/emotion/smile.mp3', category: 'Emotions'},
    {source: './img/emotion/surprised.jpg', title: 'surprised', russianTitle: 'туфля', audio: './audio/emotion/surprised.mp3', category: 'Emotions'},
    {source: './img/emotion/tired.jpg', title: 'tired', russianTitle: 'уставший', audio: './audio/emotion/tired.mp3', category: 'Emotions'},
];

const thematicCards = [[...actionSetA], [...actionSetB], [...actionSetC], [...adjective], [...animalSetA], [...animalSetB], [...clothes], [...emotion]];
const statistics = [];
thematicCards.forEach(el => {
    addStatistics(el, statistics);
});

const routes = [
    {route: '#/', name: 'Main', data: mainCards , method: 'createMainCards'},
    {route: '#/actionseta', name: 'Action (Set A)', data: actionSetA, method: 'createThematicCards'},
    {route: '#/actionsetb', name: 'Action (Set B)', data: actionSetB, method: 'createThematicCards'},
    {route: '#/actionsetc',  name: 'Action (Set C)', data: actionSetC, method: 'createThematicCards'},
    {route: '#/animalseta', name: 'Animals (Set A)', data: animalSetA, method: 'createThematicCards'},
    {route: '#/animalsetb', name: 'Animals (Set B)', data: animalSetB, method: 'createThematicCards'},
    {route: '#/adjective', name: 'Adjective', data: adjective, method: 'createThematicCards'},
    {route: '#/emotion', name: 'Emotions', data: emotion, method: 'createThematicCards'},
    {route: '#/clothes', name: 'Clothes', data: clothes, method: 'createThematicCards'},
    {route: '#/statistics', name: 'Statistics', data: statistics, method: 'createThematicCards'}
];
const statisticTableHead = ['category', 'word', 'translation', 'trains', 'correct answers', 'mistakes', 'mistakes %'];

export {routes, statistics, statisticTableHead};