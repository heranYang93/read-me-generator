// TODO: Include packages needed for this application
const i = require("inquirer"); // const generateMD = require("./utils/generateMarkdown");
const questionArr = require("./utils/questions"); //Create an array of questions for user input

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// Create a function to initialize app
function init() {
  i.prompt(questionArr).then((r) => console.log(r));
}

// Function call to initialize app
init();
