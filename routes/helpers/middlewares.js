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
};
