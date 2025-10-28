// Server.js is going to be my main server file for my backend.
// Currently works as a static version of the website.

/*
TODO: Finish front end development of application. ==================== IN PROCESS
TODO: Create POSTGRESQL database and connect to it. =================== NOT STARTED
TODO: Create API endpoints to interact with database. ================= NOT STARTED
TODO: Containerise application using Docker. ========================== COMPLETE
*/

// Import express module.
import express from "express";
import path from 'path';

// Declare instance of express as server. Declare port number globally.
const server = express();
const port = 3000;
const rootDirectory = import.meta.dirname;

console.log(typeof(rootDirectory));

// This won't work for ESM. __dirname not supported.
server.use(express.static(path.join(rootDirectory, 'public')));

// Route for hello, world which is at default route '/'.
server.get('/', (req, res) => {
    res.sendFile(path.join(rootDirectory, 'public', 'index.html'));
});

// listen() takes a port number and then listens on that port.
// The route at '/' is hello, world. So if you go to localhost:port you will go to hello, world by default.
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});