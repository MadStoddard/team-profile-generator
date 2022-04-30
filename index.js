const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML')

const employees = [];

const createManager = () => {
    inquirer.prompt([
        {
           type: "input",
           name: "managerName",
           message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the manager's id?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email?"
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the manager's office number?"
        }
    ]).then((answers) => {
        const newManager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);

        employees.push(newManager);

        showMenu()
    })

    
}

const createEngineer = () => {
    inquirer.prompt([
        {
           type: "input",
           name: "engineerName",
           message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's id?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email?"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's github?"
        }
    ]).then((answers) => {
        const newEngineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);

        employees.push(newEngineer);

        showMenu()
    })
}

const createIntern = () => {
    inquirer.prompt([
        {
           type: "input",
           name: "internName",
           message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "internId",
            message: "What is the intern's id?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is the intern's school?"
        }
    ]).then((answers) => {
        const newIntern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);

        employees.push(newIntern);

        showMenu()
    })
}

const showMenu = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "userChoice",
            message: "Which role would you like to add next?",
            choices: [
                "Engineer",
                "Intern",
                "Finish building"
            ]
        }   
    ])
    .then((answer) => {
        if(answer.userChoice == "Engineer") {
            createEngineer()
        } else if(answer.userChoice == "Intern") {
            createIntern()
        } else {
            buildTeam()
        }
    })

    
}

const buildTeam = () => {
    // array full employee information

    const htmlOutput = generateHTML(employees);

    fs.writeFile('./dist/index.html', htmlOutput, () => {
        console.log("Finished writing HTML file.")
    })


}




createManager()
