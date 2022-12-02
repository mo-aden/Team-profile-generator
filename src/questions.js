const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of the team's manager?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the ID number of the manager?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the email address of the manager?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the office number of the manager?",
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the Engineer's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is ID number of the Engineer?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the email address of the Engineer?",
  },
  {
    type: "input",
    name: "github",
    message: "What is the GitHub username of the Engineer?",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the Intern's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the ID number of the Intern?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the email address of the Intern?",
  },
  {
    type: "input",
    name: "school",
    message: "What school is your Intern attending now?",
  },
];

module.exports = { managerQuestions, engineerQuestions, internQuestions };
