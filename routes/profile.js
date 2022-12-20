const layout = require('../views/layout');

const { setLanguage } = require('./helpers/middlewares');

module.exports = (app) => {
  app.get('/profile', setLanguage, (req, res) => {
    if (req.session.userId) {
      res.send(layout({ content: req.session.userId, req }));
    } else {
      res.redirect('/');
    }
  });
};
