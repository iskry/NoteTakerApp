const express = require('express'); // importing the express module
const app = express(); // instantiating an express application
const PORT = process.env.PORT || 3001; // setting the port for the server to run on, either from the environment variable or 3001
require('./routes/htmlRoutes.js')(app); // requiring and executing the exported function from the htmlRoutes.js file, passing in the express application instance as an argument  

app.use(express.static('public')); // using the express.static middleware to serve files from the 'public' folder
app.use(express.urlencoded({ extended: true })); // using the express.urlencoded middleware to parse incoming request bodies
app.use(express.json()); // using the express.json middleware to parse incoming JSON request bodies

app.listen(PORT, () => { // starting the server and listening on the specified port
    console.log(`Server available at localhost: ${PORT}`); // logging the server availability message to the console
});