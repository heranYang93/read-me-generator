const badgeArr = require("./licenseBadge");
const Template = require("./templify");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  }
  return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";

  if (license) {
    for (const singleLicenseInfo of badgeArr) {
      if (singleLicenseInfo.name === license) {
        let licenseObj = new Template(
          singleLicenseInfo.badge,
          singleLicenseInfo.link
        );
        let text = licenseObj.license();
        console.log(text);
        break;
      }
    }
  }
  return { licenseSection };
}

renderLicenseSection("Apache 2.0");

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
    # ${this.title}
    ${renderLicenseBadge(data.license)}
    # Description

  ##Table content
  - [Installation](#Installation)
  - []()

    ${this.description}
    ${this.table}
    # Installation
    ${this.installation}
    # Usage
    ${this.usage}
    # Usage
    ${this.credit}
    # License

    ${this.licenseSection}
    # Features
    ${this.features}
    # How to Contribute
    ${this.howToContribute}
    # Test
    ${this.test}
  `;
}

module.exports = {
  renderLicenseSection,
  generateMarkdown,
};
