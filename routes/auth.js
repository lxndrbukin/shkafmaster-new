const layout = require('../views/layout');
const signinTemplate = require('../views/pages/auth/signin');
const signupTemplate = require('../views/pages/auth/signup');
const usersRepo = require('../repositories/users');

module.exports = (app) => {
  app.get('/signup', (req, res) => {
    !req.cookies.lang ? req.cookies.lang === 'ro' : req.cookies.lang;
    res.send(layout({ content: signupTemplate({ req }), req }));
  });

  app.post('/signup', async (req, res) => {
    const { createPassword } = usersRepo;
    const checkUser = await usersRepo.getOneBy({ email: req.body.email });
    if (!checkUser) {
      const user = await usersRepo.create({
        userId: usersRepo.randomId(),
        email: req.body.email,
        password: await createPassword(req.body.password),
      });
      const { password, confirmPassword } = req.body;
      if (!password || password.length < 4) {
        req.errors = { password: true };
        return res.send(layout({ content: signupTemplate({ req }), req }));
      }
      if (password === confirmPassword) {
        user.save();
        req.session.userId = user.userId;
        res.redirect('/');
      } else {
        req.errors = { confirmPassword: true };
        return res.send(layout({ content: signupTemplate({ req }), req }));
      }
    } else {
      req.errors = { email: true };
      return res.send(layout({ content: signupTemplate({ req }), req }));
    }
  });

  app.get('/login', async (req, res) => {
    !req.cookies.lang ? req.cookies.lang === 'ro' : req.cookies.lang;
    res.send(layout({ content: signinTemplate({ req }), req }));
  });

  app.post('/login', async (req, res) => {
    const user = await usersRepo.getOneBy({ email: req.body.email });
    if (user) {
      const compare = await usersRepo.comparePasswords(
        user.password,
        req.body.password
      );
      if (compare) {
        req.session.userId = user.userId;
        res.redirect('/');
      } else {
        req.errors = { password: true };
        return res.send(layout({ content: signinTemplate({ req }), req }));
      }
    } else {
      req.errors = { email: true };
      return res.send(
        layout({ content: signinTemplate(req.cookies.lang, req.errors), req })
      );
    }
  });

  app.get('/signout', (req, res) => {
    req.session = null;
    res.redirect('/');
  });
};
