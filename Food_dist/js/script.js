'use strict';

window.addEventListener('DOMContentLoaded', () => {

    let tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {

        tabsContent.forEach(item => {//скрыть все ненужные табы которые у нас есть на странице
            item.classList.add('hide'); //item.style.display = 'none'
            item.classList.remove('show', 'fade');

        });

        tabs.forEach(item => { //убираем класс активности у табов
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) { //функция которая показывает табы
        //tabsContent[i].style.display = 'block';
        //tabsContent[i].classList.add('tabheader__item_active');
        //поменяли на после добавления функций в css
        tabsContent[i].classList.add('show', 'fade'); //
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');//добавляем активность табу
    }

    hideTabContent();
    showTabContent();

    //делигирование событий, обработчик события клика
    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });


    //Timer promotion in CSS
    const deadline = '2020-10-11';

    function getTimeRemaining(endtime) {
        //Math.floor() - округляет аргумент до ближайшего меньшего целого
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor((t / (1000 * 60 * 60 * 24))),//в одной секунде 1000 миллисекунд
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60) % 24));//%24 - делим на общее количество часов в сутках чтобы получить хвостик
        //возвращаем переменные наружу т.к. данные переменные выше работают только внутри функции
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) { //для нолика впереди
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();//для сразу текущей даты, чтобы дата не моргала

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) { //если время вышло то таймер не будет обновлятьсяё
                clearInterval(timeInterval);
            }

        }
    }
    
    setClock('.timer', deadline);

    // модальное окно
    const modalTrigger = document.querySelectorAll('[data-modal]'), //[] потому что это атрибут
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');

    modalTrigger.forEach(btn =>{
        btn.addEventListener('click', ()=> {
            modal.classList.add('show'); //при клике должно показаться модальное окно
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden'; //при открытии модального окна сама страница сайта не 
            //прокручивается благодаря overflow
        });
    });
    
   

    modalCloseBtn.addEventListener('click', ()=> {
        modal.classList.add('hide'); //при клике должно закрываться модальное окно
        modal.classList.remove('show');
        document.body.style.overflow = '';
    });
});



//     const modalTrigger = document.querySelectorAll('[data-modal]'),
//     modal = document.querySelector('.modal'),
//     modalCloseBtn = document.querySelector('[data-close]');

// modalTrigger.forEach(btn => {
//     btn.addEventListener('click', function() {
//         modal.classList.add('show');
//         modal.classList.remove('hide');
//         // Либо вариант с toggle - но тогда назначить класс в верстке
//         document.body.style.overflow = 'hidden';
//     });
// });

// function closeModal() {
//     modal.classList.add('hide');
//     modal.classList.remove('show');
//     // Либо вариант с toggle - но тогда назначить класс в верстке
//     document.body.style.overflow = '';
// }

// modalCloseBtn.addEventListener('click', closeModal);

// modal.addEventListener('click', (e) => {
//     if (e.target === modal) {
//         closeModal();
//     }
// });

// document.addEventListener('keydown', (e) => {
//     if (e.code === "Escape" && modal.classList.contains('show')) { 
//         closeModal();
//     }
// });
// });
