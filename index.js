//vars for packages
const inqurirer = require("inquirer") ;
const fs = require("fs") ;
const axios = require("axios");
//find the env file and get the enviorment vars
require("dotenv").config();
//prompts to gather info
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
    },
    {
        type: "input",
        message: "questions?",
        name:"press enter for README",
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
    const queryUrl =  `https://api.github.com/users/${username}?client_id=${
        process.env.CLIENT_ID
        }&client_secret=${process.env.CLIENT_SECRET}`
    const questions = response.questions
    
    //gets the GitHub account 
    axios
    .get(queryUrl)
    .then(function(res){
        console.log(res)
    //grabbing what we need from the GH account 
    const location = res.data.location
    console.log("my location " + location)
    const email = res.data.email
    console.log("email " + email )
    const avatar = res.data.avatar_url
    console.log("avatar url " + avatar)
    //page makes all the data and strings needed for writeFile to make a markdown read me
    const page = "#" + title  + "\n## Description\n" + description + "\n## Table of contents\n" +
    "* Installation: " + install + "\n* Usage: " + using + "\n* License: " + license + "\n* Contributing: " + contribute
    + "\n* Test: " + test + "\n* Questions: " + questions + "\n## Installation \n" + "To install necessary dependances, run the following command: \n" + "```\t" + install +  "```"
    + "\n## Usage \n" + using + "\n## Licencse \n" + `The project is licesned under the ${license} license` 
    + "\n## Contributing \n" + contribute 
    + "\n## Tests \n" +  "To run test run the following command: \n" + "```\t" + test +  "```"
    +"\n## Questions \n"


    fs.writeFile("./readme2.md", page, function(err){
        if(err){
            throw err
        }console.log("done son")
    })
    })

   
})

// last steps 1.client secret 2.get badge