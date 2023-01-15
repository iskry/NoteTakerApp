const router = require('express').Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
const allNotes = require('../db/db.json');

// // This code creates a GET endpoint for the '/api/notes' route for rendering notes from allNotes
router.get('/notes', (req, res) => { 
    res.json(allNotes.slice(1));
});

router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
});

router.post('/notes', (req, res) => {
    console.log(req.body)
});

module.exports = router;
