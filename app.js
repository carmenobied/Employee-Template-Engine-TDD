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
    },
    { 
      type: "input",
      name: "id",
      message: "What is your teammate's ID number?"
    },
    { 
      type: "input",
      name: "email",
      message: "What is your employee's email address?"
    },
    { 
      type: "list",
      name: "role",
      message: "What is your employee's role?",
      choices: ["Manager", "Engineer", "Intern"],
    }
  ];
  // Role-based prompts
  const managerPrompt= {
    type: "input",
    name: "officeNumber",
    message: "What is your manager's office number?", 
  };
  const engineerPrompt= {
    type: "input",
    name: "gitUsername",
    message: "What is your engineer's Github username?", 
  };
  const internPrompt= {
    type: "input",
    name: "internSchool",
    message: "What school does the intern go to?",
  };

   // Answers array 
   const employeeList = [];

   // Note: write code to ask different questions via inquirer depending on employee type.

   // Create async init function
    async function init() {
    const employeeInput = await inquirer.prompt(questionPrompts);
    const {name, id, email, role} = employeeInput;     
    // If else statement based on employee roles: manager, engineer, intern  
    // if (role === "Manager") { }
    // else if (role === "Engineer") { } 
    // else if (role === "Intern") { } 

    // push employee constructor object into employeesList
    // employeeList.push();

    // After the user has input all employees desired, call the `render` function (required above) and pass in an array containing all employee objects; 
    // `render` function will generate and return a block of HTML including templated divs for each employee and store generated HTML in a const
    const allEmployees = render(employeeList);

    // Now ready to create an HTML file using the HTML returned from the `render` function. 
    // Write it to a file named `team.html` in the `output` folder. You can use the variable `outputPath` above target this location.
    fs.writeFile(outputPath, allEmployees, function(err){
        if(err){
          throw err;
        }
      });
  };

init();