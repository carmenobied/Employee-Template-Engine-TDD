const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members, and to create objects for each team member (using the correct classes as blueprints!)

// Question Prompts array
const questionPrompts = [
  {
    type: "input",
    name: "name",
    message: "What is your employee's name?",
    validate: function (response) {
      if (response.length < 1) {
        return 'You must enter a valid name';
      }
      return true;
    }
  },
  {
    type: "input",
    name: "id",
    message: "What is your teammate's ID number?",
    validate: function (response) {
      if (response.length < 1) {
        return 'You must enter a valid ID number';
      }
      return true;
    }
  },
  {
    type: "input",
    name: "email",
    message: "What is your employee's email address?",
    validate: response => {
      if (response.length < 1) {
        return "You must enter your email address."
      }   
      return true;
    }
  },
  {
    type: "list",
    name: "role",
    message: "What is your employee's role?",
    choices: ["Manager", "Engineer", "Intern"],
  }
];

// Role-based Prompts
const managerRole = {
  type: "input",
  name: "officeNum",
  message: "What is your manager's office number?",
};
const engineerRole = {
  type: "input",
  name: "githubUsername",
  message: "What is your engineer's GitHub username?",
};
const internRole = {
  type: "input",
  name: "internSchool",
  message: "What school does the intern go to?",
};

// Add additional employee prompts
const addEmployee = {
    type: 'list',
    name: 'additionalEmployee',
    message: 'Would you like to add an additional employee?',
    choices: ["yes", "no"],
};

// Answers array 
const employeeList = [];

// Use different question prompts via inquirer based on employee type.
// Create async init function
async function init() {
  console.log("Please answer the following questions")
  const { name, id, email, role } = await inquirer.prompt(questionPrompts);

  // Use if else statements based on employee roles: manager, engineer, intern  
  // MANAGER
  if (role === "Manager") {
    const officeNumPrompt = await inquirer.prompt(managerRole);
    const officeNumber = officeNumPrompt.officeNum;

    // manager constructor
    const addManager = new Manager(name, id, email, officeNumber);
    employeeList.push(addManager); // push addManager into employeeList array

    // ENGINEER
  } else if (role === "Engineer") {
    const githubPrompt = await inquirer.prompt(engineerRole);
    const github = githubPrompt.githubUsername;

    // engineer constructor
    const addEngineer = new Engineer(name, id, email, github);
    employeeList.push(addEngineer);

    // INTERN 
  } else if (role === "Intern") {
    const schoolPrompt = await inquirer.prompt(internRole);
    const school = schoolPrompt.internSchool;
    
    // intern constructor
    const addIntern = new Intern(name, id, email, school);
    employeeList.push(addIntern);
  };

    // After the user has input all employees desired, call the `render` function (required above) and pass in an array containing all employee objects; 
    // `render` function will generate and return a block of HTML including templated divs for each employee and store generated HTML in a const
    const inquirerRepeat = await inquirer.prompt(addEmployee);
    const { additionalEmployee } = inquirerRepeat;
      if (additionalEmployee === "yes") {
        init();
      } else {
        console.log(employeeList)

      const allEmployees = render(employeeList);
      console.log("Successfully generated an HTML output!")

        // Now ready to create an HTML file using the HTML returned from the `render` function. 
      // Write it to a file named `team.html` in the `output` folder. You can use the variable `outputPath` above target this location.
      fs.writeFile(outputPath, allEmployees, function (err) {
        if (err) {
                console.log(err);
            }
        });
    };
  };

init();