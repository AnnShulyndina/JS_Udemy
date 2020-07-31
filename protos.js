"use ctrict";

let str = 'some';
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

const jonh = Object.create(soldier); // Object.create() - для создания прототипных связей

// const jonh = {
//     health: 100
// };

// jonh.__proto__=soldier; //устаревшая версия proto

// Object.setPrototypeOf(jonh, soldier); //Object.setPrototypeOf() - для создания прототипных связей

// console.log(jonh.armor); //устаревшая версия proto
jonh.sayHello();