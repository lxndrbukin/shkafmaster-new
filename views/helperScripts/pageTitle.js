const titleLocal = require('../../public/localization/pageTitle.json');

module.exports = ({ req }) => {
  const { lang } = req.cookies;
  const url = req.originalUrl;
  return titleLocal
    .map((title) => {
      if (title.path === url) {
        return `${title.languages[lang]}`;
      } else {
        return '';
      }
    })
    .join(' ');
};
