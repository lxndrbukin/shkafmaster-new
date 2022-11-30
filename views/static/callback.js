const callbackLocal = require('../../public/localization/callback.json');
const { header, nameField, phoneField, submitButton } = callbackLocal;

module.exports = (lang) => {
  return /*html*/ `
    <div class="callback">
      <span class="callback-header">${header[lang]}</span>
      <form action="/" method="POST">
        <input placeholder=${nameField[lang]} />
        <input placeholder=${phoneField[lang]} />
        <input type="submit" value=${submitButton[lang]} />
      </form>
    </div>
    `;
};
