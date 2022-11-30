const layout = require('../views/layout');

module.exports = (app) => {
  app.get('/profile', (req, res) => {
    const langCookie = req.cookies.lang || 'ro';
    res.send(layout({ content: 'Profile', lang: langCookie }));
  });
};
