const fs = require('fs')
const { type } = require('os')

const getNotes = () => {
        try {
            return JSON.parse(fs.readFileSync('notes-data.json')) 
        } catch (error) {
            return []
        }
    }

const saveNotes = notes => {
    fs.writeFileSync('notes-data.json', notes)
}

const getNoteWithTitle = noteTitle => {
    return getNotes().filter(note => note.title === noteTitle)
} 

const removeNote = noteTitle => {
    return getNotes().filter(note => note.title !== noteTitle)
}


const read = (param) => {
    const note = getNoteWithTitle(param.title)
    if(note.length > 0 ) {
        console.log(note)
    } else {
        console.log('no notes');
    }
}

const create = (param) => {
    if(getNoteWithTitle(param.title).length === 0 )  {
        let toWrite = getNotes();
        toWrite.push(param);
        fs.writeFileSync('notes-data.json', JSON.stringify(toWrite))
        console.log(`added note ${param.title}`);
    }
    else console.log("Note Exist"); 
}

const list = (param) => {
    console.log(getNotes());
}

const remove = (param) => {
    const removedNotes = removeNote(param.title);
    if(!(removedNotes.length === getNotes().length) ) {
        console.log(`Removing note ${param.title}`);
        fs.writeFileSync("notes-data.json",JSON.stringify(removedNotes));
    } else console.log('Note does not exist!');
}

module.exports = {
    read,
    create,
    list,
    remove
}