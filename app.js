// 用於方便的驗證格式用
const validator = require('validator')
// 產生彩色 console.log
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

