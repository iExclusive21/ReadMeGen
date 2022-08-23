// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "MIT") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if(license == "IBM") {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
  } else{
    return ""
  }
}




// TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}


// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {

// }

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `<h1> ${data.Title}</h1>
  
  ## Description

  ${data.Description}
  
  ## License
  ${renderLicenseBadge(data.License)}

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
  If you require any assistance please send us an email and we will respond as soon as possible. `
};


module.exports = generateMarkdown;
