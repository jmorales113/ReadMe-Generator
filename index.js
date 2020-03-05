const inquirer = require("inquirer")
const fs = require("fs")
const axios = require("axios")

inquirer.prompt([
    {
        type: "input",
        message: "What is your Github username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your project's name?",
        name: "title"
    },
    {
        type: "input",
        message: "Please write a short description of your project:",
        name: "description"
    },
    {
        type: "input",
        message: "What kind of license should your project have?",
        name: "license"

    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "installation"

    },
    {
        type: "input",
        message: "What command should be run to run tests npm test?",
        name: "tests"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contributing"
    }

])

    .then (function(response){
        const api = `https://api.github.com/users/${response.username}`
        axios
        .get(api).then(function(){
        
    const data = `
# ${response.title}

[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)

## Description

${response.description}

## Table of Contents

* [Installation](#Installation)

* [Usage](#Usage)

* [License](#License)

* [Contributing](#Contributing)

* [Tests](#Tests)

* [Questions](#Questions)

## Installation

To install necessary dependencies, run the following command:

    ${response.installation}

## Usage

${response.usage}

## License

${response.license}

## Contributing

${response.contributing}

## Tests

To perform a test, run the following command:

    ${response.tests}

## Questions

<img src="https://avatars2.githubusercontent.com/u/57970306?s=460&v=4"
alt="avatar" style="border-radius: 16px" width="30" />

If you have any questions about the repo, open an issue or contact at ${response.username}`

        fs.writeFile("ReadMe.md", data, function(){
            console.log("Wrote to ReadMe.md")
        })
        })

    })

