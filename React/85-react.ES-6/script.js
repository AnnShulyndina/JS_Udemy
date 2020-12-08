// //filter

// let names = ['Valeriy', 'Igor', 'Alex', 'Tonya']
// let  shortNames = names.filter((name)=>{
//     return name.length === 4
// })
// console.log(shortNames)

// const names = ['Misha', 'Olga','Maria', 'Yegor']
// let numberOfName = names.indexOf('Olga')
// console.log(numberOfName)
//
// const books = ['Garry Potter', 'Peter Pen', 'Shrek']
// let bestBook = books.shift()
// console.log(bestBook)

// //map

// let answers = ['yes', 'now', 'no idea', 'of course']
// answers = answers.map((item)=> item.toUpperCase())
// console.log(answers)
//
// let age = 15
// console.log(`User ${name}, ${age} years`)

// function fetchData(data, count = 0) {
//     console.log(`Данные: ${data} в количестве ${count}`)
// }

fetchData('something')

//rest operator

//всегда должен быть в конце, и только один
// function max(...numbers) {
//     console.log(numbers);
// }
// max(3, 5, 6)

//spread operator

// const arr1 = [1, 2, 3],
//     arr2 = [43, 2, 26];
// const res = Math.max(1, ...arr1, 3, ...arr2);
// console.log(res)

// const user = {
//     name: 'Ann',
//     age: '28',
//     status: 'married',
//     children: 'two daughters'
// }
// const res = {...user}
// console.log(res);

const x = 25, y = 10;
//
// const coords = {
//     x: x,
//     y: y,
//     calacSq: function(){
//         console.log(this.x*this.y)
//     }
// }
// coords.calcSq()

const coords = {
    x, y,
//     calcSq() {
// console.log(this.x*this.y)}
// }
// coords.calcSq()
// console.log(coords)
//
// //деструктуризация
//
// const user  = {
//     name: 'Ann',
//     friends: {
//         myMan: 'flash',
//         myGirl: 'star',
//     },
//     sport: 'bball',
//     dream: 'NY'
// };
// const {friends:{myMan, myGirl}, sport, dream} = user
// console.log(myMan, sport)
    
    
