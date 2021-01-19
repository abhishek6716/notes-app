const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// customize yargs version
yargs.version('1.1.0');
// console.log(process.argv);
// console.log(yargs.argv);

// commands to add -> add, remove, list, read
// create add command
yargs.command({
    command: 'add', 
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string' 
        },
        body: {
            description: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body);
    }
    /*
    handler: function(argv){
        notes.addNote(argv.title, argv.body);
    }
    */
});

// create remove command
yargs.command({
    command: 'remove', 
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
});

// create list command
yargs.command({
    command: 'list', 
    describe: 'List the notes',
    handler(){
        notes.listNotes();
    }
});

// create read command
yargs.command({
    command: 'read', 
    describe: 'Read notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
});

yargs.parse();
//console.log(yargs.argv);

/*
const command = process.argv[2];
if(command === 'add'){
    console.log('Adding Notes!!');
} else if(command === 'remove'){
    console.log('Removing Notes!!');
}
*/

/*
const msg = getNotes();

console.log(msg);

const greenMsg = chalk.blue('abhishek singh!!');
console.log(greenMsg);

console.log(chalk.blue.bgRed.bold('Hello world!'));

console.log(process.argv);
*/

// const add = require('./uliti.js')
// const sum = add(4, -2);
// console.log(sum);

// const fs = require('fs');
// fs.writeFileSync('notes.txt', 'file created by abhishek singh');
// fs.appendFileSync('notes.txt', ' file created on 11th jan 2021');


