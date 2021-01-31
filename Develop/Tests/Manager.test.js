// Unit test for Manager class using the Jest package
const Manager = require("../Lib/Manager");

it("Should set office number via constructor argument", () => {
  const testValue = 100;
  const emp = new Manager("Test", 1, "test@test.com", testValue);
  expect(emp.officeNumber).toEqual(testValue);
});

it("Should getRole() & should return \"Manager\"", () => {
  const testValue = "Manager";
  const emp = new Manager("Test", 1, "test@test.com", 100);
  expect(emp.getRole()).toEqual(testValue);
});

it("Should get office number via getOffice()", () => {
  const testValue = 100;
  const emp = new Manager("Test", 1, "test@test.com", testValue);
  expect(emp.getOfficeNumber()).toEqual(testValue);
});