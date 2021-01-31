const Employee = require("./Employee.js");

// Setup constructor for the Manager class
class Manager extends Employee {
  constructor(data) {
    const { officeNumber } = data;
    super(data);
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }
}

// This allows the constructor to be exported to other files in the application
module.exports = Manager;