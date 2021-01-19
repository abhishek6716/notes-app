const fs = require('fs');
const chalk = require('chalk');


const addNote = function(title, body){
    const notes = loadNotes();

    // const duplicateNotes = notes.filter((i) => i.title === title);
    const duplicateNote = notes.find((i) => i.title === title);

    /*
    const duplicateNotes = notes.filter(function(i){
        return i.title === title;
    });

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body    
        })
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'));
    }
    else{
        console.log(chalk.red.inverse('Note title already taken!'))
    }
    */

   if(duplicateNote === undefined){
       notes.push({
           title: title,
           body: body    
       })
       saveNotes(notes);
       console.log(chalk.green.inverse('New note added!'));
    }
    else{
        console.log(chalk.red.inverse('Note title already taken!'))
    } 
}

const removeNote = function(title){
    const notes = loadNotes();
    const notesToKeep = notes.filter((i) => i.title !== title);

    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note removed!'));
        saveNotes(notesToKeep);
    }
    else{
        console.log(chalk.red.inverse('No note found!'))
    }
}

const listNotes = () => {
    const notes = loadNotes();

    console.log(chalk.inverse('your notes!'));

    notes.forEach((i) => {
        console.log(i.title);
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((i) => i.title === title);

    if(note){
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    } else{
        console.log(chalk.red.inverse('Note not found!'));
    }
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON); 
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJASON = dataBuffer.toString();
        return JSON.parse(dataJASON);
    } catch(e){
        return [];
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes, 
    readNote: readNote
}