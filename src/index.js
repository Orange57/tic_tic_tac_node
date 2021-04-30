const app = require('express')();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const session = require('express-session');

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

app.listen(8080);
