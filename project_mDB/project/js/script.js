/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта) V

2) Изменить жанр фильма, поменять "комедия" на "драма" V

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
// const adv  = document.querySelectorAll('.promo__adv img');
// adv.forEach(item => {
//     item.remove();
// });

const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list');

//1
adv.forEach(function (item) {
    item.remove();
});
//2
genre.textContent= 'Драма';
//3
poster.style.backgroundImage = 'url("img/bg.jpg")';
//4
//сначала для сортировки отчищаем список 
movieList.innerHTML = '';
//сортируем список по алфавиту
movieDB.movies.sort();
//5
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i+1} ${film}
        <div class="delete"></div>
    </li>
    `;
});









