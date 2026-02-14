const footerLocal = require("../../public/localization/footer.json");
const headerLocal = require("../../public/localization/header.json");
const { logo } = headerLocal;
const { footerMenu, promotions, contacts } = footerLocal;

module.exports = ({ req }) => {
  const { lang } = req.cookies;
  return /*html*/ `
    <div class="footer-wrapper">
      <footer class="footer">
        <div class="footer-col">
          <a class="logo logo-dark" href="/">
            <div class="logo_primary">
              <span class="logo_primary-left">SMART</span>
              <span class="logo_primary-right">MOBILI</span>
            </div>
          </a>
          <div class="footer-socials">
            <i class="fab fa-instagram-square"></i>
            <i class="fab fa-telegram-plane"></i>
            <i class="fab fa-facebook-square"></i>
          </div>
        </div>
        <div class="footer-col">
          <h3 class="footer-col-header">Каталог</h3>
          <ul>
            <li><a href="#">Кухни</a></li>
            <li><a href="#">Прихожие</a></li>
            <li><a href="#">Офисы</a></li>
            <li><a href="#">Шкафы</a></li>
            <li><a href="#">Столы</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3 class="footer-col-header">Информация</h3>
          <ul>
            <li><a href="#">О компании</a></li>
            <li><a href="#">Услуги и сроки</a></li>
            <li><a href="#">Оформление заказа</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <ul>
            <li><i class="fas fa-mobile-alt"></i> +373 69 923 028 +373 79 684 094</li>
          </ul>
        </div>
      </footer>
    </div>
  `;
};
