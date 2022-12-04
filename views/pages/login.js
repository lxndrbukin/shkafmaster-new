const loginLocal = require('../../public/localization/loginForm.json');
const { loginHeader, loginForm, loginButton } = loginLocal;

module.exports = (lang) => {
  return /*html*/ `
    <div class="form-wrapper">
      <h3 class="form-header">${loginHeader[lang]}</h3>
      <form class="form" action="/login" method="POST">
        <input name="email" placeholder="${loginForm.email[lang]}" class="form-input" type="text" />
        <input name="password" placeholder="${loginForm.password[lang]}" class="form-input" type="password" />
        <input type="submit" class="form-submit" value="${loginButton[lang]}" />
      </form>
    </div>
  `;
};
