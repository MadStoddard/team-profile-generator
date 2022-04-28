const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');


test("test for git hub property", () => {
    // test value initiliaztion
    const testGitHub = "github@github.com";

    // test process
    const newEngineer = new Engineer("John", 123, "some@email.com", testGitHub)

    // conclusion
    expect(newEngineer.github).toBe(testGitHub)
})

test("test for get GitHub Method", () => {
    // test value initiliaztion
    const testGitHub = "github@github.com";

    // test process
    const newEngineer = new Engineer("John", 123, "some@email.com", testGitHub)

    // conclusion
    expect(newEngineer.getGithub()).toBe(testGitHub)
})

test("test for getRole() method", () => {
    // test process
    const newEngineer = new Engineer('John', 123, "some@email.com", "github@github.com")

    // conclusion
    expect(newEngineer.getRole()).toBe("Engineer")
})