// Server.js is going to be my main server file for my backend.
// I need to do the following:
/*
1. Get the server running (Hello World!) - COMPLETE. 
2. Get index.html to load.
3. Get the CSS to load with the HTML.
4. Get routes prepared for all the pages on my page.
*/
// This will be the perfect starting point for my code.

// Import express module.
import express from "express";
import path from 'path';

// Declare instance of express as server. Declare port number globally.
const server = express();
const port = 3000;

// This won't work for ESM. __dirname not supported.
server.use(express.static(path.join('public')));

// Route for hello, world which is at default route '/'.
server.get('/', (req, res) => {
    res.send('Hello, World!');
});

// listen() takes a port number and then listens on that port.
// The route at '/' is hello, world. So if you go to localhost:port you will go to hello, world by default.
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});