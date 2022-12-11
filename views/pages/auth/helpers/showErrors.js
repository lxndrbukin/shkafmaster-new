const errorsLocal = require('../../../../public/localization/errors.json');

module.exports = ({ req }, input) => {
  const { errors } = req;
  const { lang } = req.cookies;
  if (errors) {
    if (errors[input]) {
      return /*html*/ `<p class="form-error">${errorsLocal[input].msg[lang]}</p>`;
    } else {
      return '';
    }
  } else {
    return '';
  }
};
