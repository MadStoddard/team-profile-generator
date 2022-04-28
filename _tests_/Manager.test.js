const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test("test for Manager Office Number", () => {
    // test value initiliaztion
    const testOfficeNumber = 1234;

    // test process
    const newManager = new Manager('John', 123, "some@email.com", testOfficeNumber)

    // conclusion
    expect(newManager.officeNumber).toBe(testOfficeNumber)
})

test("test for getRole() method", () => {
    // test process
    const newManager = new Manager('John', 123, "some@email.com", 1234)

    // conclusion
    expect(newManager.getRole()).toBe("Manager")
})