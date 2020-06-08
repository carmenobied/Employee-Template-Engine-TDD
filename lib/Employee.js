// TODO: Write code to define and export the Employee class
// Manager, Engineer,and Intern classes should all extend from a class named Employee; see the directions

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
};

module.exports= Employee;

// Test outeach class and verify it generates an object with the correct structure and methods