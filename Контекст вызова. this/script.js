'use strict';

1)
function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b; //пример замыкания функции(сначала переменные a и b ищутся внутри функции
        //когда функция их не находит она обращается к родительской функции showThis 
    }
    console.log(sum());
}
showThis(4, 5);

2)
const obj = {
    a: 20,
    b: 15,
    sum: function () {
        console.log(this);
    }
};
obj.sum();

3)
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log("Hello!" + this.name);
    };
}
let ivan = new User('Ivan', 23);

4)
function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}
const user = {
    name: 'John'
};

// ручное присвоение котекста разными методами
//call, apply 
sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);//разница только в синтаксисе

//bind
//создает новую функцию и под нее уже подвязывает контекст
function count(num) {
    return this * num;
}
const double = count.bind(2); //эта строчка this и она равна 2, double = 2
console.log(double(3));//this * num, т.е. double (2) * 3 = 6
console.log(double(13));// double(13)*3=26

// ---------4 способа когда меняется контекст
//1) обычная функция: this = window, но если use strict то будет undefined
//2) Контекст у методов объекта это будет сам объект
//3) this в кострукторах и классах - это новый экземпляр объекта
//4) ручная привязка this: call, apply, bind



const btn = document.querySelector('button');

// btn.addEventListener('click', function () { //call back функция
//    this.style.backgroundColor = 'red';
// });
btn.addEventListener('click', (e) => { //call back функция
    e.target.style.backgroundColor = 'red';
});
// function () - обращается к элементу this, если поменять на стр. ф-ю ()=> то она обращается к undefined, т.к. своего
// контекста вызова у нее нет, без use strict to - window
// поэтому используем (e)=> за место this event.target

const obj = {
    num: 5,
    sayNamber: function () { //метод внутри объекта и он ссылается на сам объект
        const say = () => { //стрелочная ф-я которая в консоль будет выводить this
            //стр. ф-я берет контекст у своего родителя - метод sayNamber
            console.log(this.num);//у метода всегда контекст ссылается на объект в котром он сущетсвует
        };//поэтому this берет контекст объекта
        say();
    }
};
obj.sayNamber();




// const double = (a) => {
//     return a*2;
// }
//the same shorter - если функция принимает один аргумент то можно не ставить
//круглые скобки и если ф-я одной строкой можно не ставить кривые скобки,
//return подставится автоматически
const double = a => a * 2;
console.log(double(4));
