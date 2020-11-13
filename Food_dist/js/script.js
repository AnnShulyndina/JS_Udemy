window.addEventListener('DOMContentLoaded', function () {
    const tabs = require('./modules/tabs'),
        modal = require('./modules/modal'),
        timer = require('./modules/timer'),
        cards = require('./modules/cards'),
        slider = require('./modules/slider'),
        forms = require('./modules/forms'),
        indicators = require('./modules/indicators'),
        calc = require('./modules/calculator')

    tabs();
    modal();
    timer();
    cards();
    slider();
    forms();
    indicators();
    calc()
});

