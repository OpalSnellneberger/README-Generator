// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }
  return `[${license} License](https://choosealicense.com/licenses/${license.toLowerCase().split(' ').join('-')}/)`;
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `This project is licensed under the ${license} license. Click the badge above to learn more.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  // Call functions to render license badge, license link, and license section
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  // Construct the README content using user input and license information
  return `# ${data.title}

${licenseBadge}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contribution}

## Tests

${data.tests}

## Questions

For questions about this project, please reach out to ${data.email}.
You can find more of my work at [${data.username}](https://github.com/${data.username}).

${licenseSection} ${licenseLink}
`;
}

module.exports = generateMarkdown;
