// Задания на урок:

// 1) Реализовать функционал, что 
// 1 после заполнения формы и нажатия кнопки "Подтвердить" - новый фильм добавляется в список. 

// 2 Страница не должна перезагружаться.

// 3 Новый фильм должен добавляться в movieDB.movies.

// 4 Для получения доступа к значению input - обращаемся к нему как input.value;

// P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

// 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

// 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

// 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
// "Добавляем любимый фильм"

// 5) Фильмы должны быть отсортированы по алфавиту 

'use strict';

document.addEventListener('DOMContentLoaded', () => { //'DOMContentLoaded' - 
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'), //class поэтому ставим точку
        checkbox = addForm.querySelector('[type = "checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
//2
        let newFilm = addInput.value;
        const favourite = checkbox.checked;
            //2
            if(newFilm){ //if для того чтобы нельзя было ввести пустую строку, а только если есть значение
                if (newFilm.length> 21) {
                    newFilm = `${newFilm.substring(0, 22)}...`;
                }
                if(favourite){
                    console.log("Добавляем любимый фильм");
                }
                movieDB.movies.push(newFilm);
                sortArr(movieDB.movies);
                createMovieList(movieDB.movies, movieList);
        }

        event.target.reset();//сбросить события?
    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'Драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };
    

    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);//сортировка
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });
        //удаляем добавленный фильм при помощи обращения к родителю
    document.querySelectorAll('.delete').forEach((btn, i)=> {
        btn.addEventListener('click', ()=> {
            btn.parentElement.remove();
            movieList.movies.splice(i, 1);
            createMovieList(films, parent); //не работает, нумерация при удалении не меняется

        });
    });
    }


    deleteAdv(adv);//удаление рекламы
    makeChanges();//изменения на страничке
    
    createMovieList(movieDB.movies, movieList);
});