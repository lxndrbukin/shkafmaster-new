const layout = require('../views/layout');

module.exports = (app) => {
  app.get('/products', (req, res) => {
    const langCookie = req.cookies.lang || 'ro';
    res.send(layout({ content: 'Products', lang: langCookie }));
  });
};
