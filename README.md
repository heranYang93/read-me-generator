# readme-generator

A CLI application that generate readme file based on user input

## Description

A high-quality README for the app should include:

1. what the app is for
2. how to use the app
3. how to install it
4. how to report issues
5. how to make contributions

This last part increases the likelihood that other developers will contribute to the success of the project.
This app can quickly and easily create a README file by using a command-line application to generate one.
This allows the project creator to devote more time to working on the project.
The task is to create a CLI application that dynamically generates a professional README.md file from a user's input using the
[Inquirer package](https://www.npmjs.com/package/inquirer).
[Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)

The application will be invoked by using the following command:

```bash
node index.js
```

## Usage

1. Install required modules from npm by using
   `npm i`
2. Target your command line to the main directory
3. Invoke the app with:
   `node index.js`
4. The readme will be generated in the folder:
   `./Generated/README.md`

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input

###### WHEN I am prompted for information about my application repository

THEN a high-quality, professional README.md is generated with the

> title of my project
> sections entitled Description
> Table of Contents
> Installation
> Usage
> License
> Contributing
> Tests
> Questions

###### WHEN I enter my project title

THEN this is displayed as the title of the README

###### WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions

THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

###### WHEN I choose a license for my application from a list of options

THEN:
a badge for that license is added near the top of the README
and a notice is added to the section of the README entitled License that explains which license the application is covered under

###### WHEN I enter my GitHub username

THEN this is added to the section of the README [entitled Questions], with a link to my GitHub profile

###### HEN I enter my email address

THEN this is added to the section of the README [entitled Questions], with instructions on how to reach me with additional questions

###### WHEN I click on the [links] in the Table of Contents

THEN I am taken to the corresponding section of the README
```
