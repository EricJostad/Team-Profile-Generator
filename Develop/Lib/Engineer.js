// Establishing the required modules
const Employee = require("./Employee.js");

// Setup Engineer class & constructor
class Engineer extends Employee {
    constructor(data) {
        const { github } = data;
        super(data);
        this.github = github;
        console.log(this.github);
        this.role = "Engineer";
        console.log(this.role);
    }
}

// This allows the constructor to be exported to other files in the application
module.exports = Engineer;