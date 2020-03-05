const inquirer = require("inquirer")
const fs = require("fs")
const axios = require("axios")
// const generateMarkdown = require("./utils/generateMarkdown")
// const api = require("./utils/api")

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
        .get(api).then(function(res){
        
    const data = `
    # ${response.title}
        `
        fs.writeFile("test.md", data, function(){
            console.log("Wrote to test.md")
        })
        })

    })

//     .then (function(data) {
//      const username = data.username
//         api.getUser(username).then(function(getUserResponse){
//             const markDown = generateMarkdown(data, getUserResponse)
//             return fs.writeToFile("ReadMe.md", markDown)
//         })
//     })
    
//     .then(function(){
//         console.log("Wrote to ReadMe.md")
//     })
//     .catch(function(err){
//         console.log(err)
//     })
    

// // function init() {

// // }

// // init();
