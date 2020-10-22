"use strict";

// localStorage.setItem('number', 5);
// localStorage.removeItem('number');
// localStorage.clear();

// console.log(localStorage.getItem('number'));

const checkbox = document.querySelector('#checkbox'),
    form = document.querySelector('form'),
    change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
    form.style.background = 'red';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.background = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.background = 'black';
    }
});

const persone = {
    name: 'Alex',
    age: 25
};

// const serializedPersone = JSON.stringify(persone);
// localStorage.setItem('Alex', serializedPersone);
// console.log(JSON.parse(localStorage.getItem('Alex')));

localStorage.setItem('Alex', persone);
console.log(localStorage.getItem('Alex'));