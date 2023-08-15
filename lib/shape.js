class Shape{
    constructor(color){
        //this.characters = characters;
        this.color = color;
        //this.textColor = textColor;
        //this.shape = shape;
        
    }
}

class Circle extends Shape{
    constructor(color){
        super(color);
        //this.shape = 'Circle';
    }
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
        //return this.render();
    }
}

class Triangle extends Shape{
    constructor(color){
        super(color);
        //this.shape = 'Circle';
    }
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
        //return this.render();
    }
}

class Square extends Shape{
    constructor(color){
        super(color);
    }
    render(){
        return `<rect x="150" y="20" width="100" height="100" fill="${this.color}" />`;
    }
}

module.exports = {Circle, Triangle, Square};