const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const HTTP_SERVER = express();
const server = http.createServer(HTTP_SERVER);
const port = 5000;

require("dotenv").config();
HTTP_SERVER.listen(port, "0.0.0.0", (err) => {
    if (err) throw err;
    console.log(`Listening on PORT ${port}`);
});

require('./Database/dbconfig');

const setupSocketIO = require('./controllers/socket');
setupSocketIO(server); // Ensure this line is present

HTTP_SERVER.use('/', require('./app'));
