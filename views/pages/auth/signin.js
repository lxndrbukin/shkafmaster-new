const loginLocal = require('../../../public/localization/loginForm.json');
const { loginHeader, loginForm, loginButton, notSignedUpText, signupLink } =
  loginLocal;
const showErrors = require('./helpers/showErrors');
const showErrorClass = require('./helpers/showErrorClass');

module.exports = ({ req }) => {
  const { lang } = req.cookies;
  return /*html*/ `
    <div class="box">
      <div class="form-wrapper">
        <h3 class="form-header">${loginHeader[lang]}</h3>
        <form class="form" action="/login" method="POST">
        <div class="form-input_wrapper ${showErrorClass({ req }, 'email')}">
          <input 
            name="email" 
            placeholder="${loginForm.email[lang]}" 
            class="form-input" 
            type="text" 
          />
        </div>
            ${showErrors({ req }, 'email')}
          <div class="form-input_wrapper ${showErrorClass(
            { req },
            'password'
          )}">
            <input 
              name="password" 
              placeholder="${loginForm.password[lang]}" 
              class="form-input" 
              type="password" 
            />
          </div>
            ${showErrors({ req }, 'password')}
          <input type="submit" class="form-submit" value="${
            loginButton[lang]
          }" />
        </form>
        <div class="signup-redirect">
          <span>${notSignedUpText[lang]}</span>
          <a class="signup-link" href="/signup">${signupLink[lang]}</a>
        </div>
      </div>
    </div>
  `;
};
