// 練習使用 yargs 製作 CLI 工具
const yargs = require('yargs')

yargs.scriptName("pirate-parser")
    .usage('$0 <cmd> [args]')
    .command('hello [name]', 'welcome to yargs!', (yargs) => {
        yargs.positional('name', {
            type: 'string',
            default: 'Cambi',
            describe: 'the name to say hello to'
        })
    }, function (argv) {
        console.log('hello', argv.name, 'welcome to yargs!')
    })
    .help()
    .argv