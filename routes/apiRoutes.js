const router = require('express').Router(); // requiring the express router 
const allNotes = require('../db/db.json'); // This code exports the 'allNotes' variable from the 'db.json' file in the './db/' directory. 

// // This code creates a GET endpoint for the '/api/notes' route for rendering notes from allNotes
router.get('/notes', (req, res) => { 
    res.json(allNotes.slice(1));
});

router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const noteIndex = allNotes.findIndex(note => note.id === id);
    allNotes.splice(noteIndex, 1);
    res.json(allNotes.slice(1));
});

module.exports = router;
