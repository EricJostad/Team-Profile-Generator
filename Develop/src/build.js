// Establishing the required modules
const { writeFile } = require("fs");
const { errorMonitor } = require("stream");

// This function creates the initial questions list as well as tunes it based on the employee class
function buildQuestions(role) {
  const validateInt = (str) => !!parseInt(str);
  const validateLength = (str) => !!str.length;
  const validateEmail = (str) =>
    !!str.length && str.includes("@") && str.includes(".");

  const addTrace = (validator, errorMessage) => (value) => {
    const result = validator(value);
    if (!result) {
      console.log(" \n ", errorMessage || 'error in validation');
    }
    return result;
  }

  // Array of objects for initial employee questions
  const questions = [
    {
      type: "input",
      name: "name",
      message: `What is the ${role}'s name?`,
      validate: addTrace(validateLength, "cannot be non empty"),
    },
    {
      type: "input",
      name: "id",
      message: `What is the ${role}'s employee id?`,
      validate: addTrace(validateInt, "needs to be a number"),
    },
    {
      type: "input",
      name: "email",
      message: `What is the ${role}'s email?`,
      validate: addTrace(validateEmail, "has to have an @ and a ."),
    },
  ];
  
  // Role specific questions using if / else / else if statements
  if (role === "Manager")
  questions.push({
      type: "input",
      name: "officeNum",
      message: `What is the ${role}'s office number?`,
      validate: addTrace(validateInt, "must to be a number"),
    });
  else if (role === "Engineer")
  questions.push({
      type: "input",
      name: "github",
      message: `What is the ${role}'s github?`,
      validate: addTrace(validateEmail, "has to have an @ and a "),
    });
  else if (role === "Intern")
  questions.push({
      type: "input",
      name: "school",
      message: `What is the ${role}'s school?`,
      validate: addTrace(str => str.trim().toLowerCase() === "ucf", "We dont recognize that as school, try UCF."),
    });
  return questions;
}

// This function takes employee data, based on user input, and appends it to the html file
function buildHtml() {
  const empHTML = this.employees.reduce(
    (html, employee) => (html += employee.buildHtml()),
    ""
  );

  const websiteHtml = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    ${empHTML}
  </body>
  </html>
  `;


  writeFile("./output/index.html", websiteHtml, (err) =>
    console.log("error writing file: ", err)
  );
}

// This allows the constructor to be exported to other files in the application
module.exports = { buildQuestions, buildHtml };