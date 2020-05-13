import {Backspace, Delete, Shift, ArrowRight, ArrowLeft, Space, ChangeLang, Search} from '../buttonHandlers/buttonHandlers'

const enKeys = [
    {
      main: '`',
      shiftMode: '~',
      code: 'Backquote',
    },
    {
      main: '1',
      shiftMode: '!',
      code: 'Digit1',
    },
    {
      main: '2',
      shiftMode: '@',
      code: 'Digit2',
    },
    {
      main: '3',
      shiftMode: '#',
      code: 'Digit3',
    },
    {
      main: '4',
      shiftMode: '$',
      code: 'Digit4',
    },
    {
      main: '5',
      shiftMode: '%',
      code: 'Digit5',
    },
    {
      main: '6',
      shiftMode: '^',
      code: 'Digit6',
    },
    {
      main: '7',
      shiftMode: '&',
      code: 'Digit7',
    },
    {
      main: '8',
      shiftMode: '*',
      code: 'Digit8',
    },
    {
      main: '9',
      shiftMode: '(',
      code: 'Digit9',
    },
    {
      main: '0',
      shiftMode: ')',
      code: 'Digit0',
    },
    {
      main: '-',
      shiftMode: '_',
      code: 'Minus',
    },
    {
      main: '=',
      shiftMode: '+',
      code: 'Equal',
    },
    {
      main: 'Backspace',
      shiftMode: null,
      code: 'Backspace',
      buttonHandler: Backspace,
    },
    {
      main: 'Delete',
      shiftMode: null,
      code: 'Delete',
      buttonHandler: Delete,
    },
    {
      main: 'q',
      shiftMode: 'Q',
      code: 'KeyQ',
    },
    {
      main: 'w',
      shiftMode: 'W',
      code: 'KeyW',
    },
    {
      main: 'e',
      shiftMode: 'E',
      code: 'KeyE',
    },
    {
      main: 'r',
      shiftMode: 'R',
      code: 'KeyR',
    },
    {
      main: 't',
      shiftMode: 'T',
      code: 'KeyT',
    },
    {
      main: 'y',
      shiftMode: 'Y',
      code: 'KeyY',
    },
    {
      main: 'u',
      shiftMode: 'U',
      code: 'KeyU',
    },
    {
      main: 'i',
      shiftMode: 'I',
      code: 'KeyI',
    },
    {
      main: 'o',
      shiftMode: 'O',
      code: 'KeyO',
    },
    {
      main: 'p',
      shiftMode: 'P',
      code: 'KeyP',
    },
    {
      main: '[',
      shiftMode: '{',
      code: 'BracketLeft',
    },
    {
      main: ']',
      shiftMode: '}',
      code: 'BracketRight',
    },
    {
      main: 'a',
      shiftMode: 'A',
      code: 'KeyA',
    },
    {
      main: 's',
      shiftMode: 'S',
      code: 'KeyS',
    },
    {
      main: 'd',
      shiftMode: 'D',
      code: 'KeyD',
    },
    {
      main: 'f',
      shiftMode: 'F',
      code: 'KeyF',
    },
    {
      main: 'g',
      shiftMode: 'G',
      code: 'KeyG',
    },
    {
      main: 'h',
      shiftMode: 'H',
      code: 'KeyH',
    },
    {
      main: 'j',
      shiftMode: 'J',
      code: 'KeyJ',
    },
    {
      main: 'k',
      shiftMode: 'K',
      code: 'KeyK',
    },
    {
      main: 'l',
      shiftMode: 'L',
      code: 'KeyL',
    },
    {
      main: ';',
      shiftMode: ':',
      code: 'Semicolon',
    },
    {
      main: "'",
      shiftMode: '"',
      code: 'Quote',
    },
    {
      main: '\\',
      shiftMode: '|',
      code: 'Backslash',
    },
    {
      main: ' ',
      shiftMode: null,
      code: 'ShiftLeft',
      buttonHandler: Shift,
    },
    {
      main: '<',
      shiftMode: '>',
      code: 'IntlBackslash',
    },
    {
      main: 'z',
      shiftMode: 'Z',
      code: 'KeyZ',
    },
    {
      main: 'x',
      shiftMode: 'X',
      code: 'KeyX',
    },
    {
      main: 'c',
      shiftMode: 'C',
      code: 'KeyC',
    },
    {
      main: 'v',
      shiftMode: 'V',
      code: 'KeyV',
    },
    {
      main: 'b',
      shiftMode: 'B',
      code: 'KeyB',
    },
    {
      main: 'n',
      shiftMode: 'N',
      code: 'KeyN',
    },
    {
      main: 'm',
      shiftMode: 'M',
      code: 'KeyM',
    },
    {
      main: ',',
      shiftMode: '<',
      code: 'Comma',
    },
    {
      main: '.',
      shiftMode: '>',
      code: 'Period',
    },
    {
      main: '/',
      shiftMode: '?',
      code: 'Slash',
    },
    {
      main: 'Change language',
      shiftMode: null,
      code: 'ChangeLang',
      buttonHandler: ChangeLang,
    },
    {
      main: ' ',
      shiftMode: null,
      code: 'Space',
      buttonHandler: Space,
    },
    {
      main: ' ',
      shiftMode: null,
      code: 'ArrowLeft',
      buttonHandler: ArrowLeft,
    },
    {
      main: ' ',
      shiftMode: null,
      code: 'ArrowRight',
      buttonHandler: ArrowRight,
    },
    {
      main: 'Enter',
      shiftMode: null,
      code: 'Enter',
      buttonHandler: Search,
    },
  ];

  export default enKeys;