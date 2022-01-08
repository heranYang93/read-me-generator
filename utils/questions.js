const questions = [
  {
    type: "input",
    message: "What is the \x1b[36mtitle \x1b[0mof this project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please write a short \x1b[36mdescription \x1b[0mfor this project",
    name: "description",
  },
  {
    type: "list",
    message: "Which \x1b[36mlicense \x1b[0mto use?",
    name: "license",
    choices: [
      "Apache 2.0 License",
      "Boost Software License 1.0",
      "BSD 3-Clause License",
      "BSD 2-Clause License",
      "Creative Commons CC0 1.0",
    ],
  },
  {
    type: "input",
    message: "Please describe the \x1b[36minstallation \x1b[0mmethod",
    name: "installation",
  },
  {
    type: "input",
    message: "Please describe the \x1b[36musage\x1b[0m",
    name: "usage",
  },
  {
    type: "input",
    message: "Please describe the \x1b[36mcredit\x1b[0m",
    name: "credit",
  },
  {
    type: "input",
    message: "Please describe the \x1b[36mfeatures\x1b[0m",
    name: "features",
  },
  {
    type: "input",
    message:
      "Please describe how to \x1b[36mmake contribution \x1b[0mto this project",
    name: "howToContribute",
  },
  {
    type: "input",
    message: "Please describe the \x1b[36mtest\x1b[0m",
    name: "test",
  },
  {
    type: "input",
    message: "Is there any remaining \x1b[36mquestions\x1b[0m",
    name: "question",
  },
  {
    type: "confirm",
    message: "Do you want to create a \x1b[36mtable of content\x1b[0m?",
    name: "tableOfContent",
  },
];

module.exports = questions;
