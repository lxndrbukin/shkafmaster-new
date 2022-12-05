const layout = require('../views/layout');
const homepage = require('../views/pages/home');

module.exports = (app) => {
  app.get('/', (req, res) => {
    !req.cookies.lang ? req.cookies.lang === 'ro' : req.cookies.lang;
    res.send(
      layout({
        content: homepage({ content: '' }),
        req,
      })
    );
  });
};
