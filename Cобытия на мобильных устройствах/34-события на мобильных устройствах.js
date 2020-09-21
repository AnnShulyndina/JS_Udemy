//touchstart
//touchmove
//touchend
//touchenter
//toucheleave
//touchcancel
window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    box.addEventListener('touchstart', (e) => {
        e.preventDefault(); //отменяем стандартное поведение браузера
        console.log('Start');
        console.log(e.targetTouches);// если надо получить список всех пальцев на экране то используем touches
    });

    // box.addEventListener('touchmove', (e) => {
    //     e.preventDefault();
    //     console.log('Move');
    // });

    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();
    //     console.log('End');
    // });
});

//touches если надо получить список всех пальцев на экране то используем
//targetTouches все взаимодействия с конкретным элементом 
//changedTouches - список пальцев которые учавтсвуют в текущем событии
//hammerjs.github.io