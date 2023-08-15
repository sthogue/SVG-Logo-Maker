const {Circle, Square, Triangle} = require('./shape.js');

class SVG{
    constructor(shape, color, textColor, characters){
        this.shape = shape;
        this.textColor = textColor;
        this.characters = characters;
        this.color = color;
    }
    render(){
        if(this.shape === 'Circle'){
            const html = new Circle(this.color).render();
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${html}
            <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textColor}>${this.characters}</text>
            </svg>`
        } else if(this.shape === 'Square'){
            const html = new Square(this.color).render();
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${html}
            <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textColor}>${this.characters}</text>`
        } else if(this.shape === 'Triangle'){
            const html = new Triangle(this.color).render();
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${html}
            <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textColor}>${this.characters}</text>`
        }
    }
}

module.exports = SVG;