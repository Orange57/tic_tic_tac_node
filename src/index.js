let fs = require("fs");
let vm = require("vm");
vm.runInThisContext(fs.readFileSync(__dirname + "/game.js"))

const app = require('express')();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const session = require('express-session');
const http = require('http');
const server = http.createServer(app);
const serverIO = require("socket.io");
const io = new serverIO(server);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session(({
  secret: 'soItBeggins',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
})))

app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
}));

app.set('view engine', 'hbs');

app.get('/', (request, response) => {
  console.log(request.session)
  response.render('index');
  io.on('connection', (socket) => {
    socket.on('changePage', (e) => {
      io.emit('canChangePage', "/create_game");
    });
  });
});

app.get('/create_game', (request, response) => {
  if (request.session.error) {
    response.locals.error = request.session.error;
  }
  response.render('create_game');
});

app.get('/game', (request, response) => {
  if (request.session.pseudo) {
    response.locals.pseudo = request.session.pseudo;
  }
  response.render('game');
});

app.post('/create_game', (request, response) => {
  if (request.body.pseudo === '') {
    request.session.error = "Merci d'entrer un pseudo"
    response.redirect('/create_game');
  } else {
    request.session.pseudo = request.body.pseudo
    response.redirect('/game');
  }
});

server.listen(8080);

// let game = new TicTacToe();
// game.startGame();
// game.playTurn("1","X"); //X