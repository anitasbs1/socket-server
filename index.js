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

    socket.on('new_request', function (data) {
        io.sockets.emit('new_request', data);
    })

    socket.on('accept_request', function (data) {
        io.sockets.emit('accept_request', data);
    })

    socket.on('cancel_request', function (data) {
        io.sockets.emit('cancel_request', data);
    })

    socket.on('cancel_requestI', function (data) {
        io.sockets.emit('cancel_requestI', data);
    })

    socket.on('ImgSaludoFirst', function (data) {
        io.sockets.emit('ImgSaludoFirst', data);
    })

    socket.on('redirectColores', function (data) {
        io.sockets.emit('redirectColores', data);
    })

    socket.on('ImgColoresFirst', function (data) {
        io.sockets.emit('ImgColoresFirst', data);
    })

    socket.on('waitPartnerSaludoFirst', function (data) {
        io.sockets.emit('waitPartnerSaludoFirst', data);
    })

    socket.on('ImgColoresSecond', function (data) {
        io.sockets.emit('ImgColoresSecond', data);
    })

    socket.on('ImgColoresThird', function (data) {
        io.sockets.emit('ImgColoresThird', data);
    })

    socket.on('ImgColoresQuarter', function (data) {
        io.sockets.emit('ImgColoresQuarter', data);
    })

    socket.on('ImgHigieneFirst', function (data) {
        io.sockets.emit('ImgHigieneFirst', data);
    })

    socket.on('ImgHigieneSecond', function (data) {
        io.sockets.emit('ImgHigieneSecond', data);
    })

    socket.on('ImgHigieneThird', function (data) {
        io.sockets.emit('ImgHigieneThird', data);
    })

    socket.on('ImgHigieneQuarter', function (data) {
        io.sockets.emit('ImgHigieneQuarter', data);
    })

    socket.on('ImgHigieneFifth', function (data) {
        io.sockets.emit('ImgHigieneFifth', data);
    })

    socket.on('ImgHigieneSixth', function (data) {
        io.sockets.emit('ImgHigieneSixth', data);
    })

    socket.on('ImgUbicacionFirst', function (data) {
        io.sockets.emit('ImgUbicacionFirst', data);
    })

    socket.on('ImgUbicacionSecond', function (data) {
        io.sockets.emit('ImgUbicacionSecond', data);
    })

    socket.on('ImgUbicacionThird', function (data) {
        io.sockets.emit('ImgUbicacionThird', data);
    })

    socket.on('ImgUbicacionQuarter', function (data) {
        io.sockets.emit('ImgUbicacionQuarter', data);
    })

    socket.on('waitPartnerSaludo', function (data) {
        io.sockets.emit('waitPartnerSaludo', data);
    })

    socket.on('acceptPartnerSaludo', function (data) {
        io.sockets.emit('acceptPartnerSaludo', data);
    })

    socket.on('cancelIPartnerSaludo', function (data) {
        io.sockets.emit('cancelIPartnerSaludo', data);
    })

    socket.on('rejectPartnerSaludo', function (data) {
        io.sockets.emit('rejectPartnerSaludo', data);
    })
    
    socket.on('sendRequestToNextGame', function (data) {
        io.sockets.emit('sendRequestToNextGame', data);
    })

    socket.on('acceptRequestToNextGame', function (data) {
        io.sockets.emit('acceptRequestToNextGame', data);
    })

    socket.on('sendRequestToExitGame', function (data) {
        io.sockets.emit('sendRequestToExitGame', data);
    })

    socket.on('acceptRequestToExitGame', function (data) {
        io.sockets.emit('acceptRequestToExitGame', data);
    })

})