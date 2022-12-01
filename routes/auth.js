const layout = require('../views/layout');
const auth = require('../views/pages/auth');

module.exports = (app) => {
  app.get('/auth', (req, res) => {
    const langCookie = req.cookies.lang || 'ro';
    const path = req.originalUrl;
    res.send(layout({ content: auth(langCookie), lang: langCookie, path }));
  });
};
