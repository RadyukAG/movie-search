const mainCards = [
    {source: './img/action1/draw.jpg', title: 'Action (set A)', route: '/actionseta'},
    {source: './img/action2/play.jpg', title: 'Action (set B)', route: '/actionsetb'},
    {source: './img/action3/drive.jpg', title: 'Action (set C)', route: '/actionsetc'},
    {source: './img/adjective/big.jpg', title: 'Adjective', route: '/adjective'},
    {source: './img/animals1/cat.jpg', title: 'Animals (set A)', route: '/animalseta'},
    {source: './img/animals2/frog.jpg', title: 'Animals (set B)', route: '/animalsetb'},
    {source: './img/clothes/blouse.jpg', title: 'Clothes', route: '/clothes'},
    {source: './img/emotions/happy.jpg', title: 'Emotions', route: '/emotion'}
];

const actionSetA = [
    {source: '/img/action1/cry.jpg', title: 'cry', russianTitle: 'плакать', audio: '/img/audio/active1/cry.mp3'},
    {source: '/img/action1/dance.jpg', title: 'dance', russianTitle: 'танцевать', audio: '/img/audio/active1/dance.mp3'},
    {source: '/img/action1/dive.jpg', title: 'dive', russianTitle: 'нырять', audio: '/img/audio/active1/cry.mp3'},
    {source: '/img/action1/draw.jpg', title: 'draw', russianTitle: 'рисовать', audio: '/img/audio/active1/draw.mp3'},
    {source: '/img/action1/fish.jpg', title: 'fish', russianTitle: 'ловить рыбу', audio: '/img/audio/active1/fish.mp3'},
    {source: '/img/action1/fly.jpg', title: 'fly', russianTitle: 'летать', audio: '/img/audio/active1/fly.mp3'},
    {source: '/img/action1/hug.jpg', title: 'hug', russianTitle: 'обнимать', audio: '/img/audio/active1/hug.mp3'},
    {source: '/img/action1/jump.jpg', title: 'cry', russianTitle: 'прыгать', audio: '/img/audio/active1/jump.mp3'},
];

const actionSetB = [
    {source: '/img/action2/open.jpg', title: 'open', russianTitle: 'открывать', audio: '/img/audio/acrive2/open.mp3'},
    {source: '/img/action2/play.jpg', title: 'play', russianTitle: 'играть', audio: '/img/audio/acrive2/play.mp3'},
    {source: '/img/action2/point.jpg', title: 'point', russianTitle: 'указывать', audio: '/img/audio/acrive2/point.mp3'},
    {source: '/img/action2/ride.jpg', title: 'ride', russianTitle: 'ездить', audio: '/img/audio/acrive2/ride.mp3'},
    {source: '/img/action2/run.jpg', title: 'run', russianTitle: 'бегать', audio: '/img/audio/acrive2/run.mp3'},
    {source: '/img/action2/sing.jpg', title: 'sing', russianTitle: 'петь', audio: '/img/audio/acrive2/sing.mp3'},
    {source: '/img/action2/skip.jpg', title: 'skip', russianTitle: 'пропускать, прыгать', audio: '/img/audio/acrive2/skip.mp3'},
    {source: '/img/action2/swim.jpg', title: 'swim', russianTitle: 'плавать', audio: '/img/audio/acrive2/swim.mp3'},
];

const actionSetC = [
    {source: '/img/action3/argue.jpg', title: 'argue', russianTitle: 'спорить', audio: '/img/audio/acrive3/argue.mp3'},
    {source: '/img/action3/build.jpg', title: 'build', russianTitle: 'строить', audio: '/img/audio/acrive3/build.mp3'},
    {source: '/img/action3/carry.jpg', title: 'carry', russianTitle: 'нести', audio: '/img/audio/acrive3/carry.mp3'},
    {source: '/img/action3/catch.jpg', title: 'catch', russianTitle: 'ловить', audio: '/img/audio/acrive3/catch.mp3'},
    {source: '/img/action3/drive.jpg', title: 'drive', russianTitle: 'водить машину', audio: '/img/audio/acrive3/drive.mp3'},
    {source: '/img/action3/drop.jpg', title: 'drop', russianTitle: 'падать', audio: '/img/audio/acrive3/drop.mp3'},
    {source: '/img/action3/pull.jpg', title: 'pull', russianTitle: 'тянуть', audio: '/img/audio/acrive3/pull.mp3'},
    {source: '/img/action3/push.jpg', title: 'push', russianTitle: 'толкать', audio: '/img/audio/acrive3/push.mp3'},
];

const adjective = [
    {source: '/img/adjective/big.jpg', title: 'big', russianTitle: 'большой', audio: '/img/audio/adjective/big.mp3'},
    {source: '/img/adjective/small.jpg', title: 'small', russianTitle: 'маленький', audio: '/img/audio/adjective/small.mp3'},
    {source: '/img/adjective/fast.jpg', title: 'fast', russianTitle: 'быстрый', audio: '/img/audio/adjective/fast.mp3'},
    {source: '/img/adjective/slow.jpg', title: 'slow', russianTitle: 'медленный', audio: '/img/audio/adjective/slow.mp3'},
    {source: '/img/adjective/friendly.jpg', title: 'friendly', russianTitle: 'дружелюбный', audio: '/img/audio/adjective/friendly.mp3'},
    {source: '/img/adjective/unfriendly.jpg', title: 'unfriendly', russianTitle: 'недружелюбный', audio: '/img/audio/adjective/infriendle.mp3'},
    {source: '/img/adjective/young.jpg', title: 'young', russianTitle: 'молодой', audio: '/img/audio/adjective/young.mp3'},
    {source: '/img/adjective/old.jpg', title: 'old', russianTitle: 'старый', audio: '/img/audio/adjective/old.mp3'},
];

const animalSetA = [
    {source: '/img/animals1/cat.jpg', title: 'cat', russianTitle: 'кот', audio: '/img/audio/animal1/cat.mp3'},
    {source: '/img/animals1/chick.jpg', title: 'chick', russianTitle: 'цыплёнок', audio: '/img/audio/animal1/chick.mp3'},
    {source: '/img/animals1/chicken.jpg', title: 'chicken', russianTitle: 'курица', audio: '/img/audio/animal1/chicken.mp3'},
    {source: '/img/animals1/dog.jpg', title: 'dog', russianTitle: 'собака', audio: '/img/audio/animal1/dog.mp3'},
    {source: '/img/animals1/horse.jpg', title: 'horse', russianTitle: 'лошадь', audio: '/img/audio/animal1/horse.mp3'},
    {source: '/img/animals1/pig.jpg', title: 'pig', russianTitle: 'свинья', audio: '/img/audio/animal1/pig.mp3'},
    {source: '/img/animals1/rabbit.jpg', title: 'rabbit', russianTitle: 'кролик', audio: '/img/audio/animal1/rabbit.mp3'},
    {source: '/img/animals1/sheep.jpg', title: 'sheep', russianTitle: 'овца', audio: '/img/audio/animal1/sheep.mp3'},
];

const animalSetB = [
    {source: '/img/animals2/bird.jpg', title: 'bird', russianTitle: 'птица', audio: '/img/audio/animal2/bird.mp3'},
    {source: '/img/animals2/dolphin.jpg', title: 'dolphin', russianTitle: 'дельфин', audio: '/img/audio/animal2/dolphin.mp3'},
    {source: '/img/animals2/fish.jpg', title: 'fish', russianTitle: 'рыба', audio: '/img/audio/animal2/fish.mp3'},
    {source: '/img/animals2/frog.jpg', title: 'frog', russianTitle: 'лягушка', audio: '/img/audio/animal2/frog.mp3'},
    {source: '/img/animals2/giraffe.jpg', title: 'giraffe', russianTitle: 'жираф', audio: '/img/audio/animal2/giraffe.mp3'},
    {source: '/img/animals2/lion.jpg', title: 'lion', russianTitle: 'лев', audio: '/img/audio/animal2/lion.mp3'},
    {source: '/img/animals2/mouse.jpg', title: 'mouse', russianTitle: 'мышь', audio: '/img/audio/animal2/mouse.mp3'},
    {source: '/img/animals2/turtle.jpg', title: 'turtle', russianTitle: 'черепаха', audio: '/img/audio/animal2/turtle.mp3'},
];

const clothes = [
    {source: '/img/clothes/blouse.jpg', title: 'blouse', russianTitle: 'блузка', audio: '/img/audio/clothes/blouse.mp3'},
    {source: '/img/clothes/boot.jpg', title: 'boot', russianTitle: 'ботинок', audio: '/img/audio/clothes/boot.mp3'},
    {source: '/img/clothes/coat.jpg', title: 'coat', russianTitle: 'пальто', audio: '/img/audio/clothes/coat.mp3'},
    {source: '/img/clothes/dress.jpg', title: 'dress', russianTitle: 'платье', audio: '/img/audio/clothes/dress.mp3'},
    {source: '/img/clothes/pants.jpg', title: 'pants', russianTitle: 'брюки', audio: '/img/audio/clothes/pants.mp3'},
    {source: '/img/clothes/shirt.jpg', title: 'shirt', russianTitle: 'рубашка', audio: '/img/audio/clothes/shirt.mp3'},
    {source: '/img/clothes/shoe.jpg', title: 'shoe', russianTitle: 'туфля', audio: '/img/audio/clothes/shoe.mp3'},
    {source: '/img/clothes/skirt.jpg', title: 'skirt', russianTitle: 'юбка', audio: '/img/audio/clothes/skirt.mp3'},
];

const emotion = [
    {source: '/img/emotion/angry.jpg', title: 'angry', russianTitle: 'сердитый', audio: '/img/audio/emotion/angry.mp3'},
    {source: '/img/emotion/happy.jpg', title: 'happy', russianTitle: 'счастливый', audio: '/img/audio/emotion/happy.mp3'},
    {source: '/img/emotion/laugh.jpg', title: 'laugh', russianTitle: 'смех', audio: '/img/audio/emotion/laugh.mp3'},
    {source: '/img/emotion/sad.jpg', title: 'sad', russianTitle: 'грустный', audio: '/img/audio/emotion/sad.mp3'},
    {source: '/img/emotion/scared.jpg', title: 'scared', russianTitle: 'испуганный', audio: '/img/audio/emotion/scared.mp3'},
    {source: '/img/emotion/smile.jpg', title: 'smile', russianTitle: 'улыбка', audio: '/img/audio/emotion/smile.mp3'},
    {source: '/img/emotion/surprised.jpg', title: 'surprised', russianTitle: 'туфля', audio: '/img/audio/emotion/surprised.mp3'},
    {source: '/img/emotion/tired.jpg', title: 'tired', russianTitle: 'уставший', audio: '/img/audio/emotion/tired.mp3'},
];

const statistics = [
    {source: '/img/emotion/surprised.jpg', title: 'surprised', russianTitle: 'туфля', audio: '/img/audio/emotion/surprised.mp3', index: 0}
]

const routes = [
    {route: '/', name: 'Main', data: mainCards , method: 'createMainCards'},
    {route: '/actionseta', name: 'Action (Set A)', data: actionSetA, method: 'createThematicCards'},
    {route: '/actionsetb', name: 'Action (Set B)', data: actionSetB, method: 'createThematicCards'},
    {route: '/actionsetc',  name: 'Action (Set C)', data: actionSetC, method: 'createThematicCards'},
    {route: '/animalseta', name: 'Animals (Set A)', data: animalSetA, method: 'createThematicCards'},
    {route: '/animalsetb', name: 'Animals (Set B)', data: animalSetB, method: 'createThematicCards'},
    {route: '/adjective', name: 'Adjective', data: adjective, method: 'createThematicCards'},
    {route: '/emotion', name: 'Emotions', data: emotion, method: 'createThematicCards'},
    {route: '/clothes', name: 'Clothes', data: clothes, method: 'createThematicCards'},
    {route: '/statistics', name: 'Statistics', data: statistics, method: 'createThematicCards'}
]

export {routes, mainCards, emotion, clothes, animalSetA, animalSetB, adjective, actionSetA, actionSetB, actionSetC};