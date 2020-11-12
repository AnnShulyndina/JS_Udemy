"use strict";
class User {
    constructor(name, age) {
        this.name = name
        this.userAge = age
    }
  
    say() {
        console.log(`Имя пользователя: ${this.name}, возраст ${this.userAge}`);
    }
    getAge() {
        return this.userAge;
    }
    
    setAge(age) {
        if (typeof age === "number" && age > 0 && age < 110) {
            userAge = age;
        } else {
            console.log('Недопустимое значение');
        }
    }
}

const  ivan = new User('Ivan', 27);

console.log(ivan.name);
ivan.userAge = 99
console.log(ivan.getAge());


ivan.setAge(30);
ivan.setAge(300);
console.log(ivan.getAge());

ivan.say()
