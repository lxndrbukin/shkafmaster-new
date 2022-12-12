const authLocal = require('../../../public/localization/authForm.json');
const { authHeader, authForm, authButton } = authLocal;
const showErrors = require('./helpers/showErrors');
const showErrorClass = require('./helpers/showErrorClass');

module.exports = ({ req }) => {
  const { lang } = req.cookies;
  return /*html*/ `
    <div class="box">
      <div class="form-wrapper">
        <h3 class="form-header">${authHeader[lang]}</h3>
        <form class="form" action="/signup" method="POST">
          <div class="form-input_wrapper ${showErrorClass({ req }, 'email')}">
            <input 
              name="email" 
              placeholder="${authForm.email[lang]}" 
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
              placeholder="${authForm.password[lang]}" 
              class="form-input ${showErrorClass({ req }, 'password')}" 
              type="password" 
            />
          </div>
            ${showErrors({ req }, 'password')}
          <div 
            class="form-input_wrapper ${showErrorClass(
              { req },
              'confirmPassword'
            )}"
          >
            <input 
              name="confirmPassword" 
              placeholder="${authForm.confirmPassword[lang]}" 
              class="form-input ${showErrorClass({ req }, 'confirmPassword')}" 
              type="password" 
            />
          </div>
            ${showErrors({ req }, 'confirmPassword')}
          <input type="submit" class="form-submit" value="${
            authButton[lang]
          }" />
        </form>
      </div>
    </div>
  `;
};
