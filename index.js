// Require packages needed for this application
const fs = require("fs"); // file system
const i = require("inquirer"); // inquirer
const questionArr = require("./utils/questions"); //An array of questions for prompt lines
const Templify = require("./utils/templify"); //Make readme template
const licenseArr = require("./utils/licenseBadge"); //An array of license and information

const updateQuestionArr = () => {
  let choiceArr = [];
  for (const { name } of licenseArr) {
    choiceArr.push(name);
  }
  questionArr[2].choices = choiceArr;
};
updateQuestionArr(); // update question array with the latest license information

async function init() {
  // Get user data
  let userData = "";
  await i.prompt(questionArr).then((r) => (userData = r));
  let templateObj = new Templify(userData);
  templateObj.tableOfContentGen();
  templateObj.licenseGen(licenseArr);
  templateObj.contentGen();
  fs.writeFile("./Generated/README.md", templateObj.allIn, (e, r) => {
    e ? console.error("Error") : console.log("Done");
  });
}

init(); //Run app
