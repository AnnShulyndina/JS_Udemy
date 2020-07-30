"use strict";

const str = "test";
const arr = [1, 2, 3];
console.log(arr.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit")); //5 - поиск подстроки
const logg = "Hello, world!";
console.log(logg.slice(6, 12)); //поддерживает отрицательные значения

console.log(logg.substr(6, 5)); //сколько символов необходимо вырезать

const num = 12.2;
console.log(Math.round(num));//округление числа

const test = "12.2px";
console.log(parseInt(test)); //строка превращается в числовой тип данных
console.log(parseFloat(test)); //строка превращается в числовой тип данных


