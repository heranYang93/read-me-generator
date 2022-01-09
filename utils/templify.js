//Instantiate a class called Templify

class Templify {
  constructor(response) {
    this.title = response.title;
    this.description = response.description;
    this.license = response.license;
    //this.licenseSection
    this.installation = response.installation;
    this.usage = response.usage;
    this.credit = response.credit;
    this.features = response.features;
    this.howToContribute = response.howToContribute;
    this.test = response.test;
    this.tableOfContent = response.tableOfContent;
    this.username = response.username;
    this.mail = response.mail;
  }

  tableOfContentGen() {
    let tableOfContent = "";
    if (this.tableOfContent) {
      tableOfContent = "# Table of Content\n";
      if (this.installation !== "") {
        tableOfContent += "- [Installation](#installation)\n";
      }
      if (this.usage !== "") {
        tableOfContent += "- [Usage](#usage)\n";
      }
      if (this.credit !== "") {
        tableOfContent += "- [Credit](#credit)\n";
      }
      if (this.features !== "") {
        tableOfContent += "- [Features](#features)\n";
      }
      if (this.howToContribute !== "") {
        tableOfContent += "- [Contribution](#contribute)\n";
      }
      if (this.test !== "") {
        tableOfContent += "- [Test](#test)\n";
      }
      tableOfContent += "- [Questions and Queries](#questions)\n";
    }
    this.table = tableOfContent;
  }

  licenseGen(licenseArr) {
    let licenseContent = "";
    if (this.license) {
      for (const singleLicInfo of licenseArr) {
        if (singleLicInfo.name === this.license) {
          licenseContent = `[![License](${singleLicInfo.badge})](${singleLicInfo.link})`;
          break;
        }
      }
    }

    this.licenseSection = licenseContent;
  }

  contentGen() {
    let readMeMainContentTemplate = `# ${this.title}\n
${this.licenseSection}\n
## Description<div id="description" />\n
${this.description}\n
${this.table}\n
## Installation<div id="installation" />\n
${this.installation}\n
## Usage<div id="usage" />\n
${this.usage}\n
## Features<div id="features" />\n
${this.features}\n
## Contribute<div id="contribute" />\n
${this.howToContribute}\n
## Test<div id="test" />\n
${this.test}\n
## Questions<div id="questions" />\n
For further questions or queries, please reach out to me at
[${this.username}](mailto:${this.mail}?subject=Query%20regarding%20Project-${this.title})`;
    this.allIn = readMeMainContentTemplate;
  }
}

module.exports = Templify;
