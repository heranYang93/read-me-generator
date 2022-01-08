const badgeArr = require("./licenseBadge");
const Template = require("./templify");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

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
  return `# ${data.title}

`;
}

module.exports = {
  renderLicenseSection,
  generateMarkdown,
};
