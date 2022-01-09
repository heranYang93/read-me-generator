const questions = [
  {
    type: "input",
    message: "What is the \x1b[36mtitle \x1b[0mof this project?",
    name: "title",
  },
  {
    type: "input",
    message:
      "Please write a short \x1b[36mdescription \x1b[0mfor this project?",
    name: "description",
  },
  {
    type: "list",
    message: "Which \x1b[36mlicense \x1b[0mto use?",
    name: "license",
    choices: [],
  },
  {
    type: "input",
    message: "Please describe the \x1b[36minstallation \x1b[0mmethod!",
    name: "installation",
  },
  {
    type: "input",
    message: "Please describe the \x1b[36musage\x1b[0m of this app!",
    name: "usage",
  },
  {
    type: "input",
    message: "Who to give \x1b[36mcredit\x1b[0m to?",
    name: "credit",
  },
  {
    type: "input",
    message: "Please describe the \x1b[36mfeatures\x1b[0m!",
    name: "features",
  },
  {
    type: "input",
    message:
      "Please describe how to \x1b[36mmake contribution \x1b[0mto this project!",
    name: "howToContribute",
  },
  {
    type: "input",
    message: "Please describe the \x1b[36mtest\x1b[0m!",
    name: "test",
  },
  {
    type: "confirm",
    message: "Do you want to create a \x1b[36mtable of content\x1b[0m?",
    name: "tableOfContent",
  },
  {
    type: "input",
    message: "What is your \x1b[36mGithub username\x1b[0m?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your \x1b[36mEmail address\x1b[0m?",
    name: "mail",
  },
];

module.exports = questions;
