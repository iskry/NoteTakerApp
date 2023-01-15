const path = require('path'); 
// importing the path module from node.js, which is used to work with file and directory paths.
const router = require('express').Router(); 
// importing the express router, which allows for the creation of modular, mountable route handlers

// create a GET endpoint for the '/notes' route
router.get('/notes', (req, res) => {  
    // when a client makes a GET request to this endpoint, it serves the 'notes.html' file located in the './public' directory
    res.sendFile(path.join(__dirname, '../public/notes.html'))  
});

// create a GET endpoint for the root route ('/')
router.get('/', (req, res) => { 
    // when a client makes a GET request to this endpoint, it serves the 'index.html' file located in the './public' directory
    res.sendFile(path.join(__dirname, '../public/index.html'));  
});

// create a catch-all GET endpoint for any other route
router.get('*', (req, res) => {  
    // when a client makes a GET request to any other route, it serves the 'index.html' file located in the './public' directory
    res.sendFile(path.join(__dirname, '../public/index.html'));  
});

// export the router
module.exports = router; 
