//filter, map
let names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];
let shortNames = names.filter((name) => {
    return name.length < 5;
});

console.log(shortNames);

//интерполяции
let answers = ['ivan', 'ann', 'hello'];
answers = answers.map((item) => item.toUpperCase());
console.log(answers);
console.log(`Пользователь ${name}, ${age} лет`)

//значения по умолчанию
function fetchData(data, count = 0) {
    console.log(`Данные ${data} в количестве ${count}`)
}

fetchData('something')

//rest и spread operators
function max(...numbers) {
    console.log(numbers);
}

max(3, 4, 67);

const arr1 = [1, 2, 5],
    arr2 = [43, 2, 6];

const res = Math.max(...arr1, 300, ...arr2);
console.log(res);
//

const x = 25, y = 10;
const coords = {
    x: x,
    y: y,
    calcSq: function () {
        console.log(this.x * this.y);
    }
}

// const coords = {
//     x, y
//     calcSq() {
//         console.log(this.x * this.y)
//     }
// }


//деструктуризация:

//объектов
const user = {
    name: {
        first: 'Sam',
        second: 'Smith'
    },
    pass: 'qwerty',
    rigths: 'user'
};
const {name: {first, second}, pass, rigths} = user;
console.log(first, second);

function connect({
                     host = 'localhost',
                     port = 3000,
                     user = 'default'
                 }) {
    console.log(`host: ${host}, port: ${port}, user: ${user}`)
}

connect({port: 232})

//объектов
const country = {
    name: 'England',
    population: 2000000,
    gender: {
        male: ['15%', '40%'],
        female: ['16%', '29%']
    }
}
const {gender: {male: [maleUnder18, maleAdult], female: [femaleUnder18, femAdult]}} = country;
console.log(maleUnder18, femAdult)