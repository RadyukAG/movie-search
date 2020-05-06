const APIkey = 'trnsl.1.1.20200504T170145Z.9a091ab88d066911.4f4639f039466b492f763d5295e16ee21d703fdb';
export default function getTranslation (searchString) {
    if (searchString.search(/[а-яА-Я]/) === -1) {
        return searchString;
    }
    const request = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${APIkey}&text=${searchString}&lang=ru-en`;
    return fetch (request)
        .then(response => response.json())
        .then(object => object.text)
        .catch(error => error);
}