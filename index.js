const { prompt } = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },

    {
        type: 'input',
        name: 'description',
        message: 'Write a brief description: '
    },

    {
        type: 'input',
        name: 'usage',
        message: 'What is your projects usage?'
    },

    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your Github username: '
    },

    {
        type: 'input',
        name: 'userEmail',
        message: 'Enter your email: '
    },

    {
        type: 'input',
        name: 'license',
        message: 'List licenses for project: '
    },

    {
        type: 'input',
        name: 'contributors',
        message: 'List all contributors: '
    },

    {
        type: 'input',
        name: 'installation',
        message: 'What do you need to install?'
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log(success)
    );
}


// TODO: Create a function to initialize app
async function init() {
    const reply = await prompt(questions);
    console.log(reply);
    writeToFile(reply)
}

function writeToFile(data) {
    const html = `
Title:
${data.title}
Description:
${data.description}
GitHub Username:
${data.githubUsername}
User email:
${data.userEmail}
License:
${data.license}
Usage:
${data.usage}
Contributors:
${data.contributors}
Installation:
${data.installation}
`

    fs.writeFile(`${data.title.replace(/ /g, '')}.md`, html, (err) => console.log(err || 'README file was successfully created!'))

}

// Function call to initialize app
init();