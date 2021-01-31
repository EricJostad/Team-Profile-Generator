// Establishing the required modules
const Employee = require("./Employee.js");

// Setup Manager class & constructor
class Manager extends Employee {
      constructor(data) {
        const { officeNumber } = data;
        super(data);
        this.officeNumber = officeNumber;
        console.log(this.officeNumber);
        this.role = "Manager";
        console.log(this.role);
    }
}

// This allows the constructor to be exported to other files in the application
module.exports = Manager;