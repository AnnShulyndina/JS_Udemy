'use strict';

const box = document.querySelector('.box'),
btn = document.querySelector('button');

const width = box.scrollWidth;
const height = box.scrollHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

// const width = box.clientWidth;
// const height = box.clientHeight;


console.log(width, height);

btn.addEventListener('click', ()=> {
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect().top);
const style  = window.getComputedStyle(box);
console.log(style.display);

document.documentElement.scrollTop = 0; //можно сделать стрелочку которая
//будет возвращать страничку к началу
window.scrollBy(0, 400)
window.scrollTo(0, 400) //перемещение пользователя по странице