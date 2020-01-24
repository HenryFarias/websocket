const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

let socketInstance;

app.get('/', (req, res) => {
    socketInstance.emit('event', 'Hello World');
    res.status(200).send();
});

io.on('connection', function (socket) {
    socketInstance = socket;
    console.log('Socket IO Connected.');
});

http.listen(3030, function () {
    console.log('Server is listening on port 3030');
});
