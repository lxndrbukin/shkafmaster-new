const newItemTemplate = require('../views/pages/admin/addItem');

const { setLanguage } = require('./helpers/middlewares');

module.exports = (app) => {
  app.get('/new-item', setLanguage, (req, res) => {
    res.send(newItemTemplate({ req }));
  });
};
