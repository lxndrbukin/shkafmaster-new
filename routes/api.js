const usersRepo = require('../repositories/users');
module.exports = (app) => {
  app.get('/_api/users', async (req, res) => {
    const users = await usersRepo.getAll();
    res.send(users);
  });
};
