const loginLocal = require('../../../public/localization/loginForm.json');
const { loginHeader, loginForm, loginButton, notSignedUpText, signupLink } =
  loginLocal;
const showErrors = require('./helpers/showErrors');

module.exports = ({ req }) => {
  const { lang } = req.cookies;
  const { errors } = req;
  return /*html*/ `
    <div class="form-wrapper">
      <h3 class="form-header">${loginHeader[lang]}</h3>
      <form class="form" action="/login" method="POST">
        <input 
          name="email" 
          placeholder="${loginForm.email[lang]}" 
          class="form-input" 
          type="text" 
        />
          ${
            errors && errors['email']
              ? /*html*/ `<p>${showErrors(errors, 'email', lang)}</p>`
              : ''
          }
        <input 
          name="password" 
          placeholder="${loginForm.password[lang]}" 
          class="form-input" 
          type="password" 
        />
          ${
            errors && errors['password']
              ? /*html*/ `<p>${showErrors(errors, 'password', lang)}</p>`
              : ''
          }
        <input type="submit" class="form-submit" value="${loginButton[lang]}" />
      </form>
      <div class="signup-redirect">
        <span>${notSignedUpText[lang]}</span>
        <a class="signup-link" href="/signup">${signupLink[lang]}</a>
      </div>
    </div>
  `;
};
