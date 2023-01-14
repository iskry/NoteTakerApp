const express = require('express'); // importing the express module
const app = express(); // instantiating an express application
const PORT = process.env.PORT || 3001; // setting the port for the server to run on, either from the environment variable or 3001
const apiRoutes = require('./routes/apiRoutes'); // requiring the apiRoutes.js file
const htmlRoutes = require('./routes/htmlRoutes'); // requiring the htmlRoutes.js file

app.use(express.static('public')); // using the express.static middleware to serve files from the 'public' folder
app.use('/api', apiRoutes)  // using the apiRoutes.js file for all routes starting with '/api'
app.use('/', htmlRoutes) // using the htmlRoutes.js file for all routes starting with '/'
app.use(express.urlencoded({ extended: true })); // using the express.urlencoded middleware to parse incoming request bodies
app.use(express.json()); // using the express.json middleware to parse incoming JSON request bodies

app.listen(PORT, () => { // starting the server and listening on the specified port
    console.log(`Server available at localhost: ${PORT}`); // logging the server availability message to the console
});