'use strict';
//если много действий должны выполняться одно за другим используется promise
//

console.log('Запрос данных...');
const req = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Подготовка данных...');

        const product = {
            name: 'TV',
            price: 2000
        };

        resolve(product);//заместо retern
    }, 2000);
});

req.then((product) => { // then принимает аргумент с функцией resolve 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = "order";
            resolve(product);
        }, 2000);
    });
}).then(data => {
    data.modify = true;
    return data;
}).then(data => {
    console.log(data);
});



