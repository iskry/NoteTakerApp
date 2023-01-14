const fs = require('fs'); // importing the fs module
const path = require('path'); // importing the path module
const router = require('express').Router(); // requiring the express router

module.exports = (app) => { // exporting a function that takes in the express application instance
    router.get('/api/notes', (req, res) => { // handling GET request to the '/api/notes' route
        fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => { // reading the db.json file located in the 'db' folder
            if (err) throw err;
            res.json(JSON.parse(data)); // sending the parsed JSON data as a response
        });
    });

    router.post('/api/notes', (req, res) => { // handling POST request to the '/api/notes' route
        fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => { // reading the db.json file located in the 'db' folder
            if (err) throw err;
            const notes = JSON.parse(data); // parsing the data
            notes.push(req.body);  // push the new data to the notes array
            fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notes), (err) => { // writing the updated notes array to the db.json file
                if (err) throw err;
                res.json(notes); // sending the updated notes array as a response
            });
        });
    });
}
