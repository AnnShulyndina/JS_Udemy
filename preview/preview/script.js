const btns = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay');

// btn.onclick = ()=> {
//     alert('click');
// };

// btn.onclick = ()=> {
//     alert('Second click'); //мы потеряли первый вывод клика
// };
// let i = 0;
const deleteElement = (event) => {
    console.log(event.target);
    console.log(event.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};
// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);
// btn.removeEventListener('click', deleteElement);


// btn.addEventListener('mouseenter', (event) => { //call back function вызывается сразу после клика
//     console.log(event.target);
//     event.target.remove();
// console.log('hover');
// });
// _______________________________________
// btn.addEventListener('click', () => { 
//     alert('Second click'); // в данном варианте выводится оба действия клика
// });

const link = document.querySelector('a');
link.addEventListener('click', function (event) { //call back func
    event.preventDefault();// отменяем стандартное поведение браузера (чтобы он не переходил по ссылке)
    console.log(event.target);//ссылка просто выводится в консоль
});


btns.forEach(btn => { //обработчик событий сразу на несколько элементов, теперь работает каждая кнопка
btn.addEventListener('click', deleteElement, {once: true});  //{once: true} - кнопка срабатывает только единожды 
});
