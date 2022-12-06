const layout = require('../views/layout');
const signinTemplate = require('../views/pages/signin');
const signupTemplate = require('../views/pages/signup');
const usersRepo = require('../repositories/users');

module.exports = (app) => {
  app.get('/signup', (req, res) => {
    !req.cookies.lang ? req.cookies.lang === 'ro' : req.cookies.lang;
    res.send(layout({ content: signupTemplate(req.cookies.lang), req }));
  });

  app.post('/signup', async (req, res) => {
    const user = await usersRepo.create({
      userId: usersRepo.randomId(),
      email: req.body.email,
      password: req.body.password,
    });
    user.save();
    req.session = user;
    res.redirect('/');
  });

  app.get('/login', (req, res) => {
    !req.cookies.lang ? req.cookies.lang === 'ro' : req.cookies.lang;
    res.send(layout({ content: signinTemplate(req.cookies.lang), req }));
  });

  app.post('/login', async (req, res) => {
    const user = await usersRepo.getOneBy({ email: req.body.email });
    if (user) {
      if (req.body.password === user.password) {
        req.session = user;
        res.redirect('/');
      } else {
        res.redirect('/login');
      }
    } else {
      res.redirect('/login');
    }
  });

  app.get('/signout', (req, res) => {
    req.session = null;
    res.redirect('/');
  });
};
