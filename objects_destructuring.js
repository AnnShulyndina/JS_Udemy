"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};
options.makeTest();

//метод деструктуризации - вытащить из обекта вложенные объект
const {border, bg} = options.colors;
console.log(border);

// console.log(Object.keys(options).length); // (!) метод получения количество ключей в объекте

// console.log(options["colors"]["border"]);

// delete options.name;
// console.log(options);
// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object'){
//         for (let i in options [key]){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`); 
//не понятно с ${options[key]} - как это равно значению ключа?
//             counter++;
//         }
//         } else {
//             console.log(`Свойство ${key} имеет значение ${options[key]}`);
//             counter++; // метод перебора(сколько ключей в объекте) 
//     }
// }
// console.log(counter);