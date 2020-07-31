"use strict";

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(а);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;
// copy.a = 10;
// console.log(copy);
// console.log(obj);

function copy(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) { // конструкция for( in )
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}
const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};
const newNumbers = copy(numbers); //поверхностные копии объектов (Метод 1)
newNumbers.a = 10;
newNumbers.c.x = 10;
console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add)); //независимая копия объектов (Метод 2)

const clone = Object.assign({}, add);
clone.d = 20;

// console.log(add);
// console.log(clone);


const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); //копирование старого массива (Метод 3)

newArray[1] = 'aaaa';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook']; // spread operator
console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];
log(...num);

const array = ["a", "b"];
const newAarray = [...array]; // поверхностная копия (Метод 4) массив

const q = {
    one: 1,
    two: 2
};
const newObj = {...q}; // поверхностная копия (Метод 4) объект

