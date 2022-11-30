const layout = require('../views/layout');

module.exports = (app) => {
  app.get('/', (req, res) => {
    const langCookie = req.cookies.lang || 'ro';
    res.send(layout({ content: '', lang: langCookie }));
  });
};
