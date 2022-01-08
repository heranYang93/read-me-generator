// TODO: Include packages needed for this application
const inquirer = require("inquirer"); // const generateMD = require("./utils/generateMarkdown");
const questionArr = require("./utils/questions"); //Create an array of questions for user input

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

inquirer.prompt(questionArr).then(console.log(answers));

// TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
