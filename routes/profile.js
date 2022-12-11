const layout = require('../views/layout');

module.exports = (app) => {
  app.get('/profile', (req, res) => {
    !req.cookies.lang ? (req.cookies.lang = 'ro') : req.cookies.lang;
    if (req.session.userId) {
      res.send(layout({ content: req.session.userId, req }));
    } else {
      res.redirect('/');
    }
  });
};
