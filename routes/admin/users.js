const usersRepo = require('../../repositories/users');
const usersTemplate = require('../../views/pages/admin/users/index');

module.exports = (app) => {
  app.get('/admin/users', async (req, res) => {
    const users = await usersRepo.getAll();
    req.users = users;
    res.send(usersTemplate({ req }));
  });
};
