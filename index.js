//Required packages for application to run
const inquirer = require('inquirer');
const fs = require('fs');
const SVG = require('./lib/svg.js');

const questions = [
    {
        type: 'input',
        name: 'characters',
        message: 'Enter up to three characters to be included in the logo'
    },
    {
        type: 'input',
        name: 'color',
        message: 'Enter a color for the logo. You can use a color keyword or hex value. You DO need to include the # in the hex value.'
    },
    {
        type: 'input',
        name: 'textColor', 
        message: 'Enter a color for the text. You can use a color keyword or hex value. You DO need to include the # in the hex value.'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Enter a shape for the logo. Circle, Square, or Triangle.',
        choices: [
            'Circle', 
            'Square', 
            'Triangle',
        ]
    },
];

// Function to create the logo
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Generated logo.svg')
    );
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            console.log(response);
            const svg = new SVG(response.shape, response.color, response.textColor, response.characters);
            const data = svg.render();
            console.log(data);
            writeToFile(`./examples/logo.svg`, data);
        })
        .catch((err) => console.error(err));
};

//function call to initialize app
init();