// For use in writing to the json file
const fs = require('fs');
// For precise selection of path where file will be written
const path = require('path');

// Creates a new note using the provided title and text and appending it to the notes array in json
function createNewNote(body, notesArray) {
    const note = body;

    // Pushes the new note onto the array
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    return note;
}

// Deletes the note with the given id
function deleteNote(id, notesArray) {
    for (let i = 0; i < notesArray.length; i++) {
        let note = notesArray[i];

        if (note.id == id) {
            notesArray.splice(i, 1);
            fs.writeFileSync(
                path.join(__dirname, '../db/db.json'),
                JSON.stringify(notesArray, null, 2)
            );

            break;
        }
    }
}

// Validates note contents to make sure its syntactically correct
function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}

// Exports these methods for further use in the api routes
module.exports = { createNewNote, deleteNote, validateNote };
