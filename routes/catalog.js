const layout = require('../views/layout');
const catalog = require('../views/pages/catalog');
const catalogItemsRepo = require('../repositories/catalogItems');

const { setLanguage } = require('./helpers/middlewares');

module.exports = (app) => {
  app.get('/catalog', setLanguage, async (req, res) => {
    const catalogItems = await catalogItemsRepo.getAll();
    res.send(layout({ content: catalog(catalogItems, req), req }));
  });

  app.get('/catalog/:productName', setLanguage, (req, res) => {
    res.send(layout({ content: 'Products', req }));
  });
};
