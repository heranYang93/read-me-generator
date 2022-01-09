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
      tableOfContent = "## Table of Content\n";
      if (this.installation !== "") {
        tableOfContent += "- [Installation](##Installation)\n";
      }
      if (this.usage !== "") {
        tableOfContent += "- [Usage](##Usage)\n";
      }
      if (this.credit !== "") {
        tableOfContent += "- [Credit](##Credit)\n";
      }
      if (this.features !== "") {
        tableOfContent += "- [Features](##Features)\n";
      }
      if (this.howToContribute !== "") {
        tableOfContent += "- [Contribution](##Contribute)\n";
      }
      if (this.test !== "") {
        tableOfContent += "- [Test](##Test)\n";
      }
      tableOfContent += "- [Questions and Queries](##Questions)\n";
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
    let readMeMainContentTemplate = `#${this.title}\n
${this.licenseSection}\n
##Description\n
${this.description}\n
${this.table}\n
##Installation\n
${this.installation}\n
##Usage\n
${this.usage}\n
##Features\n
${this.features}\n
##Contribute\n
${this.howToContribute}\n
##Test\n
${this.test}\n
##Questions\n
For further questions or queries, please reach out to me at
[${this.username}](mailto:${this.mail}?subject=Query%20regarding%20Project-${this.title})`;
    this.allIn = readMeMainContentTemplate;
  }
}

module.exports = Templify;
