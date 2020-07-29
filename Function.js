"use strict";
// function showFirstMessage() {
//     console.log("hello, world!");
// }
// showFirstMessage(); //вызов функции обязателен

// //the same
// function showFirstMessage(text) { //2 текст передается в аргумент функции text
//     console.log(text); //3 Далее срабатывает console.log
// }
// showFirstMessage("hello, world!"); //1 зпускается функция

let num = 20; //глобальная переменная

function showFirstMessage(text) {
    console.log(text);
    let num = 10; // внутренняя
    console.log(num); //замыкание функции это сама функция вместе со всеми внешними переменными которые ей доступны
    // если console.log(num) не найдет переменную внутри функции, то cosole идет на уровеь выше и ищет глобальную
}
showFirstMessage("hello world!");
console.log(num); //выводит глобальную


// function calc(a, b) {
//     return (a + b);
// }
// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));
//__________________________
function ret() {
    let num = 50;
    //
    return num;
}
const anotherNum = ret();
console.log(anotherNum); // 50

//function expression
const logger = function() {
console.log('Hello');
};
logger();

//arrow function
 const calc = (a, b) => {
    console.log('1'); 
    return a + b;
 };




