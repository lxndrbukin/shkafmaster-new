const layout = require('../views/layout');
const login = require('../views/pages/login');
const auth = require('../views/pages/auth');
const crypto = require('crypto');
const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = (app) => {
  app.get('/auth', (req, res) => {
    const langCookie = req.cookies.lang || 'ro';
    const path = req.originalUrl;
    res.send(layout({ content: auth(langCookie), lang: langCookie, path }));
  });

  app.post('/login', async (req, res) => {
    await User.findOne({ username: req.body.username }, (err, user) => {
      if (err) {
        console.log(err);
      } else {
        req.session.userId = user.userId;
        res.redirect('/');
      }
    }).clone();
  });

  app.post('/auth', async (req, res) => {
    const user = new User({
      userId: crypto.randomBytes(4).toString('hex'),
      email: req.body.email,
      password: req.body.password,
    });
    user.save();
    req.session.userId = user.userId;
    res.redirect('/');
  });

  app.get('/login', (req, res) => {
    const langCookie = req.cookies.lang || 'ro';
    const path = req.originalUrl;
    res.send(layout({ content: login(langCookie), lang: langCookie, path }));
  });

  app.get('/signout', (req, res) => {
    req.session = null;
    res.redirect('/');
  });
};
