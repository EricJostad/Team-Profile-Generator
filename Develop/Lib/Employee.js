// Setup constructor for Employee class
function Employee(name, id, email) {
    this.name = name;
    console.log(this.name);
    this.id = id;
    console.log(this.id);
    this.email = email;
    console.log(this.email);
};

// These lines perform the necessary call backs
getName(this.name);

getId(this.id);

getEmail(this.email);

getRole("Employee");

// This allows the constructor to be exported to other files in the application
module.exports = Employee;