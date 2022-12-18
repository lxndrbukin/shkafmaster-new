const { errors } = require('./helpers/middlewares');
const { requireEmail } = require('./helpers/validators');
const signinTemplate = require('../views/pages/auth/signin');
const signupTemplate = require('../views/pages/auth/signup');
const usersRepo = require('../repositories/users');

module.exports = (app) => {
  app.get('/signup', (req, res) => {
    !req.cookies.lang ? (req.cookies.lang = 'ro') : req.cookies.lang;
    res.send(signupTemplate({ req }));
  });

  app.post('/signup', [requireEmail], async (req, res) => {
    req.errors = {};
    const checkUser = await usersRepo.getOneBy({ email: req.body.email });
    const checkPasswd = await usersRepo.checkPassword(req.body.password);
    const { password, confirmPassword } = req.body;
    if (checkUser || req.body.email === null) {
      req.errors['email'] = true;
      if (!checkPasswd) {
        req.errors['password'] = true;
      }
      if (password !== confirmPassword || confirmPassword.length === 0) {
        req.errors['confirmPassword'] = true;
      }
      return res.send(signupTemplate({ req }));
    } else if (!checkUser || !req.body.email.length === 0) {
      if (checkPasswd && password === confirmPassword) {
        const user = await usersRepo.create({
          userId: usersRepo.randomId(),
          email: req.body.email,
          password: await usersRepo.createPassword(req.body.password),
        });
        user.save();
        req.session.userId = user.userId;
        res.redirect('/');
      }
      if (!checkPasswd) {
        req.errors['password'] = true;
        if (confirmPassword !== password) {
          req.errors['confirmPassword'] = true;
        }
        return res.send(signupTemplate({ req }));
      }
    }
  });

  app.get('/login', async (req, res) => {
    !req.cookies.lang ? (req.cookies.lang = 'ro') : req.cookies.lang;
    res.send(signinTemplate({ req }));
  });

  app.post('/login', errors(), async (req, res) => {
    // req.errors = {};
    const user = await usersRepo.getOneBy({ email: req.body.email });
    const checkPasswd = await usersRepo.checkPassword(req.body.password);
    if (user) {
      const compare = await usersRepo.comparePasswords(
        user.password,
        req.body.password
      );
      if (compare) {
        req.session.userId = user.userId;
        res.redirect('/');
      } else if (!compare || !checkPasswd) {
        req.errors['password'] = true;
        return res.send(signinTemplate({ req }));
      }
    } else if (!user) {
      // req.errors['email'] = true;
      if (!checkPasswd) {
        req.errors['password'] = true;
      }
      return res.send(signinTemplate({ req }));
    }
  });

  app.get('/signout', (req, res) => {
    req.session = null;
    res.redirect('/');
  });
};
