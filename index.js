const inqurirer = require("inquirer") ;
const fs = require("fs") ;

inqurirer.prompt([
    {
        type: "input",
        message: "What is yout GitHub username?",
        name:"username",
    },
    {
       type: "input",
       message: "what is the title of your project?",
       name:"title",
    },
    {
        type: "input",
        message: "write a short description of your project",
        name:"description",
    },
    {
        type: "input",
        message: "what kind of license should your project have",
        name:"license",
    },
    {
        type: "input",
        message: "what command line should be run to install dependencies",
        name:"install",
    },
    {
        type: "input",
        message: "what command line should be run to run tests",
        name:"test",
    },
    {
        type: "input",
        message: "what does the user need to know about using the repo",
        name:"using",
        
    },
    {
        type: "input",
        message: "what does the user need to know about contributing to the repo",
        name:"contribute",
    }
]).then(function(response){
    // vars for the prompt responses 
    const username = response.username
    const title = response.title
    const description = response.description
    const license = response.license
    const install = response.install
    const using = response.using
    const test = response.test
    const contribute = response.contribute

   
})