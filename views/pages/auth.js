const authLocal = require('../../public/localization/authForm.json');
const { authHeader, authForm, authButton } = authLocal;

module.exports = (lang) => {
  return /*html*/ `
    <div class="form-wrapper">
      <h3 class="form-header">${authHeader[lang]}</h3>
      <form class="form">
        <input name="email" placeholder="${authForm.email[lang]}" class="form-input" type="text" />
        <input name="password" placeholder="${authForm.password[lang]}" class="form-input" type="password" />
        <input name="confirmPassword" placeholder="${authForm.confirmPassword[lang]}" class="form-input" type="password" />
        <input type="submit" class="form-submit" value="${authButton[lang]}" />
      </form>
    </div>
  `;
};
