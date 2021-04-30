let app = require('express')()
const exphbs = require('express-handlebars');

app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.get('/', (request, response) => {
  response.render('index');
})

app.listen(8080)
