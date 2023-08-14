const shape = require('./shape.js');

// get user char input
const characters = characters => {
    if (characters.length > 3) {
        return characters.slice(0, 3);
    } else {
        return characters;
    }
}

const generateLogo = (data) => {
    const finalShape = shape;
    const finalCharacters = characters(data.characters);
    
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${finalShape}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${finalCharacters}</text>
        </svg>`
}
module.exports = generateLogo;