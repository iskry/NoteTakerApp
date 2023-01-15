const express = require('express'); // importing the express module
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const app = express(); // instantiating an express application
const PORT = process.env.PORT || 3001; // setting the port for the server to run on, either from the environment variable or 3001

app.use(express.static('public')); // using the express.static middleware to serve files from the 'public' folder
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => { // starting the server and listening on the specified port
    console.log(`Server available at localhost: ${PORT}`); // logging the server availability message to the console
});

