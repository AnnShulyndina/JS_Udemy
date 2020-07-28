"use strict";

// let number = 5;
// const leftBorderWidth = 1;
// number = 10;
// console.log(number)

// const obj = {
//     a: 50
// };
// obj.a = 10;
// console.log(obj);

// let number = 4.6;

// console.log (-4/0); // -infinity
// console.log ('string' * 9); // NaN

// const person = `5`;

// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// console.log(obj.age);
// // console.log(obj["name"]); // the same

// let arr = ['plum.png', 'orange.jpg', 'apple.bmp', {}, []];
// console.log(arr[1]);

// const result = confirm("Are you here?"); //всплывающее окно
// console.log(result);

// const answer = prompt("Are you 18 years old?", "18"); //всплывающее окно и поле со строкой // +prompt - number
// console.log(answer + 5);

// const answer = [];
// answer[0] = prompt('Как ваше имя?', '');
// answer[1] = prompt('Как ваша фамилия?', '');
// answer[2] = prompt('Сколько вам лет?', '');

// document.write(answer);

//___8.Интерполяция

// const category = 'toys';
// console.log('https://someurl.com/' + category);
// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";
// alert(`Hello, ${user}`);

//___9.Операторы JS

console.log('arr' + "object");
console.log(4 + "object");
//унарный плюс
console.log(4 + +"5") // с помощью знака впереди строки преобразовали строку в число

//инкремент и дикремент
let incr = 10,
    decr = 10;

// incr ++;
// decr --; //префиксаная операция
console.log(--incr);//префиксная форма
console.log(++decr);

console.log(5 % 2);
console.log(2 * 4 !== "8");

// && - и
// || - или

const isChecked = true,
    isClose = true;

    console.log(isChecked && !isClose);










