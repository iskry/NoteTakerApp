const router = require('express').Router();
const path = require('path');
const fs = require('fs')
const bodyParser = require('body-parser');
router.use(bodyParser.json());
const uuid = require('uuid');

router.get('/notes', (req, res) => { 
    res.sendFile(path.join(__dirname, '../db/db.json'));
});

router.post('/notes', (req, res) => {
    let db = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8'));
    res.json(db);

    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuid.v4()
    };
    db.push(newNote);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(db));
});

router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
});



module.exports = router;
