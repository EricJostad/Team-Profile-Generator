// Establishing the required modules
const { fs } = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./Lib/Engineer");
const Manager = require("./Lib/Manager");
const Intern = require("./Lib/Intern");
const { buildQuestions, buildHtml } = require("./src/build.js");

class Gen {
  buildRole = {
    Engineer: (data) => new Engineer(data),
    Manager: (data) => new Manager(data),
    Intern: (data) => new Intern(data),
  };

  employees = [];

  buildQuestions = buildQuestions;
  buildHtml = buildHtml;

  start() {
    console.log(
      "Thanks for using our team profile generator! Please answer the following questions to develop your site."
    );
    this.promptEmployee("Manager");
  }

  addEmployee(type, data) {
    const newEmployee = this.buildRole[type](data);
    this.employees.push(newEmployee);
  }

  promptEmployee(type) {
    inquirer.prompt(this.buildQuestions(type)).then((answers) => {
      this.addEmployee(type, answers);
      this.promptContinue();
    });
  }

  promptContinue() {
    inquirer
      .prompt({
        type: "list",
        choices: [
          { name: "Add Engineer", value: "Engineer" },
          { name: "Add Intern", value: "Intern" },
          { name: "Exit", value: "exit" },
        ],
        name: "choice",
        message:
          "Please select from the list below if you would like to add another employee or finish and complete the application.",
      })
      .then(({ choice }) => {
        if (choice === "exit") return this.buildHtml();
        else this.promptEmployee(choice);
      });
  }
}

// This allows the constructor to be exported to other files in the application
module.exports = Index;