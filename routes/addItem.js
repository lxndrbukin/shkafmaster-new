const layout = require('../views/layout');
const addItem = require('../views/pages/addItem');

module.exports = (app) => {
  app.get('/new-item', (req, res) => {
    !req.cookies.lang ? (req.cookies.lang = 'ro') : req.cookies.lang;
    res.send(layout({ content: addItem(langCookie), req }));
  });
};
