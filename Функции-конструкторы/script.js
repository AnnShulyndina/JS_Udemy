'use strict';

// // const num = new Function(3); 
// // console.log(num); //устаревший пример

// function User(name, id) {
//     this.name = name;//прописываем свойства как в объекте
//     this.id = id;
//     this.human = true;
// //метод, создав один раз метод в прототипе он будет у каждого из наших потомков
// //например строчка (const ivan = new User('Ivan', 28);)
//     this.hello = function() {
//         console.log(`hello ${this.name}`);
//     };
// }

// User.prototype.exit = function(name) {
//     console.log(`Пользователь ${this.name} ушел`);
// };
// const ivan = new User('Ivan', 28);
// const alex = new User('Alex', 20);

// ivan.exit();

// ivan.hello();
// alex.hello();

//функционал ES5 в ES6 появились классы
//это то что находится внутри классов

// console.log(ivan);
// console.log(alex);


//необходимо добавить значение переменной
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }

    hello() {
        console.log(`Hello! ${this.name}`);
    }
    exit() {
        console.log(`Пользователь ${this.name} ушел`);
    }
}
