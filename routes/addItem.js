const multer = require("multer");

const newItemTemplate = require("../views/pages/admin/addItem");
const catalogItemsRepo = require("../repositories/catalogItems");

const { setLanguage, checkLoggedIn } = require("./helpers/middlewares");
const upload = multer({});

module.exports = (app) => {
  app.get("/new-item", setLanguage, checkLoggedIn, (req, res) => {
    res.send(newItemTemplate({ req }));
  });

  app.post("/new-item", upload.single("image"), async (req, res) => {
    const encodedImage = req.file.buffer.toString("base64");
    const catalogItem = await catalogItemsRepo.create({
      ru: {
        name: req.body.nameRU,
        desc: req.body.descRU,
      },
      ro: {
        name: req.body.nameRO,
        desc: req.body.descRO,
      },
      category: req.body.category,
      image: encodedImage,
    });
    catalogItem.save();
    res.redirect("/new-item");
  });
};
