const Employee = require('./Employee');

class Manager extends Employee {

    constructor(name, id, email, officeNumber) {
        // this.name = name;
        // this.id = id;
        // this.email = email;
        super(name, id, email);
        this.officeNumber = officeNumber
    }

    getRole() {
        return "Manager"
    }
}

// const newManager = new Manager("Peter", 123, "peter@gmail.com", 567);

// console.log(newManager.getName())

module.exports = Manager;