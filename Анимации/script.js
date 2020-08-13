'use strict';
// const timeId = setTimeout(function(text) {
//     console.log(text);
// }, 2000, 'hello');

const btn = document.querySelector('.btn');
let timerId,
i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";        
        }
    }
}
btn.addEventListener('click', myAnimation);


// btn.addEventListener('click', ()=> { //просто говорим что после клика у нас будет запускаться таймер
//     timerId = setInterval(logger, 500);
// });

// clearInterval(timerId);

// function logger () {
//     if (i === 3){
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }
//чем рекурcивный setTimeout лучше чем setInterval?
//setInterval - когда таймер с интервалом работает он не учитывает как долго будет работать функция внутри него
// let id = setTimeout(function log(){
//     console.log('Hello');
//     id = setTimeout(log, 500);
// }, 500);
