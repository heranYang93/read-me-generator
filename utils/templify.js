class templify {
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
      tableOfContent = "## Table of Content\n";
      if (this.installation !== "") {
        tableOfContent += "- [Installation](## Installation)\n";
      }
      if (this.usage !== "") {
        tableOfContent += "- [Usage](## Usage)\n";
      }
      if (this.credit !== "") {
        tableOfContent += "- [Credit](## Credit)\n";
      }
      if (this.features !== "") {
        tableOfContent += "- [Features](## Features)\n";
      }
      if (this.howToContribute !== "") {
        tableOfContent += "- [Contribution](## How to Contribute)\n";
      }
      if (this.test !== "") {
        tableOfContent += "- [Test](## Test)\n";
      }
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
    let readMeMainContentTemplate = `# ${this.title}
${this.licenseSection}
---
## Description
${this.description}
---
${this.table}
---
## Installation
${this.installation}
---
## Usage
${this.usage}
---
## Features
${this.features}
---
## How to Contribute
${this.howToContribute}
---
## Test
${this.test}
---
## Questions?
For further questions or queries, please reach out to me at
[${this.username}](mailto:${this.mail}?subject=Query%20regarding%20Project-${this.title})`;
    this.allIn = readMeMainContentTemplate;
  }
}

module.exports = templify;
