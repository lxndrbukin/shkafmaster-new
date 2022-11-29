const express = require('express');
const layout = require('./views/layout');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ['12safsdfweerdasfawtrr2'],
  })
);
app.use(cookieParser());

app.get('/', (req, res) => {
  if (req.cookies.lang) {
    res.redirect(`/${req.cookies.lang}`);
  } else {
    res.redirect('/ro');
  }
});

app.get('/:lng', (req, res) => {
  res.send(layout({ content: '', lang: req.cookies.lang }));
});

app.get('/:lng/contacts', (req, res) => {
  res.send(layout({ content: 'Contacts', lang: req.cookies.lang }));
});

app.get('/:lng/products', (req, res) => {
  res.send(layout({ content: 'Products', lang: req.cookies.lang }));
});

app.get('/:lng/cart', (req, res) => {
  res.send(layout({ content: 'Cart', lang: req.cookies.lang }));
});

app.get('/:lng/profile', (req, res) => {
  res.send(layout({ content: 'Profile', lang: req.cookies.lang }));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
