const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");

require("dotenv").config();

require("./models/User");
require("./models/CatalogItem");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: [process.env.COOKIE_KEY],
    maxAge: 24 * 60 * 60 * 1000,
  })
);
app.use(cookieParser());

mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("CONNECTED TO MONGODB"))
  .catch((error) => console.error("MongoDB connection error:", error));

require("./routes")(app);
require("./routes/catalog")(app);
require("./routes/contacts")(app);
require("./routes/profile")(app);
require("./routes/cart")(app);
require("./routes/auth")(app);
require("./routes/addItem")(app);
require("./routes/admin")(app);
require("./routes/admin/users")(app);
require("./routes/api")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
