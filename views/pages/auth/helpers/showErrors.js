const errorsLocal = require('../../../../public/localization/errors.json');
const { email, password, confirmPassword } = errorsLocal;

module.exports = (errors, input, lang) => {
  if (errors) {
    if (errors[input]) {
      return `${errorsLocal[input].msg[lang]}`;
    }
  }
};
