const fs= require('fs')
const chalk=require('chalk')
const addNote= (title,body)=>{
const notes=loadNotes()
const dupicateNotes= notes.filter((note)=>note.title===title)
const dupicateNote= notes.find((note)=>note.title===title)
if(!dupicateNote){
    notes.push(
        {
            title: title,
            body: body
        }
    )
    saveNotes(notes)
    console.log(chalk.blue.inverse('Note Saved Successfully'))
}
else{
    console.log(chalk.red.inverse('Title Already Exists. To check your Note List command "node app.js list"'))
}

}

const saveNotes= function(notes){
const dataJSON= JSON.stringify(notes)
fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes= ()=>{
    try{
    const dataBuffer=fs.readFileSync('notes.json')
    const dataJSON=dataBuffer.toString()
    return JSON.parse(dataJSON)
}
catch(e){
    return []
}
}

const removeNote=(title)=>{
    const notes=loadNotes()
    const noteToKeep=notes.filter((note)=> note.title!==title)
    if(notes.length>noteToKeep.length){
        saveNotes(noteToKeep)
        console.log(chalk.blue.inverse('Note Removed Successfully'))
    }
    else{
        console.log(chalk.red.inverse('Title Not Found.To check your Note List command "node app.js list"'))
    }
    
    console.log()

}
const listNotes =()=>{
    console.log(chalk.green.inverse('Notes List:'))
    const notes= loadNotes()
    notes.forEach(element => {console.log(element.title)
        
    });

}
const readNote=(title)=>{
    const notes=loadNotes()
    const noteRead=notes.find((note)=>note.title===title)
    if(noteRead){
        console.log(chalk.inverse(noteRead.body))
    }
    else{
        console.log(chalk.red.inverse('No Note Found. To check your Note List command "node app.js list"'))
    }
}
module.exports={
   
    addNote: addNote,
    removeNote: removeNote,
    listNotes:listNotes,
    readNote: readNote
}