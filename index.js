const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');
const keys = require('./services/keys');

require('./models/User');

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: [keys.cookieKey],
    maxAge: 24 * 60 * 60 * 1000,
  })
);
app.use(cookieParser());

mongoose
  .connect(keys.mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('CONNECTED TO MONGODB'))
  .catch((error) => console.log(error));

require('./routes')(app);
require('./routes/products')(app);
require('./routes/contacts')(app);
require('./routes/profile')(app);
require('./routes/cart')(app);
require('./routes/auth')(app);
require('./routes/addItem')(app);
require('./routes/admin')(app);
require('./routes/admin/users')(app);
require('./routes/api')(app);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
