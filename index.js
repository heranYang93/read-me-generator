// TODO: Include packages needed for this application
const fs = require("fs");
const i = require("inquirer"); // const generateMD = require("./utils/generateMarkdown");
const questionArr = require("./utils/questions"); //Create an array of questions for user input
const templify = require("./utils/templify");
const licenseArr = require("./utils/licenseBadge");

// update question with license list
const updateQuestionArr = () => {
  let choiceArr = [];
  for (const { name } of licenseArr) {
    choiceArr.push(name);
  }
  questionArr[2].choices = choiceArr;
};
updateQuestionArr();

// Create a function to initialize app
async function init() {
  // Get user data
  let userData = "";
  await i.prompt(questionArr).then((r) => (userData = r));
  let templateObj = new templify(userData);
  templateObj.tableOfContentGen();
  templateObj.licenseGen(licenseArr);
  templateObj.contentGen();
  fs.writeFile("./Generated/README.md", templateObj.allIn, (e, r) => {
    e ? console.error("Error") : console.log("Done");
  });
}

// Function call to initialize app
init();
