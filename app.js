const chalk = require('chalk')
const yargs= require('yargs')


const notes=require('./notes.js')

yargs.command({
command:'addNote',
describe: 'Add your Note',
builder:{
    title:{
        describe:'Note Title',
        demandOption: true,
        type: 'string'
    },
    body:{
        describe:'Note Body',
        demandOption: true,
        type:'string'
    }
},
handler(argv){
    notes.addNote(argv.title,argv.body)
}
})
yargs.command({
    command:'removeNote',
    describe:'Remove a Note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command: 'listNotes',
    describe:'Shows List of Contents',
    handler(){
        notes.listNotes()
    }
})
yargs.command({
    command:'readNote',
    describe:'Reads Your described Note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})
yargs.parse()