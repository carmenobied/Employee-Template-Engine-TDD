const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

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
      if (response = NaN || response.length < 1) {
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

// Role-based prompts

const managerPrompt = {
  type: "input",
  name: "officeNumber",
  message: "What is your manager's office number?",
};
const engineerPrompt = {
  type: "input",
  name: "githubUsername",
  message: "What is your engineer's GitHub username?",
};
const internPrompt = {
  type: "input",
  name: "internSchool",
  message: "What school does the intern go to?",
};

// Additional employee
const additionalEmployeePrompt = {
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
    const officeNumPrompt = await inquirer.prompt(managerPrompt);
    const officeNumber = officeNumPrompt.number;

    const managerInfo = new Manager(name, id, email, officeNumber);
    employeeList.push(managerInfo); // push employeeInfo constructor object into employeeList array

    // ENGINEER
  } else if (role === "Engineer") {
    const githubPrompt = await inquirer.prompt(engineerPrompt);
    const github = githubPrompt.githubUsername;

    const engineerInfo = new Engineer(name, id, email, github);
    employeeList.push(engineerInfo);

    // INTERN 
  } else if (role === "Intern") {
    const schoolPrompt = await inquirer.prompt(internPrompt);
    const school = schoolPrompt.schoolIntern

    const internInfo = new Intern(name, id, email, school);
    employeeList.push(internInfo);
  };

    // After the user has input all employees desired, call the `render` function (required above) and pass in an array containing all employee objects; 
    // `render` function will generate and return a block of HTML including templated divs for each employee and store generated HTML in a const
    const inquirerRepeat = await inquirer.prompt(additionalEmployeePrompt);
    const { additionalEmployee } = inquirerRepeat;
      if (additionalEmployee === true) {
        init();
      } else {
        console.log(employeeList)

      const allEmployees = render(employeeList);

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