const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/ironhack/school', (req, res) => {
  res.render('ironhack');
});

app.get('/users/:user/books/:bookId', (req, res) => {
  console.log(req.params);
  res.send(req.params);
});
app.get('/users/:user', (req, res) => {
  console.log(req.params);
  res.send(req.params);
});
app.get('/users/:user/books', (req, res) => {
  console.log(req.params);
  res.send(req.params);
});

app.get('/search', (req, res) => {
  res.send(req.query);
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  console.log(req.body);
  res.send('Login done');
});

app.listen('3000', () => console.log('App is running!'));
