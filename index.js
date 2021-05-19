const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./Lib/Manager");
const Engineer = require("./Lib/Engineer");
const Intern = require("./Lib/Intern");
//get user input
//add user input to an array
//generate a basic html
//add the array info to the html
//generate html file
const managerQuestions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your ID?",
    name: "id",
  },
  {
    type: "input",
    messgae: "What is your office number?",
    name: "officeNum",
  },
];
const engineerQuestions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your ID?",
    name: "id",
  },
  {
    type: "input",
    messgae: "What is your Git Hub username?",
    name: "username",
  },
];
const internQuestions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your ID?",
    name: "id",
  },
  {
    type: "input",
    messgae: "What is your school?",
    name: "school",
  },
];

function getEmployeeInfo() {
  inquirer
    .prompt([
      {
        type: "list",
        messgae: "What is the employee's role?",
        choices: ["Manager", "Engineer", "Intern", "None"],
        name: "role",
      },
    ])
    .then((data) => {
      inquirer.prompt([]);
    });
}
