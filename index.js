const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage information:'
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Please provide contribution guidelines:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide test instructions:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please choose a license for your project:',
    choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'None']
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  }
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md successfully generated!')
  );
}

// Function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const markdown = generateMarkdown(answers);
      writeToFile('README.md', markdown);
    })
    .catch((error) => {
      console.error('Error occurred:', error);
    });
}

// Function call to initialize app
init();
