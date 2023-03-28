const bannerLocal = require('../../public/localization/banner.json');
const { primaryText, orderButton, catalogButton, secondaryText } = bannerLocal;

module.exports = ({ req }) => {
  const { lang } = req.cookies;
  return /*html*/ `
    <div class="top-banner_wrapper">
      <div class="top-banner">
        <div class="top-banner_left">
          <span class="top-banner_primary-text">
            ${primaryText[lang]}
          </span>
          <span class="top-banner_secondary-text">
            ${secondaryText[lang]}
          </span>
          <div class="button-container">
            <a class="button" href="/order">
              ${orderButton[lang]}
            </a>
            <a class="button button-transparent" href="/catalog">
              ${catalogButton[lang]} <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div class="top-banner_right">
          <img src="/imgs/wardrobe_img.png">
        </div>
      </div>
    </div>
  `;
};
