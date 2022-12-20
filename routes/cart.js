const layout = require('../views/layout');

const { setLanguage } = require('./helpers/middlewares');

module.exports = (app) => {
  app.get('/cart', setLanguage, (req, res) => {
    res.send(layout({ content: 'Cart', req }));
  });
};
