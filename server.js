const express = require('express'); // importing the express module
const app = express(); // instantiating an express application
const PORT = process.env.PORT || 3001; // setting the port for the server to run on, either from the environment variable or 3001
const allNotes = require('./db/db.json'); // This code exports the 'allNotes' variable from the 'db.json' file in the './db/' directory. 
const htmlRoutes = require('./routes/htmlRoutes'); // requiring the htmlRoutes.js file

app.use(express.static('public')); // using the express.static middleware to serve files from the 'public' folder
app.use('/', htmlRoutes) // using the htmlRoutes.js file for all routes starting with '/'
app.use(express.urlencoded({ extended: true })); // using the express.urlencoded middleware to parse incoming request bodies
app.use(express.json()); // using the express.json middleware to parse incoming JSON request bodies

// API logic

// // This code creates a GET endpoint for the '/api/notes' route for rendering notes from allNotes
app.get('/api/notes', (req, res) => { 
    res.json(allNotes.slice(1));
});


app.listen(PORT, () => { // starting the server and listening on the specified port
    console.log(`Server available at localhost: ${PORT}`); // logging the server availability message to the console
});

