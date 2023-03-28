const usersRepo = require('../../repositories/users');

module.exports = {
  requireEmail: async (req, res, next) => {
    const existingUser = await usersRepo.getOneBy({ email: req.body.email });
    if (existingUser || req.body.email === '') {
      console.log('Exists');
    }
    next();
  },
};
