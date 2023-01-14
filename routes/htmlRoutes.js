const path = require('path'); // importing the path module

module.exports = (app) => { // exporting a function that takes in the express application instance

app.get('/notes', (req, res) => { // handling GET request to the '/notes' route
    res.sendFile(path.join(__dirname + '../public/notes.html')); // using the path.join method to join the current directory and the path to the notes.html file and sending the file using the res.sendFile method
});

app.get('*', (req, res) => { // handling GET request to any route
    res.sendFile(path.join(__dirname, '../public/index.html')); // using the path.join method to join the current directory and the path to the index.html file and sending the file using the res.sendFile method
  })
};