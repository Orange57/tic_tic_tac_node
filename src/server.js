const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const http = require('http');
const server = http.createServer(app);
const ServerIo = require("socket.io");
const io = new ServerIo(server);
const port = 3000

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
  }));
app.set('view engine', 'hbs');
app.get('/' ,(req,res) =>{
    res.render('create_game');
});

io.on('connection', (socket) => {
    console.log('new user');
});

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

