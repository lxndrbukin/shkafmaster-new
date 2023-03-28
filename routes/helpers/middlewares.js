const usersRepo = require('../../repositories/users');

module.exports = {
  formErrors() {},
  async signUpErrors(req, res, next) {
    req.errors = {};
    Object.keys(req.body).forEach(async (key, index) => {
      if (!req.body[key] || req.body[key] === '') {
        req.errors[key] = true;
      }
    });
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
    }
    if (!checkPasswd) {
      req.errors['password'] = true;
      if (confirmPassword !== password) {
        req.errors['confirmPassword'] = true;
      }
    }
    next();
  },
  async signInErrors(req, res, next) {
    req.errors = {};
    Object.keys(req.body).forEach(async (key, index) => {
      if (!req.body[key] || req.body[key] === '') {
        req.errors[key] = true;
      }
    });
    const user = await usersRepo.getOneBy({ email: req.body.email });
    const checkPasswd = await usersRepo.checkPassword(req.body.password);

    if (user) {
      const compare = await usersRepo.comparePasswords(
        user.password,
        req.body.password
      );
      if (compare) {
        req.session.userId = user.userId;
      }
      if (!compare || !checkPasswd) {
        req.errors['password'] = true;
      }
    }
    if (!user) {
      req.errors['email'] = true;
      if (!checkPasswd) {
        req.errors['password'] = true;
      }
    }
    next();
  },
  setLanguage(req, res, next) {
    !req.cookies.lang ? (req.cookies.lang = 'ro') : req.cookies.lang;
    next();
  },
  checkLoggedIn(req, res, next) {
    if (!req.cookies.session) {
      return res.redirect('/');
    }
    next();
  },
};
