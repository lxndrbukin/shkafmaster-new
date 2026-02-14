const headerProfile = require("./headerProfile");
const headerLocal = require("../../public/localization/header.json");
const { logo, menuButtons, userMenu } = headerLocal;

module.exports = ({ req }) => {
  const languages = ["ro", "ru"];
  const { lang } = req.cookies;
  const { session } = req;
  const langSelector = () => {
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
          .join(" ")}
      </select>
    `;
  };

  const showProfileOrLogin = () => {
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

  return /*html*/ `
    <div class="header-wrapper">
      <header class="header">
        <a class="logo" href="/">
          <div class="logo_primary">
            <span class="logo_primary-left">SMART</span>
            <span class="logo_primary-right">MOBILI</span>
          </div>
        </a>
        <div class="header-links">
          <ul>
            <li><a href="/">${menuButtons.home[lang]}</a></li>
            <li><a href="/catalog">${menuButtons.products[lang]}</a></li>
            <li><a href="/contacts">${menuButtons.contacts[lang]}</a></li>
          </ul>
        </div>
        <div class="header_user-links">
          ${showProfileOrLogin()}
          ${langSelector()}
        </div>
      </header>
    </div>
  `;
};
