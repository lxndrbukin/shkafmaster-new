module.exports = {
  errors() {
    return (req, res, next) => {
      req.errors = {};
      Object.keys(req.body).forEach((key, index) => {
        if (!req.body[key]) {
          req.errors[key] = true;
          // console.log(req.errors);
        }
      });
      next();
    };
  },
  setLanguage(req, res, next) {
    !req.cookies.lang ? (req.cookies.lang = 'ro') : req.cookies.lang;
    next();
  },
};
