const callbackLocal = require('../../public/localization/callback.json');
const { header, nameField, phoneField, submitButton } = callbackLocal;

module.exports = ({ req }) => {
  const { lang } = req.cookies;
  return /*html*/ `
    <div class="callback-wrapper">
      <div class="callback">
        <div class="callback-form">
        <h3 class="callback-header">${header[lang]}</h3>
          <form action="/" method="POST">
            <input placeholder="${nameField[lang]}" />
            <input placeholder="${phoneField[lang]}" />
            <input type="submit" class="button" value="${submitButton[lang]}" />
          </form>
        </div>
        <div class="callback-img">
          <img src="imgs/callback_hallway.png">
        </div>
      </div>
    </div>
    `;
};
