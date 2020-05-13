module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
        "extends": [
            "airbnb-base",
            "prettier"
        ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "no-param-reassign": "off",
        "no-unused-expressions": "off",
        "class-methods-use-this": "off",
        "import/no-cycle": "off",
        "import/no-unresolved": "off",
    }
};
