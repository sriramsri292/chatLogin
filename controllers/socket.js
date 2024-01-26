const socketIO = require('socket.io');

function setupSocketIO(server) {
  const io = socketIO(server, { path: '/custom-socket-path' }); // Specify the path here

  io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle incoming messages
    socket.on('chat message', (msg) => {
      console.log(`Message: ${msg}`);
      io.emit('chat message', msg); // Broadcast the message to all connected clients
    });

    // Handle disconnection
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });
}

module.exports = setupSocketIO;
