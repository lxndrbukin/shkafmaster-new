const authLocal = require('../../../public/localization/authForm.json');
const { authHeader, authForm, authButton } = authLocal;
const showErrors = require('./helpers/showErrors');

module.exports = ({ req }) => {
  const { lang } = req.cookies;
  const { errors } = req;
  return /*html*/ `
    <div class="form-wrapper">
      <h3 class="form-header">${authHeader[lang]}</h3>
      <form class="form" action="/signup" method="POST">
        <input 
          name="email" 
          placeholder="${authForm.email[lang]}" 
          class="form-input" 
          type="text" 
        />
          ${
            errors && errors['email']
              ? /*html*/ `<p class="form-error">${showErrors(
                  errors,
                  'email',
                  lang
                )}</p>`
              : ''
          }
        <input 
          name="password" 
          placeholder="${authForm.password[lang]}" 
          class="form-input" 
          type="password" 
        />
          ${
            errors && errors['password']
              ? /*html*/ `<p class="form-error">${showErrors(
                  errors,
                  'password',
                  lang
                )}</p>`
              : ''
          }
        <input 
          name="confirmPassword" 
          placeholder="${authForm.confirmPassword[lang]}" 
          class="form-input" type="password" 
        />
          ${
            errors && errors['confirmPassword']
              ? /*html*/ `<p class="form-error">${showErrors(
                  errors,
                  'confirmPassword',
                  lang
                )}</p>`
              : ''
          }
        <input type="submit" class="form-submit" value="${authButton[lang]}" />
      </form>
    </div>
  `;
};
