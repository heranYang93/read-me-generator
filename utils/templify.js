class templify {
  constructor(
    title,
    description,
    tableOfContent,
    installation,
    usage,
    credit,
    licenseBadge,
    licenseLink,
    features,
    howToContribute,
    test
  ) {
    this.title = title;
    this.description = description;
    this.tableOfContent = tableOfContent;
    this.installation = installation;
    this.usage = usage;
    this.credit = credit;
    this.licBadge = licenseBadge;
    this.licLink = licenseLink;
    this.features = features;
    this.howToContribute = howToContribute;
    this.test = test;
  }

  tableOfContentGen() {
    let tableOfContent = "";
    if (this.tableOfContent) {
      if (this.installation !== "") {
        tableOfContent += "- Installation /n";
      }
      if (this.usage !== "") {
        tableOfContent += "- Usage /n";
      }
      if (this.credit !== "") {
        tableOfContent += "- Credit /n";
      }
      if (this.license !== "") {
        tableOfContent += "- License /n";
      }
      if (this.features !== "") {
        tableOfContent += "- Features /n";
      }
      if (this.howToContribute !== "") {
        tableOfContent += "- howToContribute /n";
      }
      if (this.test !== "") {
        tableOfContent += "- Test /n";
      }
    }
    this.table = tableOfContent;
  }

  licenseGen() {
    let licenseSectionTemplate = `something something ${this.licBadge} and something something else ${this.licLink}`;
    this.licenseSection = licenseSectionTemplate;
  }

  content() {
    let readMeMainContentTemplate = `
    # ${this.title}
    # Description
    ${this.description}
    # Table of Content
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
    this.allIn = readMeMainContentTemplate;
  }
}

module.exports = templify;
