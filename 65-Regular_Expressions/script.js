"use strict";

//new RegExp('pattern', 'flags');
///pattern/flag (i, g, m )

// const ans = prompt('input name');
// const reg = /n/i;
// i - найти что-то вне зависимости от регистра
// g - найти несколько вхождений
// m - включает многострочный режим
//class
// \d - ищем цифры  \D
// \w - все слова, буквы \W
// \s - пробелы \S

// const reg = /\d/;
// console.log(ans.match(reg));

const str = 'My name is R2D2';
console.log(str.match(/\W/i));

//console.log(ans.search(reg));

// console.log(ans.match(reg));

// const pass = prompt('Password');
// console.log(pass.replace(/\./g, '*'));

// console.log('12-34-56'.replace(/-/g, ':'));

// console.log(reg.test(ans)); проверка