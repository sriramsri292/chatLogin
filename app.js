const express=require('express');
const http = require('http'); // Import the 'http' module for creating an HTTP server
const setupSocketIO = require('./controllers/socket');
const socketIO = require('socket.io');
 
const app_server=express();
const server = http.createServer(app_server);


  
const cors = require('cors');
app_server .use(express.json());
app_server.use(cors({ origin: '*' }));
app_server.use("/auth",require("./controllers/auth.controller"));
app_server.use("/socket",require("./controllers/socket"));
console.log("Setting up Socket.IO on /socket namespace");


module.exports=app_server;