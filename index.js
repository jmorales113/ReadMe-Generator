const inquirer = require("inquirer")
const axios = require("axios")
const fs = require("fs")
const questions = []
const generateMarkdown = require("./utils/generateMarkdown")
const api = require("./utils/api")

inquirer.prompt([
    {
        type: "input",
        message: "What is your Github username?",
        name: "userName"
    },
    {
        type: "input",
        message: "What is your project's name?",
        name: "Title"
    },
    {
        type: "input",
        message: "Please write a short description of your project",
        name: "Description"
    },
    {
        type: "input",
        message: "What kind of license should your project have?",
        name: "License"

    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "Installation"

    },
    {
        type: "input",
        message: "What command should be run to run tests? npm test",
        name: "Tests"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "Usage"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "Contributing"
    }

])

.then (function(response) {

}

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
