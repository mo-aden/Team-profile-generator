const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Engineer = require("./lib/engineer.js");
const Manager = require("./lib/manager.js");
const Intern = require("./lib/intern.js");
const generateTeam = require("./src/template.js");
const distDir = path.resolve(__dirname, "dist");
const htmlFile = path.join(distDir, "index.html");
const { managerQuestions, engineerQuestions, internQuestions } = require("./src/questions.js");

const employees = [];

const roleCheckQuestion = [
  {
    type: "list",
    name: "role",
    message: "Which role would you like to add to your team profile? (Use arrow keys to select an option)",
    choices: ["Engineer", "Intern", "I'm done adding new team members"],
  },
];

//Checks the role and the questions to show the user
function roleCheck() {
  inquirer.prompt(roleCheckQuestion).then((response) => {
    if (response.role === "Engineer") {
      engineerCheck();
    } else if (response.role === "Intern") {
      internCheck();
    } else {
      writeHTML();
    }
  });
}

//Creates eng class and pushes it to the employees arr
function engineerCheck() {
  inquirer.prompt(engineerQuestions).then((response) => {
    const engineerClass = new Engineer(response.name, response.id, response.email, response.gitHub);

    employees.push(engineerClass);
    roleCheck();
  });
}

//Creates Intern class and pushes it to the employees arr
function internCheck() {
  inquirer.prompt(internQuestions).then((response) => {
    const internClass = new Intern(response.name, response.id, response.email, response.school);
    employees.push(internClass);
    roleCheck();
  });
}

//Creates manager class and pushes it to the employees arr
function initManagerQuestions() {
  inquirer.prompt(managerQuestions).then((response) => {
    const managerClass = new Manager(response.name, response.id, response.email, response.officeNumber);
    employees.push(managerClass);
    roleCheck();
  });
}

function writeHTML() {
  fs.writeFileSync(htmlFile, generateTeam(employees), "utf-8");
  console.log(`Your team profile is generated !!`);
}

initManagerQuestions();
