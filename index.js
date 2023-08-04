
const fs = require('fs'); 
const inquirer = require('inquirer'); 
const generateMarkdown = require('./utils/generateMarkdown');

const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('No username detected. Enter your GitHub username!');
                return false; 
            }
        } 
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('No email detected. Enter your email address!');
                return false; 
            }
        }

    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('No title detected. Enter a project title!');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description and motivation for your project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('No description detected. Enter a description of your project!');
                return false; 
            }
        }
    }, 
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license does your project have?',
        choices: 
         ['Apache 2.0', 
        'MIT', 
        'GPL 3.0',
        'ISC', 
        'None'
        ],
        default: ["MIT"],
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('No license detected. MIT is default. Choose a license!');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Are there any instructions to install your project? N/A if none.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('No instrcutions detected. Enter N/A or instructions!');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Are there any instructions to use your project? N/A if none.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('No instructions detected. Enter N/A or instructions!');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Are there any instructions to contribute to your project? N/A if none.',
        validate: nameInput => {
            if (nameInput) {
            return true;
            } else {
            console.log('No instructions detected. Enter N/A or instructions!');
            return false;
            }
        }
    },  
    {
        type: 'input',
        name: 'test',
        message: 'Are there any instructions to test your project? N/A if none',
        validate: nameInput => {
            if (nameInput) {
            return true;
            } else {
            console.log('No instructions detected. Enter N/A or instructions!');
            return false;
            }
        }
    }  
]);
};

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
    err ? console.log(err) : console.log('Successfully created ReadMe.md in Utils folder!')
    })
};

function init() {

    console.log(
    `
    Initializing ReadMe Generator......
    Answer the following questions to create your very own ReadMe!
    `);

    inquirer.prompt(questions)
    .then(readmeData => {
        writeToFile("./utils/readme.md", generateMarkdown(readmeData))
    })
};


init();