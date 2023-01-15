// Import the express module
const express = require('express');

// Import the apiRoutes module from the routes folder
const apiRoutes = require('./routes/apiRoutes');

// Import the htmlRoutes module from the routes folder
const htmlRoutes = require('./routes/htmlRoutes');

// Create an instance of the express application
const app = express();

// Create a constant variable PORT which checks the process environment variable for a PORT or assigns 3001 as a default
const PORT = process.env.PORT || 3001;

// Tell the app to use the public folder as a static folder where it will look for static files like images and stylesheets
app.use(express.static('public'));

// Set up the app to use the imported apiRoutes module for requests made to the "/api" endpoint
app.use('/api', apiRoutes);

// Set up the app to use the imported htmlRoutes module for requests made to the root endpoint "/"
app.use('/', htmlRoutes);

// Start the server on the defined PORT and log a message to the console to inform user
app.listen(PORT, () => {
console.log(`Server available at localhost: ${PORT}`);
});