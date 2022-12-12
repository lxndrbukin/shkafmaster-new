const headerProfile = require('./headerProfile');
const headerLocal = require('../../public/localization/header.json');
const { logo, menuButtons, userMenu } = headerLocal;

const languages = ['ro', 'ru', 'en'];
const langSelector = (lang) => {
  return /*html*/ `
    <select class="header_lang-selector">
      ${languages
        .map((language) => {
          if (language === lang) {
            return /*html*/ `
              <option value=${language} selected>
                ${language.toUpperCase()}
              </option>
            `;
          } else {
            return /*html*/ `
              <option value=${language}>
                ${language.toUpperCase()}
              </option>
            `;
          }
        })
        .join(' ')}
    </select>
  `;
};

const showProfileOrLogin = ({ req }) => {
  const { session } = req;
  const { lang } = req.cookies;
  if (session.userId) {
    return /*html*/ `
      <a 
        class="header_user-link" 
        href="/cart" 
        title=${userMenu.cart[lang]}
      >
        <i class="fas fa-shopping-bag"></i>
      </a>
      ${headerProfile({ req })}
    `;
  } else {
    return /*html*/ `
      <a 
        class="header_user-link" 
        href="/login" 
        title=${userMenu.login[lang]}
      >
        <i class="fas fa-sign-in-alt"></i>
      </a>
    `;
  }
};

module.exports = ({ req }) => {
  const { lang } = req.cookies;
  return /*html*/ `
    <div class="header-wrapper">
      <header class="header">
        <a class="header-logo" href="/">
          <div class="header-logo_primary">
            <span class="header-logo_primary-left">SHKAF</span>
            <span class="header-logo_primary-right">MASTER</span>
          </div>
          <span class="header-logo_secondary">${logo[lang]}</span>
        </a>
        <div class="header-links">
          <ul>
            <li><a href="/">${menuButtons.home[lang]}</a></li>
            <li><a href="/products">${menuButtons.products[lang]}</a></li>
            <li><a href="/contacts">${menuButtons.contacts[lang]}</a></li>
          </ul>
        </div>
        <div class="header_user-links">
          ${showProfileOrLogin({ req })}
          ${langSelector(lang)}
        </div>
      </header>
    </div>
  `;
};
