const layout = require('../views/layout');

const { setLanguage } = require('./helpers/middlewares');

module.exports = (app) => {
  app.get('/contacts', setLanguage, (req, res) => {
    res.send(layout({ content: 'Contacts', req }));
  });
};
