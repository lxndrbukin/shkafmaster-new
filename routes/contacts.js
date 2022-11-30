const layout = require('../views/layout');

module.exports = (app) => {
  app.get('/contacts', (req, res) => {
    const langCookie = req.cookies.lang || 'ro';
    res.send(layout({ content: 'Contacts', lang: langCookie }));
  });
};
