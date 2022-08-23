// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const util = require('util')
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input

const promptUser = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            message:  'What is your project title?',
            name: 'Title',
        },
        {
            type: 'input',
            message:  'Please enter a description.',
            name: 'Description',
        },
        {
            type: 'input',
            message: 'What installation methods are required?',
            name: 'Installation',
        },
        {
            type: 'input',
            message:'How will this app be used?',
            name: 'Usage',
        },
        {
            type: 'input',
            message: 'What License are required?',
            name: 'License',
        },
        {
            type: 'input',
            message: 'Please list the contributors?',
            name: 'Contributors',
        },
        {
            type: 'input',
            message: 'Any Questions',
            name: 'Questions',
        },
        {
            type: 'input',
            message:  'What is needed to test this app?',
            name: 'Test',
        },
        {
            type: 'input',
            message:  'What is your github username?',
            name: 'Github',
        },
        {
            type: 'input',
            message:  'What is your email address?',
            name: 'Email ',
        },

    ]);
}




// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
// function init() {}
const init = () => {
    promptUser()
      // Use writeFileSync method to use promises instead of a callback function
      .then((data) => fs.writeFileSync('README.md', generateMarkdown(data)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };
  
// Function call to initialize app
init();
