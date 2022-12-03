const bannerLocal = require('../../public/localization/banner.json');
const { primaryText, orderButton, call } = bannerLocal;

module.exports = ({ lang, path }) => {
  if (path === '/') {
    return /*html*/ `
      <div class="top-banner">
        <div class="top-banner_left">
          <span class="top-banner_primary-text">
            ${primaryText[lang]}
          </span>
          <a class="top-banner_order-btn" href="/order">
            ${orderButton[lang]}
          </a>
          <span class="top-banner_secondary-text">
            <b>${call[lang]}:</b> +373-69-9-23-0-28
          </span>
        </div>
        <div class="top-banner_right">
          <div class="top-banner-img"></div>
        </div>
      </div>
    `;
  } else {
    return '';
  }
};
