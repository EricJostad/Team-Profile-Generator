// 1. // predefine the 3 classes/constructor functions for the three types of employees : manager, engineer, intern
// 2. get info from the client about each employee to be added
//    2.1 ask for name and other info of the manager
//    2.2 ask if client wants to add another employee or exit
//    3.3 repeat  2.2 until exit;
// greet and ask for managers name: 
// build an employee of type manager using a constructor (by passing all the info into the constructor)
    // generate html with info of the employee (by running build command)
// ask client if they want to add more interns or enginners or exit 
// if they want to exit, finish the app
// if the want to build a new employer, add one to html using the constructor of the apropriate type 
function Employee(name, id) {
    this.name = name;
    this.id = id;
    this.buildHtml = function buildHtml() {
      console.log(this.name);
      console.log(this.id);
      console.log(this.role);
    }
  }
  function Manager(name, id, role) {
    this.role = role;
    Employee.call(this, name, id);
  }
  const manager = new Manager('A', 'B', 'C');
  manager.buildHtml();