const headerLocal = require('../../public/localization/header.json');
const { userMenu } = headerLocal;

module.exports = ({ req }) => {
  const { email } = req.session;
  const { lang } = req.cookies;
  return /*html*/ `
    <div class="header_user">
      <div 
        class="header_user-link" 
        id="header_profile-icon"
        title=${userMenu.userProfile[lang]}
      >
        <i class="far fa-user"></i>
      </div>
      <div class="header_user-profile_wrapper">
        <div class="header_user-profile">
          <div class="header_user-profile-info">
            <i class="fas fa-user-circle"></i>
            <span>${email}</span>
          </div>
          <div class="header_user-profile_links">
            <a class="header_user-profile_link" href="/profile">Profile</a>
            <a class="header_user-profile_link" href="/signout">Sign out</a>
          </div>
        </div>
      </div>
    </div>
  `;
};
