const layout = require('../views/layout');

const { setLanguage } = require('./helpers/middlewares');

module.exports = (app) => {
  app.get('/products', setLanguage, (req, res) => {
    res.send(layout({ content: 'Products', req }));
  });

  app.get('/products/:productName', setLanguage, (req, res) => {
    res.send(layout({ content: 'Products', req }));
  });
};
