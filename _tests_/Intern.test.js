const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');


test("test for school property", () => {
    // test value initiliaztion
    const testSchool = "UCF";

    // test process
    const newIntern = new Intern("John", 123, "some@email.com", testSchool)

    // conclusion
    expect(newIntern.school).toBe(testSchool)
})

test("test for getSchool Method", () => {
    // test value initiliaztion
    const testSchool = "UCF";

    // test process
    const newIntern = new Intern("John", 123, "some@email.com", testSchool)

    // conclusion
    expect(newIntern.getSchool()).toBe(testSchool)
})

test("test for getRole() method", () => {
    // test process
    const newIntern = new Intern('John', 123, "some@email.com", "UCF")

    // conclusion
    expect(newIntern.getRole()).toBe("Intern")
})