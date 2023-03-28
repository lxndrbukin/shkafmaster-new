const { signInErrors, signUpErrors } = require('./helpers/middlewares');
const { requireEmail } = require('./helpers/validators');
const { setLanguage } = require('./helpers/middlewares');

const signinTemplate = require('../views/pages/auth/signin');
const signupTemplate = require('../views/pages/auth/signup');
const usersRepo = require('../repositories/users');

module.exports = (app) => {
  app.get('/signup', setLanguage, (req, res) => {
    res.send(signupTemplate({ req }));
  });

  app.post('/signup', signUpErrors, async (req, res) => {
    const checkUser = await usersRepo.getOneBy({ email: req.body.email });
    const checkPasswd = await usersRepo.checkPassword(req.body.password);
    const { password, confirmPassword } = req.body;
    if (!checkUser || !req.body.email.length === 0) {
      if (checkPasswd && password === confirmPassword) {
        const user = await usersRepo.create({
          userId: usersRepo.randomId(),
          email: req.body.email,
          password: await usersRepo.createPassword(req.body.password),
        });
        user.save();
        req.session.userId = user.userId;
        // res.redirect('/');
      }
    }
    return res.send(signupTemplate({ req }));
  });

  app.get('/login', setLanguage, async (req, res) => {
    res.send(signinTemplate({ req }));
  });

  app.post('/login', signInErrors, async (req, res) => {
    if (req.session.userId) {
      res.redirect('/');
    } else {
      return res.send(signinTemplate({ req }));
    }
  });

  app.get('/signout', (req, res) => {
    req.session = null;
    res.redirect('/');
  });
};
