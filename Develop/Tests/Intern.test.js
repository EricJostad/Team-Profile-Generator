// Unit test for Intern class using the Jest package  
const Intern = require("../lib/Intern");

it("Shoud set school via constructor", () => {
  const testValue = "UCF";
  const emp = new Intern("Test", 1, "test@test.com", testValue);
  expect(emp.school).toEqual(testValue);
});

it("Should getRole() & return \"Intern\"", () => {
  const testValue = "Intern";
  const emp = new Intern("Test", 1, "test@test.com", "UCF");
  expect(emp.getRole()).toEqual(testValue);
});

it("Should get school via getSchool()", () => {
  const testValue = "UCF";
  const emp = new Intern("Test", 1, "test@test.com", testValue);
  expect(emp.getSchool()).toEqual(testValue);
});