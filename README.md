# OOP: Template Engine - Employee Summary

The goal was to build a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person. Since testing is a key piece in making code maintainable, the goal was also to ensure that all unit tests pass. One of the most important aspects of programming is writing code that is readable, reliable, and maintainable. Oftentimes, *how* we design our code is just as important as the code itself. Overall, the goal was to create a functional app where a user can use the CLI to generate an HTML page that displays information about their team, in which all tests must pass.

## User Story
```
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles
```

## Process
The process involved building a software engineering team generator command line application. The application prompts the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. A goal was also to ensure it passes all unit tests. When the user has completed building the team, the application creates an HTML file that displays a nicely formatted team roster based on the information provided by the user. 

Following the [common templates for user stories](https://en.wikipedia.org/wiki/User_story#Common_templates), this command line application is framed as follows:

* Use the [Inquirer npm package](https://github.com/SBoudrias/Inquirer.js/) to prompt the user for their email, id, and specific information based on their role with the company. For instance, an intern may provide their school, whereas an engineer may provide their GitHub username.

* App will run as a Node CLI to gather information about each employee.

* Below is an example of what the application may look like. 
![Employee Summary 1](./Assets/10-OOP-homework-demo-1.png)
![Employee Summary 2](./Assets/10-OOP-homework-demo-2.png)

In the `Develop` folder, there is a `package.json`, so run the command `npm install`.
The dependencies are, [jest](https://jestjs.io/) for running the provided tests, and [inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user.
There are also unit tests to help build the classes necessary.

* First, create multiple HTML templates for each type of user. Example:
  * `main.html`
  * `engineer.html`
  * `intern.html`
  * `manager.html`

* Make the methods as pure as possible, i.e. simple methods that are easier to test.
* The different employee types should all inherit some methods and properties from a base class of `Employee`.
🎗Note: In the HTML template files, add a placeholder character that helps the program identify where the dynamic markup begins and ends.

🎗Note: It is recommended to start with a directory structure similar to this:

```
lib/           // classes and helper code
output/        // rendered output
templates/     // HTML template(s)
test/          // jest tests
  Employee.test.js
  Engineer.test.js
  Intern.test.js
  Manager.test.js
app.js         // Runs the application
```

*Classes:* The project must have the these classes: `Employee`, `Manager`, `Engineer`,
`Intern`. The tests for these classes in the `tests` directory must all pass.

*User input:* The project must prompt the user to build an engineering team, i.e. a manager, and any number of engineers and interns.

*Roster output:* The project must generate a `team.html` page in the `output` directory, that displays a nicely formatted team roster. 

## Installation
```
1. Run tests
2. Create or update classes to pass a single test case
3. Repeat

```

## Usage
```
Key Components Used:
OOP - JavaScript - Node.js - Node CLI - package.JSON - TDD - npm - inquirer
```

## Contributing
Pull requests are welcome. Please use the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md) and for major changes, please open an issue beforehand to discuss the changes.

## Contributing
[MIT](https://choosealicense.com/licenses/mit/)

## Tests
Run the tests with `npm run test`.