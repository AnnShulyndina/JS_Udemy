'use strict';
//классы служат для создания новых объектов
class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width); 
        //super вызывает след. строчки родителя this.height = height; this.width = width;
        //super должен быть всегда на первом месте в конструкторе
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}
const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');
div.showMyProps();
console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// console.log(square.calcArea());

// const long = new Rectangle(10, 10);
// console.log(square.calcArea());