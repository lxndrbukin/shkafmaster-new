const layout = require('../views/layout');
const homepage = require('../views/pages/home');

module.exports = (app) => {
  app.get('/', (req, res) => {
    const langCookie = req.cookies.lang || 'ro';
    const path = req.originalUrl;
    res.send(
      layout({
        content: homepage({ content: '' }),
        lang: langCookie,
        path,
        session: req.session.userId,
      })
    );
  });
};
