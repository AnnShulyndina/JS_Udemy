'use strict';

const now = new Date();

console.log(now.setHours(18));
console.log(now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
console.log(now.getTimezoneOffset());

let start = new Date();
 for(let i = 0; i<100000; i++) {
     let some = i ** 3; //возводим i в третью степень
 }


let end = new Date();

alert(`Цикл отработал за ${end-start} миллисекунд`);