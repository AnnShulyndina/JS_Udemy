"use strict";

let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}

//сделать цикл и выйти из него
do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i=1; i < 8; i++) {
    console.log(i);
}

for (let i=1; i < 10; i++) {
    if ( i === 6) {
        // break;
        continue;
    }
    console.log(i); //выводятся все цифры кроме 6
    }