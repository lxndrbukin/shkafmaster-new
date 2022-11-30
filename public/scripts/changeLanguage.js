const selector = document.querySelector('.header_lang-selector');
selector.addEventListener('change', (e) => {
  document.cookie = `lang=${e.target.value};path=/`;
  location.reload();
});
