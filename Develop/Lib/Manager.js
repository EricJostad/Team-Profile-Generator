// Setup constructor for the Manager class
class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
    this.officeNumber = officeNumber;
  }
}

// These lines perform the necessary call backs
getRole("Manager");

getOfficeNumber(this.officeNumber);

// This allows the constructor to be exported to other files in the application
module.exports = Manager;