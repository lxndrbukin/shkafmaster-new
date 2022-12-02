const layout = require('../views/layout');
const login = require('../views/pages/login');
const auth = require('../views/pages/auth');

module.exports = (app) => {
  app.get('/auth', (req, res) => {
    const langCookie = req.cookies.lang || 'ro';
    const path = req.originalUrl;
    res.send(layout({ content: auth(langCookie), lang: langCookie, path }));
  });

  app.get('/login', (req, res) => {
    const langCookie = req.cookies.lang || 'ro';
    const path = req.originalUrl;
    res.send(layout({ content: login(langCookie), lang: langCookie, path }));
  });
};
