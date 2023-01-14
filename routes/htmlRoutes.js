const path = require('path'); // importing the path module
const router = require('express').Router(); // requiring the express router 

router.get('/notes', (req, res) => {  // handling GET request to the '/notes' route
    res.sendFile(path.join(__dirname, '../public/notes.html'))  // using the path.join method to join the current directory and the path to the notes.html file and sending the file using the res.sendFile method
});

router.get('/', (req, res) => { // handling GET request to the root route
    res.sendFile(path.join(__dirname, '../public/index.html'));  // using the path.join method to join the current directory and the path to the index.html file and sending the file using the res.sendFile method
});

router.get('*', (req, res) => {  // handling GET request to any route
    res.sendFile(path.join(__dirname, '../public/index.html'));  // using the path.join method to join the current directory and the path to the index.html file and sending the file using the res.sendFile method
})

module.exports = router; //exporting the router to be used in other parts of the application
