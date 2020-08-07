const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.button-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));
// console.log(btns[0].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// btns[0].addEventListener('click', () => {
// if(!btns[1].classList.contains('red')) {
//     btns[1].classList.add('red');
// } else {
//     btns[1].classList.remove('red');
// }
//the same
//     btns[1].classList.toggle('red');
// });

// console.log(btns[0].className);

// wrapper.addEventListener('click', (event) => { //выдает ошибку, консоль не выводит hello
//     if (event.target && event.target.tagName == "BUTTON") {
//         console.log('Hello!');
//     }
// });

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('hello');
    });
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);

