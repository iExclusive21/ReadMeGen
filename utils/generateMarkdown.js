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
const generateMarkdown = (data) => {
  return `<h1> ${data.Title}</h1>
  
  ## Description

  ${data.Description}
  
  ## License
  ${data.License}

  ## Table of Contents
  - [Description](#Description)
  - [License](#License)
  - [Dependencies](#Test)
  - [Installation](#Installation)
  - [Contributors](#Contributors)
  - [Usage](#Usage)
  - [Github](#Github)
  - [Email](#Email)

  
  ### Test
  
  ${data.Test}
  
  ### Installation
  
  ${data.Installation}
  
  ### Contributors
  
  ${data.Contributors}
  
  ### Usage 
  ${data.Usage}
  
  ### Github
  ${data.Github}
  
  ### Email
  ${data.Email}
  
  
  ## Help
  `
};


module.exports = generateMarkdown;
