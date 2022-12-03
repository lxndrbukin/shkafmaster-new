const layout = require('../views/layout');
const addItem = require('../views/pages/addItem');

module.exports = (app) => {
  app.get('/new-item', (req, res) => {
    const langCookie = req.cookies.lang || 'ro';
    const path = req.originalUrl;
    res.send(layout({ content: addItem(langCookie), lang: langCookie, path }));
  });
};
