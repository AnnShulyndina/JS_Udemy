"use strict";

function first() {
    setTimeout(function() {
        console.log(1);
            }, 500);
}

function second() {
    console.log(2);
}
first();
second(); 

//call-back функция - это функция которая должна быть выполнена после завершения какой-то другой функции

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done(){
    console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done);
//function(){console.log('Я прошел этот урок!'); - анонимная функция
