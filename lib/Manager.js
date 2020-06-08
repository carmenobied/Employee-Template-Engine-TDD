// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// Manager, Engineer,and Intern classes should all extend from a class named Employee; see the directions

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
};

module.exports = Manager;

// Test out each class and verify it generates an object with the correct structure and methods 