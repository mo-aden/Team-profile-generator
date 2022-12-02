const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Engineer = require("./lib/engineer.js");
const Manager = require("./lib/manager.js");
const Intern = require("./lib/intern.js");
const generateTeam = require("./src/template.js");
const distDir = path.resolve(__dirname, "dist");
const htmlFile = path.join(distDir, "index.html");

const employees = [];
