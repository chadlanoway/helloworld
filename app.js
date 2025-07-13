// Name:        app.js
// Description: simple node.js and express app

// Import the express module
var express = require('express');

// Initialize express by instantiating it and assign a variable 
// called 'app' to it
var app = express();

// Router to group routes
const mainRouter = express.Router();

// Handle GET '/'
mainRouter.get('/', (req, res) => {
    console.log("GET / via mainRouter");
    res.status(200).send('Hello World - from my new Geog 576 node.js express app!');
});

// Handle GET '/about'
mainRouter.get('/about', (req, res) => {
    console.log("GET /about via mainRouter");
    res.status(200).send('About Page');
});

// Mount that router at the root path
app.use('/', mainRouter);

// Start the server
app.listen(8000, () => {
    console.log('Node.js and Express app listening on port 8000!');
});