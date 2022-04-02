const router = require('express').Router();
// Import methods that will be called to perform actions on the notes
const { createNewNote, deleteNote, validateNote } = require('../../lib/notes');
// Import notes json array
const { notes } = require('../../db/db.json');

// For creating unique id (uuid npm package)
const { v4: uuidv4 } = require('uuid');

// Returns all the notes from the json
router.get('/notes', (req, res) => {
    res.json(notes);
});

// Creates a note, validates it, and gives it a unique id
router.post('/notes', (req, res) => {
    // Creates a unique id for the note using uuid npm package
    req.body.id = uuidv4();

    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

// Deletes the note with the given id
router.delete('/notes/:id', (req, res) => {
    deleteNote(req.params.id, notes);
    res.json(true);
});

module.exports = router;