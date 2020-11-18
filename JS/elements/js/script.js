'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart'), //при работе с селекторами обязательно ставить точку
    oneHeart = wrapper.querySelector('.heart');

// console.dir(box);


// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
//the same
const num = 500;
box.style.cssText = `background-color: blue; width: ${num}px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i<hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }
//the same
hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

div.classList.add('black');
// document.body.append(div);
// document.querySelector('.wrapper').append(div);
wrapper.append(div);
// wrapper.prepend(div);

// hearts[2].before(div);
// hearts[0].after(div);
//circles[0].remove();

hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = "<h1>Hello World</h1>"; 
//div.textContent = "hello"; // только для текста
div.insertAdjacentHTML("afterend", '<h2>hello</h2>');
//beforebegin; afterbegin; beforeend; afterend




