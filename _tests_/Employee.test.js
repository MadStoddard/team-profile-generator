const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test("test for Employe name property", () => {
    // test value initiliaztion
    const testName = "John";

    // test process
    const newEmployee = new Employee(testName, 123, "some@email.com")

    // conclusion
    expect(newEmployee.name).toBe(testName)
})

test("test for Employe id property", () => {
    // test value initiliaztion
    const testId = "123";

    // test process
    const newEmployee = new Employee('John', testId, "some@email.com")

    // conclusion
    expect(newEmployee.id).toBe(testId)
})

test("test for Employe email property", () => {
    // test value initiliaztion
    const testEmail = "some@email.com";

    // test process
    const newEmployee = new Employee('John', 123, testEmail)

    // conclusion
    expect(newEmployee.email).toBe(testEmail)
})

test("test for getName() method", () => {
    // test value initiliaztion
    const testName = "John";

    // test process
    const newEmployee = new Employee(testName, 123, "some@email.com")

    // conclusion
    expect(newEmployee.getName()).toBe(testName)
})

test("test for getId() method", () => {
   // test value initiliaztion
   const testId = "123";

   // test process
   const newEmployee = new Employee('John', testId, "some@email.com")

   // conclusion
   expect(newEmployee.getId()).toBe(testId)
})

test("test for getEmail() method", () => {
     // test value initiliaztion
     const testEmail = "some@email.com";

     // test process
     const newEmployee = new Employee('John', 123, testEmail)
 
     // conclusion
     expect(newEmployee.getEmail()).toBe(testEmail)
})

test("test for getRole() method", () => {
    // test process
    const newEmployee = new Employee('John', 123, "some@email.com")

    // conclusion
    expect(newEmployee.getRole()).toBe("Employee")
})