const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const ServerIo = require("socket.io");
const io = new ServerIo(server);
const port = 3000

app.get('/' ,(req,res) =>{
    res.sendFile(__dirname + '/index.html');
    // res.send('Hello World!');
});

io.on('connection', (socket) => {
    console.log('new user');
});

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

