"use strict";

const p = document.querySelectorAll('p');
console.log('p');



function loadScript(src) {
    const script = document.createElement('script');
    script.src = '35-test.js';
    script.async = false; //чтобы файлы js не подгружались одновременно
    document.body.append(script);
}
loadScript('35-test.js');