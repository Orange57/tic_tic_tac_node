let app = require('express')()
const exphbs = require('express-handlebars');
let bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}));

app.set('view engine', 'hbs');

app.get('/', (request, response) => {
  response.render('index');
})

app.get('/create_game' ,(req,res) =>{
  res.render('create_game');
});

app.get('/game' ,(req,res) =>{
  res.render('game');
});

app.post('/create_game', (req,res) =>{
  if (req.body.pseudo === ''){
    res.render('create_game', {
      post: {
        error: "Merci d'entrer un pseudo"
      }
    });
  } else {
    res.redirect('/game');
  }
})

app.listen(8080)
