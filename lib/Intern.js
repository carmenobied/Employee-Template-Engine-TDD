// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// Manager, Engineer,and Intern classes should all extend from a class named Employee; see the directions

const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        //elements from parent
        super(name, id, email);
        //new elements
        this.school = school;
    }
    //Fufill tests
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
};

module.exports = Intern;

// Test out each class and verify it generates an object with the correct structure and methods