const layout = require('../views/layout');
const homepage = require('../views/pages/home');

const { setLanguage } = require('./helpers/middlewares');

module.exports = (app) => {
  app.get('/', setLanguage, (req, res) => {
    res.send(
      layout({
        content: homepage({ content: '' }),
        req,
      })
    );
  });
};
