const fs = require('fs');
const vm = require('vm');
const path = require('path');

vm.runInThisContext(fs.readFileSync(path.join(__dirname, '/game.js')));
const app = require('express')();
const bodyParser = require('body-parser');
const session = require('express-session');
const http = require('http');

const server = http.createServer(app);
const serverIO = require('socket.io');

const io = new serverIO(server);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session(({
  secret: 'soItBeggins',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
})));

app.post('/create_game', (request, response) => {
  let { gameId } = request.body;
  if (request.body.gameId === null) {
    gameId = 'test';
  }

  const game = new TicTacToe();
  global[gameId] = game;
  const { board } = game;

  const data = {
    board,
    pseudo: request.body.pseudo,
    gameId,
  };
  response.json(data);
});

app.post('/game', (request, response) => {
  const { gameId } = request.body;
  io.use();

  const game = global[gameId];

  game.playTurn(1, 'X');
  const { board } = game;

  const data = {
    board,
    pseudo: request.body.pseudo,
    gameId,
  };
  response.json(data);
});

server.listen(8080);

// let game = new TicTacToe();
// game.startGame();
// game.playTurn("1","X"); //X
