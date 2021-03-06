//учет просмотренных видео
/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'


2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */




/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и 
- если он меньше 10 - вывести сообщение "Просмотрено довольно мало фильмов", 
- если от 10 до 30 - "Вы классический зритель", а 
- если больше - "Вы киноман". А 
- если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/
//1
'use strict';
const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели', '');

//2
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//1
for (let i=0; i<1; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его', '');
//2
    if(a != null && b !=null && a !='' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b; 
        console.log('done');
    } else {
        console.log('error');
        i--; // возвращает пользователя к начальным вопросам если он нажал 'отмена'
    }
//3
    // switch(personalMovieDB.count) {
    //     case personalMovieDB.count < 10:
    //         console.log("Просмотрено мало фильмов");
    //         break;
    //     case 10>= personalMovieDB.count >= 30:
    //         console.log("Вы классический зритель");
    //         break;
    //     case personalMovieDB.count > 30:
    //         console.log("Вы киноман");
    //         break;
    //     default:
    //        console.log("Произошла ошибка");
    //        break;
    //   }    //switch используется только для прямого сравнения,  
    // а так как у нас промежутки мы не можем его применять!! 
   
        if(personalMovieDB.count < 10) {
            console.log ("Просмтрено мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) { 
            console.log ("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            console.log ("Вы киноман");
        } else {
            console.log ("Произошла ошибка");
        }
    }       
console.log(personalMovieDB);








