const router = require('express').Router();
// importing the express router, which allows for the creation of modular, mountable route handlers
const path = require('path');
// importing the path module from node.js, which is used to work with file and directory paths
const fs = require('fs')
// importing the fs module from node.js, which is used to interact with the file system
const bodyParser = require('body-parser');
router.use(bodyParser.json());
// importing the body-parser module and configure it to parse JSON 
const uuid = require('uuid');
// importing the uuid package 

// create a GET endpoint for the '/notes' route
router.get('/notes', (req, res) => { 
    // when a client makes a GET request to this endpoint, it serves the 'db.json' file located in the './db' directory
    res.sendFile(path.join(__dirname, '../db/db.json'));
});

// create a POST endpoint for the '/notes' route
router.post('/notes', (req, res) => {
    // read the data from 'db.json' file
    let db = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8'));
    res.json(db);
    // create a new note object with title, text and a unique id
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuid.v4()
    };
    // push the new note to the db
    db.push(newNote);
    // write the new db back to the 'db.json' file
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(db));
});

// create a DELETE endpoint for the '/notes/:id' route
router.delete('/notes/:id', (req, res) => {
    // read the data from 'db.json' file
    let db = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8'));
    // filter the notes array to remove the note with the matching id
    const newDb = db.filter(note => note.id !== req.params.id); 
    // write the new db back to the 'db.json' file
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(newDb));
    res.json(newDb);
});

// export the router
module.exports = router;
