const profileIcon = document.querySelector('.fa-user');
const headerProfile = document.querySelector('.header_user-profile_wrapper');
let showProfile = false;

if (headerProfile) {
  window.addEventListener('click', (e) => {
    if (
      e.target !== profileIcon &&
      e.target !== headerProfile &&
      !headerProfile.innerHTML.includes(e.target.innerHTML)
    ) {
      if (showProfile) {
        showProfile = !showProfile;
      }
      headerProfile.style.display = 'none';
    } else if (e.target === profileIcon) {
      showProfile = !showProfile;
      if (!showProfile) {
        headerProfile.style.display = 'none';
      } else if (showProfile) {
        headerProfile.style.display = 'block';
      }
    }
  });
}
