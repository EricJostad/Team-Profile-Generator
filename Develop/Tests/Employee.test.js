const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("Should instantiate Employee instance", () => {
    const emp = new Employee();
    expect(typeof (emp)).toEqual("object");
  });

  it("Should set name via constructor arguments", () => {
    const name = "Eric";
    const emp = new Employee(name);
    expect(emp.name).toEqual(name);
  });

  it("Should set id via constructor argument", () => {
    const testValue = 100;
    const emp = new Employee("Test", testValue);
    expect(emp.id).toEqual(testValue);
  });

  it("Should set email via constructor argument", () => {
    const testValue = "test@test.com";
    const emp = new Employee("Test", 1, testValue);
    expect(emp.email).toEqual(testValue);
  });

  describe("getName", () => {
    it("Should get name via getName()", () => {
      const testValue = "Eric";
      const emp = new Employee(testValue);
      expect(emp.getName()).toEqual(testValue);
    });
  });

  describe("getId", () => {
    it("Should get id via getId()", () => {
      const testValue = 100;
      const emp = new Employee("Test", testValue);
      expect(emp.getId()).toEqual(testValue);
    });
  });

  describe("getEmail", () => {
    it("Should get email via getEmail()", () => {
      const testValue = "test@test.com";
      const emp = new Employee("Test", 1, testValue);
      expect(emp.getEmail()).toEqual(testValue);
    });
  });

  describe("getRole", () => {
    it("Should getRole() & should return \"Employee\"", () => {
      const testValue = "Employee";
      const emp = new Employee("Eric", 1, "test@test.com");
      expect(emp.getRole()).toEqual(testValue);
    });
  });

});