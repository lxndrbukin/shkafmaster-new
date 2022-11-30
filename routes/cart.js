const layout = require('../views/layout');

module.exports = (app) => {
  app.get('/cart', (req, res) => {
    const langCookie = req.cookies.lang || 'ro';
    res.send(layout({ content: 'Cart', lang: langCookie }));
  });
};
