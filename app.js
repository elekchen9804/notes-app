// the utility file will execute first
const validator = require('validator')
const chalk = require('chalk')

// CLI print color, make log colorful
console.log(chalk.bgGreen('You are in Notes App'))
// get cli arg when you execute command
// ex. you enter: node app.js dev, the arg will be dev
const command = process.argv[2]

if (command === 'add') {
    console.log('add notes')
} else if (command === 'delete') {
    console.log('delete notes')
}

