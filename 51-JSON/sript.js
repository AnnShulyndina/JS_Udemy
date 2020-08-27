'use strict';

// const persone = {
//     name: 'Alex',
//     tel: '+74444'
// };

// console.log(JSON.stringify(persone));
// //отправили данные на json
// console.log(JSON.parse(JSON.stringify(persone));
// //когда с сервера приходит JSON


const persone = {
    name: 'Alex',
    tel: '+74444',
    parents: {
        mom:'Olga',
        dad:'Make'
    }
};
const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Ann';
console.log(persone);
console.log(clone);