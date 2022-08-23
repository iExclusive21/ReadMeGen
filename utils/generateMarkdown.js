// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateReadMe = ({Title, Description, Installation, Usage, License, Contributors, Questions, Test, Github, Email}) =>
  `
  # ${data.Title}
  
  ## Description
  
  ${Description}
  
  ## Getting Started
  
  ### Dependencies
  
  ${Test}
  
  ### Installation
  
  ${Installation}
  
  ### Contributors
  
  ${Contributors}
  
  ### Usage 
  ${Usage}
  
  ### Github
  ${Github}
  
  ### Email
  ${Email}
  
  
  ## Help
  `
;


module.exports = generateMarkdown;
