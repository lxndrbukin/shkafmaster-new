const footerLocal = require('../../public/localization/footer.json');
const { footerMenu } = footerLocal;

module.exports = ({ req }) => {
  const { lang } = req.cookies;
  return /*html*/ `
    <footer class="footer">
      <div class="footer-left">
        <div class="footer_social-links">
          <a class="footer_social-link" target="_blank" href="/">
            <i class="fab fa-telegram-plane"></i>
          </a>
          <a 
            class="footer_social-link" 
            target="_blank" 
            href="https://www.instagram.com/shkafmaster2004/"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a class="footer_social-link" target="_blank" href="/">
            <i class="fab fa-vk"></i>
          </a>
        </div>
        <div class="footer-copyright">
          © SHKAFMASTER
        </div>
      </div>
      <div class="footer-right">
        <div class="footer_nav-links">
          <a class="footer_nav-link" href="/">${footerMenu.products[lang]}</a>
          <a class="footer_nav-link" href="/">${footerMenu.promotions[lang]}</a>
          <a class="footer_nav-link" href="/">${footerMenu.contacts[lang]}</a>
        </div>
      </div>
    </footer>
  `;
};
