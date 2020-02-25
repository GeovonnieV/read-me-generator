const inqurirer = require("inquirer") ;
const fs = require("fs") ;
const axios = require("axios");
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
    const queryUrl = "https://api.github.com/users/" + username
    
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
    const page = "#" + title 

    fs.writeFile("./readme2.md", page, function(err){
        if(err){
            throw err
        }console.log("done son")
    })
    })

   
})

// last steps 1.make badge 2.write to the html