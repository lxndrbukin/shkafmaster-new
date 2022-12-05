const layout = require('../views/layout');

module.exports = (app) => {
  app.get('/contacts', (req, res) => {
    !req.cookies.lang ? req.cookies.lang === 'ro' : req.cookies.lang;
    res.send(layout({ content: 'Contacts', req }));
  });
};
