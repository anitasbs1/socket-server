const path = require('path');
const express = require('express');
const app = express();

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// -- settigns
app.set('port', process.env.PORT || 3000);

// -- static files
app.use(express.static(path.join(__dirname, 'public')));

// -- start the server
const server = app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'))
});

// -- web-sockets
const SocketkIO = require('socket.io');
const io = SocketkIO(server);

io.on('connection', (socket) => {
    console.log('new connection');

    socket.on('chat:message', (data) => {
        io.sockets.emit('chat:message', data);
    });

    socket.on('chat:typing', (data) => {
        socket.broadcast.emit('chat:typing', data)
    });

    socket.on('new_request', function(data){
        io.sockets.emit('new_request', data);
    })

    socket.on('accept_request', function(data){
        io.sockets.emit('accept_request', data);
    })

})