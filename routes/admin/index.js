module.exports = (app) => {
  app.get('/admin', async (req, res) => {
    res.send('Hi');
  });
};
