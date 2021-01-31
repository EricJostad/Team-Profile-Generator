// Establishing the required modules
const Employee = require("./Employee.js");


// Setup Manager class & constructor
class Intern extends Employee {
    constructor(data) {
        const { school } = data;
        super(data);
        this.school = school;
        console.log(this.school);
        this.role = "Intern";
        console.log(this.role);
    }
}

// This allows the constructor to be exported to other files in the application
module.exports = Intern;