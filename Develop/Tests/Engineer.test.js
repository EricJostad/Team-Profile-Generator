// Unit test for Engineer class using the Jest package  
const Engineer = require("../lib/Engineer");

it("Should set GitHUb account via constructor", () => {
    const testValue = "GitHubUser";
    const emp = new Engineer("Test", 1, "test@test.com", testValue);
    expect(emp.github).toEqual(testValue);
});

it("Should getRole() & return \"Engineer\"", () => {
    const testValue = "Engineer";
    const emp = new Engineer("Test", 1, "test@test.com", "GitHubUser");
    expect(emp.getRole()).toEqual(testValue);
});

it("Should get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const emp = new Engineer("Test", 1, "test@test.com", testValue);
    expect(emp.getGithub()).toEqual(testValue);
});