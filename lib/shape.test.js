const {Circle, Triangle, Square} = require('./shape.js');

describe('Shapes', () => {
    // It should test if there is a shape property
    describe('circle', () => {
        test('should have a circle property', () => {
            const expectedHTML = `<circle cx="150" cy="100" r="80" fill="red" />`
            const item = new Circle("red");
            expect(item.render()).toEqual(expectedHTML);
        });
    });
    describe('triangle', () => {
        test('should have a triangle property', () => {
            const expectedHTML = `<polygon points="150,20 220,130 80,130" fill="red" />`
            const item = new Triangle("red");
            expect(item.render()).toEqual(expectedHTML);
        });
    });
    describe('square', () => {
        test('should have a square property', () => {
            const expectedHTML = `<rect x="150" y="20" width="100" height="100" fill="red" />`
            const item = new Square("red");
            expect(item.render()).toEqual(expectedHTML);
        });
    });
});


