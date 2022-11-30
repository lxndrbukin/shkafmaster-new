const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ['12safsdfweerdasfawtrr2'],
  })
);
app.use(cookieParser());

require('./routes')(app);
require('./routes/products')(app);
require('./routes/contacts')(app);
require('./routes/profile')(app);
require('./routes/cart')(app);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
