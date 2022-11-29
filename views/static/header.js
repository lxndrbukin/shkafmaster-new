const headerLocal = require('../../public/localization/header.json');
const { logo, menuButtons, userMenu } = headerLocal;

const languages = ['ro', 'ru'];
const langSelector = (lang) => {
  return /*html*/ `
    <select class="header_lang-selector">
      ${languages.map((language) => {
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
      })}
    </select>
  `;
};

module.exports = (lang) => {
  return /*html*/ `
    <header class="header">
      <a class="header-logo" href=/${lang}>
        <div class="header-logo_primary">
          <span class="header-logo_primary-left">SHKAF</span>
          <span class="header-logo_primary-right">MASTER</span>
        </div>
        <span class="header-logo_secondary">${logo[lang]}</span>
      </a>
      <div class="header-links">
        <ul>
          <li><a href="/${lang}">${menuButtons.home[lang]}</a></li>
          <li><a href="/${lang}/products">${menuButtons.products[lang]}</a></li>
          <li><a href="/${lang}/contacts">${menuButtons.contacts[lang]}</a></li>
        </ul>
      </div>
      <div class="header_user-links">
        <a 
          class="header_user-link" 
          href="/${lang}/cart" 
          title=${userMenu.cart[lang]}
        >
          <i class="fas fa-shopping-bag"></i>
        </a>
        <a 
          class="header_user-link" 
          href="/${lang}/profile" 
          title=${userMenu.userProfile[lang]}
        >
          <i class="far fa-user"></i>
        </a>
        ${langSelector(lang)}
      </div>
    </header>
  `;
};
